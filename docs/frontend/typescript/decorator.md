### 前言

以前用 Nest 来写过简单的后台系统，但是都没怎么用到 TS，对它里面用到的大量的装饰器也只是一知半解，仅仅停留在了会用的层面。这次实习回到学校了开始准备为毕设做打算了，打算用 Nest 来写后台，所以现在有时间了打算再回来把装饰器的概念给重新梳理一遍。不管以后用不用 Nest，我觉得装饰器也是必须得学习的一个东西，目前装饰器在 JS 中也是处于 Stage2 阶段了，在 TS 中则作为实验特性来进行支持。 [这里也有 TS 官方对于装饰器的描述](https://www.typescriptlang.org/docs/handbook/decorators.html)。

### 装饰器概念

它是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。 通俗的**讲装饰器就是一个函数/方法**，可以注入到**类、方法、属性参数**上来扩展类、属性、方法、参数的功能。 常见的装饰器有：

- 类装饰器
- 属性装饰器
- 方法装饰器
- 参数装饰器

装饰器的写法：普通装饰器(无法传参)、装饰器工厂(可传参)

### 类装饰器

类装饰器在类声明之前被声明〈紧靠着类声明)。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

#### 普通装饰器：不能传参

```typescript
/**
 * 装饰器
 * target属性就是使用装饰器的那个类
 */
function logClass(target: any) {
  target.prototype.api = "http://www.baidu.com";
  target.prototype.hello = () => {
    console.log("hello world");
  };
}

@logClass
class Http {
  constructor() {}
}

const http: any = new Http();

console.log(http.api); // http://www.baidu.com
http.hello(); //hello world
```

#### 装饰器工厂：可以传参

```typescript
/**
 * 装饰器工厂
 * params就是我们要传递的参数
 * target就是要使用装饰器的那个类
 */
function logClass(params: string) {
  return function (target: any) {
    target.prototype.hello = () => {
      console.log(params);
    };
  };
}

@logClass("hello world")
class Http {
  constructor() {}
}

const http: any = new Http();
http.hello(); //打印hello world
```

#### 重载构造函数

类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明

```typescript
function logClass(target: any) {
  return class extends target {
    api: string = "修改后的api";
    getData() {
      console.log("修改:", this.api);
    }
  };
}

@logClass
class Http {
  public api: string | undefined;
  constructor() {
    this.api = "没修改前的api";
  }

  getData() {
    console.log(this.api);
  }
}

const http = new Http();
http.getData(); //修改: 修改后的api
```

### 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数:

- 装饰的实例。对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 装饰的属性名

```typescript
/**
 * 属性装饰器
 * params就是装饰器传入的参数
 * target就是装饰的实例
 * attr就是装饰的属性
 */
function logProperty(params: any) {
  return function (target: any, attr: string) {
    //通过这样的方式就可以通过装饰器来修改属性值
    target[attr] = params;
  };
}

class Http {
  @logProperty("属性装饰器赋值")
  public api: string | undefined;
  constructor() {}

  getData() {
    console.log(this.api);
  }
}

const http = new Http();
http.getData(); // 属性装饰器赋值
```

### 方法装饰器

它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。方法装饰会在运行时传入下列个参数:

- 装饰的实例。对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 成员的名字
- 成员的属性描述符

```typescript
/**
 * params 传递给装饰器的值
 * target 装饰器的实例
 * methodName 方法名称
 * descriptor 描述
 */
function get(params: any) {
  console.log(params); // http://www.baidu.com
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    //修改前保存原始传入的方法
    let originalMethod = descriptor.value;

    //重写传入的方法
    descriptor.value = function (...args: any[]) {
      //执行原来的方法
      originalMethod.apply(this, args);

      args = args.map((val) => +val);

      console.log(args);
    };
  };
}

class Http {
  constructor() {}

  @get("http://www.baidu.com")
  getApi() {}
}

const http: any = new Http();

http.getApi("123", "456", "789"); //打印[123, 456, 789]
```

### 方法参数装饰器

运行时会被当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入 3 个参数：

- 装饰的实例。对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 方法名
- 参数在函数参数列表中的索引

```typescript
function logParams(param: any) {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log(target); // Http实例
    console.log(methodName); // getApi
    console.log(paramIndex); // 0
  };
}

class Http {
  constructor() {}
  getApi(@logParams("id") id: number) {
    console.log(id);
  }
}

const http = new Http();

http.getApi(123456);
```

### 装饰器的执行顺序

这里先放结论，具体的代码请往下看：

- 属性 > 方法 > 方法参数 > 类
- 如果有多个同样的装饰器，它会先执行后面的(从下到上，方法参数装饰器执行顺序是从右到左)

```typescript
// 先进行一些装饰器的定义
function logClass1(target: any) {
  console.log("logClass1");
}

function logClass2(target: any) {
  console.log("logClass2");
}

function logAttribute1(param?: any) {
  return function (target: any, attrName: string) {
    console.log("attribute1");
  };
}

function logAttribute2(param?: any) {
  return function (target: any, attrName: string) {
    console.log("attribute2");
  };
}

function logMethod1(param?: any) {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("logMethod1");
  };
}

function logMethod2(param?: any) {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("logMethod2");
  };
}

function logParam1(param?: any) {
  return function (target: any, methodName: string, index: number) {
    console.log("logParam1");
  };
}

function logParam2(param?: any) {
  return function (target: any, methodName: string, index: number) {
    console.log("logParam2");
  };
}

@logClass1
@logClass2
class Http {
  @logAttribute1()
  api1: string | undefined;
  @logAttribute2()
  api2: string | undefined;

  constructor() {}

  @logMethod1()
  get1() {}

  @logMethod2()
  get2() {}

  get3(@logParam1() param1: string, @logParam2() param2: string) {}
}
```

上述代码最终的打印结果如下，可以验证了我们一开始得出的执行顺序的结论

```
attribute1
attribute2
logMethod1
logMethod2
logParam2
logParam1
logClass2
logClass1
```

### 结论

装饰器允许向一个现有的对象添加新的功能，同时又不改变其结构。这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能，可以提高代码的复用性，同时减少代码量。
