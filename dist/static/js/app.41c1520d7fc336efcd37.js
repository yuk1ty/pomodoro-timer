webpackJsonp([0],[,,function(t,e,n){"use strict";var r=n(1),o=n(16),i=n(11),a=n.n(i);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Index",component:a.a}]})},function(t,e,n){function r(t){n(9)}var o=n(0)(n(4),n(14),r,null,null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n.n(r);e.default={components:{"pomodoro-timer":o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{time:"00:00",timerId:"",isBreak:!1,enableToStart:!1}},methods:{start:function(){var t=this;t.enableToStart=!0;var e=t.isBreak?300:1500;t.timerId=window.setInterval(function(){e--;var n=Math.floor(e/60),r=e%60;n<10&&(n="0"+n),r<10&&(r="0"+r),t.time=n+":"+r,0===e&&t._clearTimer()},1e3)},stop:function(){this.enableToStart=!1,this._clearTimer()},_clearTimer:function(){this.time="00:00",this.isBreak=this._reverse(this.isBreak),window.clearInterval(this.timerId)},_reverse:function(t){return!t}},beforeDestroy:function(){this._clearTimer()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3),i=n.n(o),a=n(2);r.a.config.productionTip=!1,new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(t){n(10)}var o=n(0)(n(5),n(15),r,"data-v-89f238d8",null);t.exports=o.exports},function(t,e,n){function r(t){n(8)}var o=n(0)(n(6),n(13),r,"data-v-0cbc891e",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-body"},[n("p",[t._v(t._s(t.time))]),t._v(" "),n("ul",[n("li",[n("button",{attrs:{disabled:t.enableToStart},on:{click:function(e){t.start()}}},[t._v("Start")])]),t._v(" "),n("li",[n("button",{on:{click:function(e){t.stop()}}},[t._v("Stop")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pomodoro-timer"}},[t._m(0),t._v(" "),n("pomodoro-timer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Pomodoro Timer")]),t._v(" "),n("nav",[n("ul",[n("li",[t._v("FAQ")])])])])}]}}],[7]);
//# sourceMappingURL=app.41c1520d7fc336efcd37.js.map