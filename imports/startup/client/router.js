FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {

  FlowRouter.initialize({
  });
});

FlowRouter.route("/:view?", {
  name:'landing',
  triggersEnter:[function(c,r){
    if(!c.params.view)
      r("/home");
  }],
  action:function(params,queryParams){
    mwcLayout.render("demo-landing",{"main":"test-layout"});
  }
});



import '../../ui/bower_components/webcomponentsjs/webcomponents-lite.min.js'
import "../../ui/bower_components/polymer/polymer.html";
//import "../../ui/bower_components/mwc-layout/mwc-layout.html"; //if you are using bower for mwc-layout
import '../../ui';






console.log('%cEnjoy the %cM %cW %cC %cgoodness','color:#d61a7f;', 'color:red;font-size:50px;font-weight:bold;font-family:sans-serif;','color:green;font-size:50px;font-weight:bold;font-family:sans-serif;','color:blue;font-size:50px;font-weight:bold;font-family:sans-serif;','color:#d61a7f;');

