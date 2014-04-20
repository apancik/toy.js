toy.js
======

Simple ~600 bytes [MVP](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter) framework written in JavaScript.

## Models
Models use [observer pattern](http://en.wikipedia.org/wiki/Observer_pattern) to communicate with presenters and to notify them about any change.

To enable this behaviour just call

    toy.model(this);
    
inside the model object. After that you can trigger events by calling
    
    this.trigger(event)
    
These events will be then captured by presenters as needed.

## Presenters

Presenters are vanilla javascript modules that handle

* model instantiation
* user event binding (using jQuery or similar) and subsequent model modification
* model event binding and view modification (using toy's own templating or other methods)

Model event binding happens simply by calling

    .on(event, fn)
 
on model to subscribe to its events.

## Templates
Toy.js includes simple logic-less templates inspired by [Secrets of the JavaScript Ninja](http://ejohn.org/blog/javascript-micro-templating/) and [Moustache](http://mustache.github.io/) to let you quickly iterate on your ideas before you upgrade to something more complex.

    toy.render(template, data)

combines template like

```
<template id="test-template">
  <p>{{message}}</p>
</template>
```
which you can store/retrieve from HTML head and body at your convenience and

```
{
  message: "Hello world!"
}
```
into rendered HTML.

## License

toy.js is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Sample is ported from [TodoMVC](http://todomvc.com/) and is MIT licensed

Project is heavily inspired by [riot.js](https://muut.com/riotjs/) (1kb MV* framework)
