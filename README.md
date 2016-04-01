# Synthesis is meteor + polymer

## Usage

Define your elements in the client folder.

you can add js in separate file or you can add it inside the element html file using script tag.

client/test-element.html


```html
<dom-module id="test-element">
  <template>
    <div class="horizontal layout">
      <div>
        name : {{name}}
      </div>
      <div id="nnDiv" hidden="{{nndHidden}}">
        nickname:{{nickname}}
      </div>
    </div>
    <paper-button raised on-click="showNickName">{{show}} nickname</paper-button>
  </template>
</dom-module>
```
client/test-element.js

```js
Polymer({
  is:"test-element",
  properties:{
    name:{
      type:String,
      value:"Arun Kumar"
    },
    nickname:{
      type:String,
      value:"tkay"
    },
    show:{
      type:String,
      value:"show"
    },
    nndHidden:{
      type:Boolean,
      value:true
    }
  },
  showNickName:function(){
    this.nndHidden = !this.nndHidden;
    this.show = this.nndHidden ? "show" : "hide";
  }

})
```

client/main.html (you can use any filename)

```html

<head>
  <title>Synthesis</title>
</head>

<body class="fullbleed">

  <mwc-layout id="demo-landing">
    <div region="header"></div>
    <div region="main"></div>
  </mwc-layout>

</body>

```

bower_components are kept inside public folder.

bower.json (public/bower.json)

```json
{
    "dependencies": {
        "iron-elements": "PolymerElements/iron-elements#^1.0.0",
        "neon-elements": "PolymerElements/neon-elements#^1.0.0",
        "paper-elements": "PolymerElements/paper-elements#^1.0.5",
        "polymer": "Polymer/polymer#^1.0.0"
    },
    "name": "mwc-synthesis",
    "version": "0.0.1"
}

```

config.vulcanize

```json

{
  "polyfill": "/bower_components/webcomponentsjs/webcomponents.min.js",
  "imports": [
    "/bower_components/font-roboto/roboto.html",
    "/bower_components/iron-elements/iron-elements.html",
    "/bower_components/paper-elements/paper-elements.html",
    "/bower_components/neon-animation/neon-animation.html",
    "/bower_components/mwc-layout/mwc-layout.html",
    "/bower_components/polymer/polymer.html"
  ]
}

```


### MWC packages included.

[mwc:synthesis](https://github.com/meteorwebcomponents/synthesis) -  Synthesis is meteor + polymer.

[mwc:mixin](https://github.com/meteorwebcomponents/mixin) -  Polymer data package

[mwc:router](https://github.com/meteorwebcomponents/router) - Flowrouter with polymer


[MWC Layout](https://github.com/meteorwebcomponents/layout) - polymer layout renderer . Added using bower.


### Other Packages Used

[differential:vulcanize](https://atmospherejs.com/differential/vulcanize) to vulcanize polymer elements instead of adding them in the head directly.

[Flow Router](https://github.com/kadirahq/flow-router) - Carefully Designed Client Side Router for Meteor
