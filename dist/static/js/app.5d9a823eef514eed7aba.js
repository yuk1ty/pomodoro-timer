webpackJsonp([0],[,,function(t,e,n){"use strict";function r(t,e){if(i)switch(e){case o.INFO:console.info(t);break;case o.WARN:console.warn(t);break;case o.ERROR:console.error(t);break;case o.DEBUG:console.log(t);break;default:return}}var i=!0,o={INFO:0,WARN:1,ERROR:2,DEBUG:3};e.a={info:function(t){r(t,o.INFO)},warn:function(t){r(t,o.WARN)},error:function(t){r(t,o.ERROR)},getValueAndLogging:function(t,e){return r(e+t,o.DEBUG),t}}},function(t,e,n){"use strict";var r=n(1),i=n(20),o=n(15),a=n.n(o);r.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Index",component:a.a}]})},function(t,e,n){function r(t){n(13)}var i=n(0)(n(6),n(18),r,null,null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),i=n.n(r);e.default={components:{"pomodoro-timer":i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),i=n(9);e.default={data:function(){return{state:0,loopCounter:0,normal:!0,isPaused:!1,time:this.setTimer(),timerId:""}},methods:{setTimer:function(){return this._setup(),n.i(r.a)(this.state)},start:function(){var t=this,e=n.i(r.b)(this.state);this.state===r.c.WORKING&&this.loopCounter++,this.normal=!1,t.timerId=window.setInterval(function(){e--;var n=Math.floor(e/60),r=e%60;n<10&&(n="0"+n),r<10&&(r="0"+r),t.time=n+":"+r,0===e&&t._clearTimer()},r.d)},stop:function(){this._clearTimer()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.normal=!0},_setup:function(){void 0===this.state&&(this.state=r.c.WORKING)},_clearTimer:function(){this.state===r.c.WORKING?n.i(i.a)("Take a Break!"):this.state!==r.c.BREAK&&this.state!==r.c.LONG_BREAK||n.i(i.a)("Work!"),this.state=n.i(r.e)(this.state,this.loopCounter),this.time=this.setTimer(),this.normal=!0,window.clearInterval(this.timerId)}},beforeDestroy:function(){window.clearInterval(this.timerId)},created:function(){n.i(i.b)()}}},function(t,e,n){"use strict";function r(){Notification.requestPermission().then(function(t){"denied"===t?o.a.warn("If you want to use a desktop notification, please set the permission of desktop notification ok."):"default"===t&&o.a.warn("The permission request was dismissed.")})}function i(t){new Notification(t)}n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});var o=n(2)},function(t,e,n){"use strict";function r(t){switch(t){case u.WORKING:return a.a.getValueAndLogging(c.workingTime,"time (working): ");case u.BREAK:return a.a.getValueAndLoggng(c.breakTime,"time (break): ");case u.LONG_BREAK:return a.a.getValueAndLoggng(c.longTermBreakTime,"time (long-break): ");default:return a.a.error("Illegal Argument (state): "+t),0}}function i(t){switch(t){case u.WORKING:return"25:00";case u.BREAK:return"05:00";case u.LONG_BREAK:return"15:00";default:return"00:00"}}function o(t,e){var n=e%4==0;return a.a.info("counter = "+e+", isLongBreak = "+n),t===u.WORKING?n?u.LONG_BREAK:u.BREAK:t===u.BREAK||t===u.LONG_BREAK?u.WORKING:(a.a.error("Illegal Argument (state): "+t),u.WORKING)}n.d(e,"d",function(){return s}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"e",function(){return o});var a=n(2),s=1e3,u={WORKING:0,BREAK:1,LONG_BREAK:2,PAUSE:3,RESUME:4},c={workingTime:1500,breakTime:300,longTermBreakTime:900}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(4),o=n.n(i),a=n(3),s=n(5);r.a.config.productionTip=!1,r.a.use(s.a),new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(t){n(14)}var i=n(0)(n(7),n(19),r,"data-v-89f238d8",null);t.exports=i.exports},function(t,e,n){function r(t){n(12)}var i=n(0)(n(8),n(17),r,"data-v-0cbc891e",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-body"},[n("p",[t._v(t._s(t.time))]),t._v(" "),n("ul",[t.normal?n("li",[n("button",{on:{click:function(e){t.start()}}},[t._v("Start")])]):n("li",[t.isPaused?n("button",{on:{click:function(e){t.resume()}}},[t._v("Resume")]):n("button",{on:{click:function(e){t.pause()}}},[t._v("Pause")])]),t._v(" "),n("li",[n("button",{on:{click:function(e){t.stop()}}},[t._v("Stop")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pomodoro-timer"}},[t._m(0),t._v(" "),n("pomodoro-timer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Pomodoro Timer")]),t._v(" "),n("nav",[n("ul",[n("li",[t._v("FAQ")])])])])}]}}],[11]);
//# sourceMappingURL=app.5d9a823eef514eed7aba.js.map