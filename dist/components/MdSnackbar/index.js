/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=540)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var a,u,s,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(a=e,f=e.default),u="function"==typeof f?f.options:f,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=s):r&&(s=r),s&&(l=u.functional,c=l?u.render:u.beforeCreate,l?(u._injectStyles=s,u.render=function(e,t){return s.call(t),c(e,t)}):u.beforeCreate=c?[].concat(c,s):[s]),{esModule:a,exports:f,options:u}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,u.default)(t,e)},o=n(4),i=r(o),a=n(6),u=r(a)},11:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,n){(function(t){(function(){var n,r,o,i,a,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),u=1e9*t.uptime(),a=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(14))},14:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&h&&(m=!1,h.length?d=h.concat(d):p=-1,d.length&&u())}function u(){var e,t;if(!m){for(e=o(a),m=!0,t=d.length;t;){for(h=d,d=[];++p<t;)h&&h[p].run();p=-1,t=d.length}h=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,d,m,h,p,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}})(),d=[],m=!1,p=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new s(e,n)),1!==d.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,a,u,s,l,c,f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),s=n(8),l=r(s),c=n(26),f=r(c),d=n(420),m=r(d),h=n(422),t.default=new u.default({name:"MdSnackbar",components:{MdPortal:f.default,MdSnackbarContent:m.default},props:{mdActive:Boolean,mdPersistent:Boolean,mdDuration:{type:Number,default:4e3},mdPosition:i({type:String,default:"center"},(0,l.default)("md-position",["center","left"]))},computed:{snackbarClasses:function(){return o({},"md-position-"+this.mdPosition,!0)}},watch:{mdActive:function(e){var t=this;e?(0,h.createSnackbar)(this.mdDuration,this.mdPersistent,this).then((function(){t.$emit("update:mdActive",!1),t.$emit("md-opened")})):((0,h.destroySnackbar)(),this.$emit("md-closed"))}}})},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdSnackbarContent",props:{mdClasses:Array}}},2:function(t,n){t.exports=e},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),o=n(2),i=r(o),a=n(9),u=r(a),t.default={name:"MdPortal",abstract:!0,props:{mdAttachToParent:Boolean,mdTarget:{type:null,validator:function(e){return!!(HTMLElement&&e&&e instanceof HTMLElement)||(i.default.util.warn("The md-target-el prop is invalid. You should pass a valid HTMLElement.",this),!1)}}},data:function(){return{leaveTimeout:null,originalParentEl:null}},computed:{transitionName:function(){var e,t,n=this._vnode.componentOptions.children[0];if(n){if(e=n.data.transition)return e.name;if(t=n.componentOptions.propsData.name)return t}return"v"},leaveClass:function(){return this.transitionName+"-leave"},leaveActiveClass:function(){return this.transitionName+"-leave-active"},leaveToClass:function(){return this.transitionName+"-leave-to"}},watch:{mdTarget:function(e,t){this.changeParentEl(e),t&&this.$forceUpdate()}},methods:{getTransitionDuration:function(e){var t=window.getComputedStyle(e).transitionDuration,n=parseFloat(t,10),r=t.match(/m?s/);return r&&(r=r[0]),"s"===r?1e3*n:"ms"===r?n:0},killGhostElement:function(e){e.parentNode&&(this.changeParentEl(this.originalParentEl),this.$options._parentElm=this.originalParentEl,e.parentNode.removeChild(e))},initDestroy:function(e){var t=this,n=this.$el;e&&this.$el.nodeType===Node.COMMENT_NODE&&(n=this.$vnode.elm),n.classList.add(this.leaveClass),n.classList.add(this.leaveActiveClass),this.$nextTick().then((function(){n.classList.add(t.leaveToClass),clearTimeout(t.leaveTimeout),t.leaveTimeout=setTimeout((function(){t.destroyElement(n)}),t.getTransitionDuration(n))}))},destroyElement:function(e){var t=this;(0,u.default)((function(){e.classList.remove(t.leaveClass),e.classList.remove(t.leaveActiveClass),e.classList.remove(t.leaveToClass),t.$emit("md-destroy"),t.killGhostElement(e)}))},changeParentEl:function(e){e&&e.appendChild(this.$el)}},mounted:function(){this.originalParentEl||(this.originalParentEl=this.$el.parentNode,this.$emit("md-initial-parent",this.$el.parentNode)),this.mdAttachToParent&&this.$el.parentNode.parentNode?this.changeParentEl(this.$el.parentNode.parentNode):document&&this.changeParentEl(this.mdTarget||document.body)},beforeDestroy:function(){this.$el.classList?this.initDestroy():this.killGhostElement(this.$el)},render:function(e){var t=this.$slots.default;if(t&&t[0])return t[0]}}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),a=n(4),u=r(a),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var r,o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,a=null,u=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},417:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),a=n(418),u=r(a),t.default=function(e){(0,i.default)(e),e.component(u.default.name,u.default)}},418:function(e,t,n){"use strict";function r(e){n(419)}var o,i,a,u,s,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(186),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(423),s=n(0),l=!1,c=r,f=null,d=null,m=s(i.a,u.a,l,c,f,d),t.default=m.exports},419:function(e,t){},420:function(e,t,n){"use strict";var r,o,i,a,u,s,l,c,f,d;Object.defineProperty(t,"__esModule",{value:!0}),r=n(187),o=n.n(r);for(i in r)"default"!==i&&(function(e){n.d(t,e,(function(){return r[e]}))})(i);a=n(421),u=n(0),s=!0,l=null,c=null,f=null,d=u(o.a,a.a,s,l,c,f),t.default=d.exports},421:function(e,t,n){"use strict";var r=function(e,t){var n=t._c;return n("transition",{attrs:{name:"md-snackbar",appear:""}},[n("div",{staticClass:"md-snackbar",class:t.props.mdClasses},[n("div",{staticClass:"md-snackbar-content"},[t._t("default")],2)])])},o=[],i={render:r,staticRenderFns:o};t.a=i},422:function(e,t,n){"use strict";function r(e,t,n){return new Promise(function(r){o={destroy:function(){o=null,r()}},e!==1/0&&(i=window.setTimeout((function(){a(),t||n._vnode.componentInstance.initDestroy(!0)}),e))})}var o,i,a;Object.defineProperty(t,"__esModule",{value:!0}),o=null,i=null,a=t.destroySnackbar=function(){return new Promise(function(e){o?(window.clearTimeout(i),o.destroy(),window.setTimeout(e,400)):e()})},t.createSnackbar=function(e,t){return o?a().then((function(){return r(e,t)})):r(e,t)}},423:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mdPersistent&&e.mdDuration!==1/0?n("md-portal",[n("keep-alive",[e.mdActive?n("md-snackbar-content",{attrs:{"md-classes":[e.snackbarClasses,e.$mdActiveTheme]}},[e._t("default")],2):e._e()],1)],1):n("md-portal",[e.mdActive?n("md-snackbar-content",{attrs:{"md-classes":[e.snackbarClasses,e.$mdActiveTheme]}},[e._t("default")],2):e._e()],1)},o=[],i={render:r,staticRenderFns:o};t.a=i},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},540:function(e,t,n){e.exports=n(417)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===m}function a(e){return Array.isArray(e)?[]:{}}function u(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(a(e),e,t):e}function s(e,t,n){return e.concat(t).map((function(e){return u(e,n)}))}function l(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=u(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=c(e[o],t[o],n):r[o]=u(t[o],n)})),r}function c(e,t,n){var r,o,i;return n=n||{},n.arrayMerge=n.arrayMerge||s,n.isMergeableObject=n.isMergeableObject||f,r=Array.isArray(t),o=Array.isArray(e),i=r===o,i?r?n.arrayMerge(e,t,n):l(e,t,n):u(t,n)}var f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})},h=c,t.default=h},7:function(e,t){},8:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(o.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}},9:function(e,t,n){(function(t){var r,o,i,a,u,s=n(13),l="undefined"==typeof window?t:window,c=["moz","webkit"],f="AnimationFrame",d=l["request"+f],m=l["cancel"+f]||l["cancelRequest"+f];for(r=0;!d&&r<c.length;r++)d=l[c[r]+"Request"+f],m=l[c[r]+"Cancel"+f]||l[c[r]+"CancelRequest"+f];d&&m||(o=0,i=0,a=[],u=1e3/60,d=function(e){if(0===a.length){var t=s(),n=Math.max(0,u-(t-o));o=n+t,setTimeout((function(){var e,t=a.slice(0);for(a.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return a.push({handle:++i,callback:e,cancelled:!1}),i},m=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return d.call(l,e)},e.exports.cancel=function(){m.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=d,e.cancelAnimationFrame=m}}).call(t,n(11))}})}));