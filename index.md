---
layout: default
---

## Variable declaration

ES6 introduces the concept of two new types of variable declarations, the `let` and `const` keywords. The let keyword will inevitably replace the `var` keyword, however the let keyword provides some new semantics around block scoping. Take the following example where we define a variable twice with the same name in different scopes.

{% highlight javascript %}
let x = 'world';
{
  let x = 'hello';
  console.log(x);
}
  
console.log(x);

class Test extends Component {
  constructor() {
    super();
  }
}
{% endhighlight %}

The output of this code running will be 'hello world'. Redefining the variable x inside of a new scope means it doesn't affect the variable in the outer scope. If we were to run the same code using the var keyword instead then the output would be 'hello hello'.

The const keyword on the other hand is a new concept for JavaScript, it allows you to define read-only variables or constants within your application. If we run the following code then we will receive an error `Error: "x" is read-only` because we're trying to change the value of variable x.

{% highlight javascript %}
const x = 'hello';
{
  x = 'test';
}
{% endhighlight %}
