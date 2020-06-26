---
title: "js设计模式阅读笔记"
date: 2020-6-26 18:00:00
tags:
  - javascript
description: "什么？前端也有设计模式？除了发布/订阅 和 观察者 之外还有这么多设计模式？对！就是有这么多！这是我之前阅读《Learning JavaScript Design Patterns》的学习笔记，里面提炼了该书的一些重点，供大家初步认识前端设计模式。"
---

什么？前端也有设计模式？除了发布/订阅 和 观察者 之外还有这么多设计模式？对！就是有这么多！这是我之前阅读《Learning JavaScript Design Patterns》的学习笔记，里面提炼了该书的一些重点，供大家初步认识前端设计模式。

## 什么是设计模式

回答这个问题，首先要了解什么是模式？模式，就是一个可重用的解决方案，可适用于各种场景。而JavaScript的设计模式，可以理解为我们在做web开发中，解决不同问题的模板。

那么理解和熟悉模式为什么是如此的重要？设计模式有以下三点好处：

- **模式是行之有效的解决方法**：他们提供固定的解决方法来解决在软件开发中出现的问题，这些都是久经考验的反应了开发者的经验和见解的使用模式来定义的技术。
- **模式可以很容易地重用**：一个模式通常反映了一个可以适应自己需要的开箱即用的解决方案。这个特性让它们很健壮。
- **模式善于表达**：当我们看到一个提供某种解决方案的模式时，一般有一组结构和词汇可以非常优雅地帮助表达相当大的解决方案。

## 设计模式六大原则

### 总原则：开闭原则（Open Close Principle）

在程序需要进行拓展到时候，不能修改原有的代码，而应该拓展原有的代码。

**总结：对拓展开放，对修改关闭。**

以下所有设计模式的原则都是对开闭原则思想的补充。

### 单一职责原则
>每个类只有单一的一种职责，且只能实现单一的职责。如若不然，就应该把类拆分。

### 里氏替换原则（Liskov Substitution Principle）
>面向对象设计的基本原则之一。
>任何基类可以出现的地方，子类也一定可以出现。
>当衍生类替换基类，软件单位不受影响时，基类才能真正被复用。里氏替换原则是对开闭原则的补充，而基类对子类的继承关系就是开闭原则抽象思想的具体实现。

### 依赖倒装原则 （Dependence Inversion Principle）
>面向接口编程。当使用具体类时，不与具体类接触，而是直接与上层接口交互。

### 接口隔离原则（Interface Segregation Principle）
>创建接口时不得出现其使用不到的而又必须实现的方法。
>如果必须如此，则需要讲接口拆分为多个接口。

### 迪米特法则（Demeter Principle）
>创建一个类，需要尽可能少的去使用依赖的类（对依赖的类知道的越少越好），无论被依赖项多么复杂，都需要尽可能的将其逻辑封装在内部。

### 合成复用原则（Composition Reuse Principle）
>优先使用 合成 或者 聚合 的方法使用类，而不是通过继承。

## 常见设计模式

js设计模式中共分为三类：

- 创建型👨设计模式：**该模式关注与对象创建的机制。** 创建一个对象，会给项目添加额外的复杂性。而这个模式的存在，就是通过控制创建过程解决这个问题。
- 结构🕸设计模式：**该模式关注对象的结构组成。** 修改一个对象的某一功能时，该对象的其他功能不受影响。（解耦合）
- 行为👏设计模式：**该模式改善、精简系统中不同对象之间的通信。**

三种设计模式可概述为：**创造，改变，使用。**

下面我将详细介绍这三种设计模式。

## 创建型设计模式

### 构造器🤖️模式

概述：构造器模式是被用来创建特殊类型的对象的。在对象初次被创建（内存分配完毕）时，通过传入参数，构造器对成员的属性和方法进行赋值。

```javascript
function Car( model, year, miles ) { 
    this.model = model; 
    this.year = year; 
    this.miles = miles; 
} 
// 注意这里我们使用 Object.prototype.newMethod 而不是 Object.prototype ，以避免我们重新定义原型对象
Car.prototype.toString = function () { 
    return this.model + " has done " + this.miles + " miles"; 
}; 
// 使用: 
var civic = new Car( "Honda Civic", 2009, 20000 ); 
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
```

### 单例👤模式

概述：一个类只能有一个实例化对象。
单例模式从全局的代码空间只能够隔离了一块共享的资源空间，是**为了提供单独的函数来访问指针。**

- 每个类只有一个实例，这个实例必须通过一个广为人知的接口，来被客户访问。
- 子类如果要扩展这个唯一的实例，客户可以不用修改代码就能使用这个扩展后的实例。

在实践中，当一个对象需要和另外的对象进行跨系统协作时，单例模式很有用！

当在设计中需要使用单例模式时，表明系统中的模块要么强耦合，要么分散在代码库的多个部分。
**缺点：单例模式难进行测试**（隐藏的依赖关系，很难创建多个实例，很难清理依赖关系）。

**经典的实现方式**：如果对象不存在，创建一个新的实例对象，如果存在，返回该对象的引用。

```javascript
var SingletonTester = (function () { 
    function Singleton( options ) { 
        options = options || {}; 
        this.name = "SingletonTester"; 
        this.pointX = options.pointX || 6; 
        this.pointY = options.pointY || 10; 
    } 
    var _static = { 
        name: "SingletonTester", 
        getInstance: function( options ) { 
            //这里判断如果不存在实例对象，创建一个新的对象并赋值，如果存在，则将实力对象返回
            if( instance === undefined ) { 
                instance = new Singleton( options ); 
            } 
            return instance; 
        }
    }; 
    //SingletonTester就是一个_static，外面的函数变量时局部的，不会被外部访问
    return _static; 
})(); 

var singletonTest = SingletonTester.getInstance({ pointX: 5});
console.log( singletonTest.pointX );  //结果为5
```

### 工厂 / 抽象工厂🏭  模式
概述：一个工厂能提供一个创建对象的公共接口，我们可以在其中指定我们希望被创建的工厂对象的类型。

其常用于创建ui组件。但不是通过直接使用new操作符 或者 通过另外一个构造器来创建这个组件，而是向一个工厂对象索要一个新的组件。我们告知工厂我们需要什么类型的组件（例如：“按钮”，“面板”），而它会将其初始化，然后返回供我们使用。

**何时使用工厂模式？**

* 当我们的对象或者组件设置涉及到高程度级别的复杂度时。
* 当我们需要根据我们所在的环境方便的生成不同对象的实体时。
* 当我们在许多共享同一个属性的许多小型对象或组件上工作时。
* 当带有其它仅仅需要满足一种API约定(又名鸭式类型)的对象的组合对象工作时.这对于解耦来说是有用的。

**何时不要使用工厂模式？**

* 当被应用到错误的问题类型上时,这一模式会给应用程序引入大量不必要的复杂性
* 对象高效创建的同时，也会给依赖这个过程带来尽可能多的单元测试

## 结构设计模式

### 外观 / 门面 🎀模式

概述：当我们提出一个门面，我们要向这个世界展现的是一个外观，这一外观可能藏匿着一种非常与众不同的真实。（即封装复杂的逻辑操作，展示简单明了的api）

jquery中，门面模式同时需要简化一个类的接口，和把类同使用它的代码解耦。
这给予了我们使用一种方式直接同子系统交互的能力，这一方式有时候会比直接访问子系统更加不容易出错。

```javascript
var addMyEvent = function(el,ev,fn){

  if(el.addEventListener){
    el.addEventListener(ev, fn, false);
  }else if(el.attachEvent){
    el.attachEvent("on" + ev, fn);
  }else{
    el["on" + ev] = fn;
  }
  
}

```

- 优点：实现过程简单，方便使用。
- 缺点：门面在为我们提供实现的同时是否为我们带来了隐性的消耗，如果是这样的话，那么这种消耗是否合理。

### Mixin模式
概述：提供能够被一个或者一组子类简单继承功能的类,意在**重用**其功能。

使用：将一些类所需要的公用的方法写入到一个Mixin类当中，然后再将Mixin添加到所需混入的类中。

以下即使混入的方法 :
```
augment（主类，Mixin类）{
  如果：带参数，将包含参数的方法混入到主类中；
  否则：将所有方法混入到主类中
}
```

- 优点：降解功能的重复性,增加功能的重用性。避免开发中的重复，使开发者只需关注彼此不同的部分。
- 缺点：可能导致原型污染和一定程度上的对我们原有功能的不确定性。**在大型的系统中,很可能是有这种情况的。**

### 装饰模式
概述：提供了向一个系统中现有的类动态添加行为的能力，与Mixin模式类似。本身并不关心类的基础功能，而只是将它自身添加一个装饰机器（用于改变自身的功能）。

以下是一个带有新功能的装饰构造器。

```javascript
// A vehicle constructor
function vehicle( vehicleType ){

    // some sane defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";

}

// Test instance for a basic vehicle
var testInstance = new vehicle( "car" );
console.log( testInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
var truck = new vehicle( "truck" );

// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};

truck.setColor = function( color ){
    this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );

console.log( truck );

// Outputs:
// vehicle:truck, model:CAT, color: blue

// Demonstrate "vehicle" is still unaltered
var secondInstance = new vehicle( "car" );
console.log( secondInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000
```

**装饰器模式并不去深入依赖于对象是如何创建的，而是专注于扩展它们的功能这一问题上。**

### 亨元模式⭐️

概述：亨元模式是一种优化程序性能的模式，本质为减少对象创建的个数。 

在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。

- 优点：大大减少对象的创建，降低系统的内存，使效率提高。
- 缺点：提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。

使用场景： 1、系统有大量相似对象。 2、需要缓冲池的场景。

## 行为设计模式

### 观察者👀模式

概述：当一个对象的状态发生变化时，能够自动通知其他关联对象，自动刷新对象状态。

**Observer模式的角色**

Subject（被观察者）： 当被观察者的状态发生改变时，通知队列中所有观察者对象。Subject需要维持（添加，删除，通知）一个观察者对象的队列列表。

Obersever（观察者）：当被观察者的状态发生改变时，观察者将通过一个回调函数得到通知。

具体实现：

- Subject：包含一些基本的属性状态和其他操作。
- Observer：得到通知后完成一些具体的业务逻辑处理。

```javascript
const Obersever = {
    clientList:[],    //用于存放事件
    on(eventType，fn){
        //用于订阅事件
        //clientList[key].push(fn)
    },
    trigger(eventType，…args){
        //发布事件
    },
    remove(eventType，fn){
        //进行比对并删除相应的事件
    }
}
```

### 中介者👨‍👨‍👦模式

概述：处理封装对象之间的交互。协调对象，进行合理的组织，降低耦合。

MVC就是中介者模式在框架设计中的应用。

控制层在MVC中扮演着中介者的作用，用来控制视图层和模型层的组合逻辑。

```javascript
function View(){
  this.el = document.createElement("div")
  this.getEl = function(){
    return this.el
  }
}

function Ctrl(view){
  this.view = view
  this.model = new Model({
    name:"戴夫",
    memo:"歪比巴卜"
  })
  this.init = function(){
    this.view.getEl().onclick = function(){
      this.model.save()
    }
  }
}

function Model(info){
  this.save = function(){
    console.log("保存信息" + info)
  }
}

function requestClient(){
  new Ctrl(new View()).init()
}
```

中间人模式最大的好处就是，它节约了对象或者组件之间的通信信道，这些对象或者组件存在于从多对多到多对一的系统之中。由于解耦合水平的因素，添加新的发布或者订阅者是相对容易的。

ps：原文电子书可点击 [阅读原文] 查看内容！
