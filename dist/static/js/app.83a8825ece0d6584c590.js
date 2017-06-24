webpackJsonp([0],[,,function(t,e,n){"use strict";var i=n(1),r=n(20),o=n(15),s=n.n(o);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Index",component:s.a}]})},,function(t,e,n){function i(t){n(13)}var r=n(0)(n(6),n(18),i,null,null);t.exports=r.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),r=n.n(i);e.default={components:{"pomodoro-timer":r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),r=n(9);e.default={data:function(){return{state:0,loopCounter:0,normal:!0,isPaused:!1,time:this.setTimer(),timerId:""}},methods:{setTimer:function(){return this._setup(),n.i(i.a)(this.state)},start:function(){var t=this,e=n.i(i.b)(this.state);this.state===i.c.WORKING&&this.loopCounter++,this.normal=!1,t.timerId=window.setInterval(function(){e--;var n=Math.floor(e/60),i=e%60;n<10&&(n="0"+n),i<10&&(i="0"+i),t.time=n+":"+i,0===e&&t._clearTimer()},1e3)},stop:function(){this._clearTimer()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.normal=!0},_setup:function(){void 0===this.state&&(this.state=i.c.WORKING)},_clearTimer:function(){this.state===i.c.WORKING?n.i(r.a)("Take a Break!"):this.state!==i.c.BREAK&&this.state!==i.c.LONG_BREAK||n.i(r.a)("Work!"),this.state=n.i(i.d)(this.state,this.loopCounter),this.time=this.setTimer(),this.normal=!0,window.clearInterval(this.timerId)}},beforeDestroy:function(){window.clearInterval(this.timerId)},created:function(){n.i(r.b)()}}},function(t,e,n){"use strict";function i(){Notification.requestPermission().then(function(t){"denied"===t?console.log("If you want to use a desktop notification, please set the permission of desktop notification ok."):"default"===t&&console.log("The permission request was dismissed.")})}function r(t){new Notification(t)}n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r})},function(t,e,n){"use strict";function i(t){switch(t){case s.WORKING:return a.workingTime;case s.BREAK:return a.breakTime;case s.LONG_BREAK:return a.longTermBreakTime;default:return 0}}function r(t){switch(t){case s.WORKING:return"25:00";case s.BREAK:return"05:00";case s.LONG_BREAK:return"15:00";default:return"00:00"}}function o(t,e){var n=e%4==0;return console.log("counter = "+e+", isLongBreak = "+n),t===s.WORKING?n?s.LONG_BREAK:s.BREAK:t===s.BREAK||t===s.LONG_BREAK?s.WORKING:(console.log("Illegal Argument (state): "+t),s.WORKING)}n.d(e,"c",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"d",function(){return o});var s={WORKING:0,BREAK:1,LONG_BREAK:2,PAUSE:3,RESUME:4},a={workingTime:1500,breakTime:300,longTermBreakTime:900}},function(t,e,n){"use strict";function i(t){var e=t.title,n=t.message,i=t.type,r=t.timeout,o=t.cb;return l.a[i](n,e,r,o)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(4),s=n.n(o),a=n(2),u=n(5),c=n.n(u),f=n(3),l=n.n(f),d={success:"success",error:"error",info:"info",warn:"warn"};l.a.init({types:d});var m={success:i,error:i,info:i,warn:i};r.a.config.productionTip=!1,r.a.use(c.a,m),new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function i(t){n(14)}var r=n(0)(n(7),n(19),i,"data-v-89f238d8",null);t.exports=r.exports},function(t,e,n){function i(t){n(12)}var r=n(0)(n(8),n(17),i,"data-v-0cbc891e",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-body"},[n("p",[t._v(t._s(t.time))]),t._v(" "),n("ul",[t.normal?n("li",[n("button",{on:{click:function(e){t.start()}}},[t._v("Start")])]):n("li",[t.isPaused?n("button",{on:{click:function(e){t.resume()}}},[t._v("Resume")]):n("button",{on:{click:function(e){t.pause()}}},[t._v("Pause")])]),t._v(" "),n("li",[n("button",{on:{click:function(e){t.stop()}}},[t._v("Stop")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pomodoro-timer"}},[t._m(0),t._v(" "),n("pomodoro-timer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Pomodoro Timer")]),t._v(" "),n("nav",[n("ul",[n("li",[t._v("FAQ")])])])])}]}}],[11]);
//# sourceMappingURL=app.83a8825ece0d6584c590.js.map