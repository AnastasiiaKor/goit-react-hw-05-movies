"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[919],{7031:function(e,t,n){n.d(t,{aV:function(){return u},ck:function(){return l},up:function(){return f}});var o,r,a,i=n(168),s=n(7402),c=n(1087),u=s.Z.ul(o||(o=(0,i.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),l=s.Z.li(r||(r=(0,i.Z)(["\n  width: calc((100% - 10px) / 2);\n"]))),f=(0,s.Z)(c.rU)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n  color: #000000;\n  font-size: 30px;\n  font-weight: 500;\n"])))},2906:function(e,t,n){n.d(t,{W2:function(){return l},aV:function(){return d},h4:function(){return f},rU:function(){return p}});var o,r,a,i,s=n(168),c=n(1087),u=n(7402),l=u.Z.div(o||(o=(0,s.Z)(["\n  width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),f=u.Z.header(r||(r=(0,s.Z)(["\n  background-color: #000000;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 0px;\n"]))),d=u.Z.ul(a||(a=(0,s.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  gap: 30px;\n"]))),p=(0,u.Z)(c.OL)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n  font-size: 30px;\n  font-weight: 500;\n\n  &.active {\n    color: red;\n  }\n"])))},9919:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var o=n(3433),r=n(5861),a=n(9439),i=n(4687),s=n.n(i),c=n(2791),u=n(1087),l=n(8674),f=n(7689),d=n(9173),p=n(7031),m=n(184);var v=function(e){var t=e.movies,n=(0,f.TH)();return(0,m.jsx)(p.aV,{children:t.map((function(e){var t=e.id,o=e.title,r=e.poster_path;return(0,m.jsx)(p.ck,{children:(0,m.jsxs)(u.rU,{to:"".concat(t),state:{from:n.pathname+n.search},children:[(0,m.jsx)("img",{loading:"lazy",src:r?"https://image.tmdb.org/t/p/w500"+r:d,alt:o}),(0,m.jsx)("p",{children:o})]})},t)}))})},g=n(9142);function h(e,t,n){return(t=(0,g.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var O=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(o&&(o+=" "),o+=t);return o},x=["theme","type"],C=["delay","staleId"],_=function(e){return"number"==typeof e&&!isNaN(e)},I=function(e){return"string"==typeof e},w=function(e){return"function"==typeof e},L=function(e){return I(e)||w(e)?e:null},N=function(e){return(0,c.isValidElement)(e)||I(e)||w(e)||_(e)};function k(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var r=e.children,i=e.position,u=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),r=function e(r){var a;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(a=t.classList).remove.apply(a,(0,o.Z)(n)))};(e=t.classList).add.apply(e,(0,o.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,c.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,r)}}function R(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var a=setTimeout((function(){r.apply(void 0,(0,o.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},Z=function(e){var t=e.theme,n=e.type,o=T(e,x);return c.createElement("svg",E({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},j={info:function(e){return c.createElement(Z,E({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(Z,E({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(Z,E({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(Z,E({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function M(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],r=(0,c.useState)([]),i=(0,a.Z)(r,2),s=i[0],u=i[1],l=(0,c.useRef)(null),f=(0,c.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},p=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return f.get(e)}}).current;function m(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function v(e){u((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function g(){var e=p.queue.shift();y(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var o=t.delay,r=t.staleId,a=T(t,C);if(N(e)&&!function(e){return!l.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||f.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,u=a.data,d=p.props,m=function(){return v(i)},h=null==s;h&&p.count++;var b,O,x=E(E(E({},d),{},{style:d.toastStyle,key:p.toastKey++},a),{},{toastId:i,updateId:s,data:u,closeToast:m,isIn:!1,className:L(a.className||d.toastClassName),bodyClassName:L(a.bodyClassName||d.bodyClassName),progressClassName:L(a.progressClassName||d.progressClassName),autoClose:!a.isLoading&&(b=a.autoClose,O=d.autoClose,!1===b||_(b)&&b>0?b:O),deleteToast:function(){var e=R(f.get(i),"removed");f.delete(i),P.emit(4,e);var t=p.queue.length;if(p.count=null==i?p.count-p.displayedToast:p.count-1,p.count<0&&(p.count=0),t>0){var o=null==i?p.props.limit:1;if(1===t||1===o)p.displayedToast++,g();else{var r=o>t?t:o;p.displayedToast=r;for(var a=0;a<r;a++)g()}}else n()}});x.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(w(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):I(r)||_(r)?a=r:o?a=j.spinner():function(e){return e in j}(n)&&(a=j[n](i))),a}(x),w(a.onOpen)&&(x.onOpen=a.onOpen),w(a.onClose)&&(x.onClose=a.onClose),x.closeButton=d.closeButton,!1===a.closeButton||N(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!N(d.closeButton)||d.closeButton);var k=e;(0,c.isValidElement)(e)&&!I(e.type)?k=(0,c.cloneElement)(e,{closeToast:m,toastProps:x,data:u}):w(e)&&(k=e({closeToast:m,toastProps:x,data:u})),d.limit&&d.limit>0&&p.count>d.limit&&h?p.queue.push({toastContent:k,toastProps:x,staleId:r}):_(o)?setTimeout((function(){y(k,x,r)}),o):y(k,x,r)}}function y(e,t,n){var r=t.toastId;n&&f.delete(n);var a={content:e,props:t};f.set(r,a),u((function(e){return[].concat((0,o.Z)(e),[r]).filter((function(e){return e!==n}))})),P.emit(4,R(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return p.containerId=e.containerId,P.cancelEmit(3).on(0,h).on(1,(function(e){return l.current&&v(e)})).on(5,m).emit(2,p),function(){f.clear(),P.emit(3,p)}}),[]),(0,c.useEffect)((function(){p.props=e,p.isToastActive=d,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function z(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",C),document.addEventListener("touchmove",x),document.addEventListener("touchend",C);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=D(t.nativeEvent),d.y=B(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?O():b()}}function b(){r(!0)}function O(){r(!1)}function x(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&O(),d.x=D(t),d.y=B(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function C(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",C);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",b,{once:!0}),w(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;w(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",b),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(_.onMouseEnter=O,_.onMouseLeave=b),y&&(_.onClick=function(e){h&&h(e),d.canCloseOnClick&&g()}),{playToast:b,pauseToast:O,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:_}}function A(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,u=e.style,l=e.controlledProgress,f=e.progress,d=e.rtl,p=e.isIn,m=e.theme,v=i||l&&0===f,g=E(E({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});l&&(g.transform="scaleX(".concat(f,")"));var y=O("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),T=w(s)?s({rtl:d,type:a,defaultClassName:y}):O(y,s);return c.createElement("div",h({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:T,style:g},l&&f>=1?"onTransitionEnd":"onAnimationEnd",l&&f<1?null:function(){p&&o()}))}var F=function(e){var t=z(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,l=e.onClick,f=e.type,d=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,g=e.className,h=e.style,y=e.bodyClassName,T=e.bodyStyle,b=e.progressClassName,x=e.progressStyle,C=e.updateId,_=e.role,I=e.progress,L=e.rtl,N=e.toastId,k=e.deleteToast,R=e.isIn,P=e.isLoading,Z=e.iconOut,j=e.closeOnClick,M=e.theme,D=O("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":j}),B=w(g)?g({rtl:L,position:v,type:f,defaultClassName:D}):O(D,g),F=!!I||!u,q={closeToast:p,type:f,theme:M},H=null;return!1===i||(H=w(i)?i(q):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,q):A(q)),c.createElement(m,{isIn:R,done:k,position:v,preventExitTransition:o,nodeRef:r},c.createElement("div",E(E({id:N,onClick:l,className:B},a),{},{style:h,ref:r}),c.createElement("div",E(E({},R&&{role:_}),{},{className:w(y)?y({type:f}):O("Toastify__toast-body",y),style:T}),null!=Z&&c.createElement("div",{className:O("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},Z),c.createElement("div",null,s)),H,c.createElement(S,E(E({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:L,theme:M,delay:u,isRunning:n,isIn:R,closeToast:p,hide:d,type:f,style:x,className:b,controlledProgress:F,progress:I||0}))))},q=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},H=k(q("bounce",!0)),V=(k(q("slide",!0)),k(q("zoom")),k(q("flip")),(0,c.forwardRef)((function(e,t){var n=M(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,l=e.containerId;function f(e){var t=O("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return w(i)?i({position:e,rtl:u,defaultClassName:t}):O(t,L(i))}return(0,c.useEffect)((function(){t&&(t.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?E({},s):E(E({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(F,E(E({},r),{},{isIn:a(r.toastId),style:E(E({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));V.displayName="ToastContainer",V.defaultProps={position:"top-right",transition:H,autoClose:5e3,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Q,U=new Map,W=[],G=1;function X(){return""+G++}function Y(e){return e&&(I(e.toastId)||_(e.toastId))?e.toastId:X()}function K(e,t){return U.size>0?P.emit(0,e,t):W.push({content:e,options:t}),t.toastId}function J(e,t){return E(E({},t),{},{type:t&&t.type||e,toastId:Y(t)})}function $(e){return function(t,n){return K(t,J(e,n))}}function ee(e,t){return K(e,J("default",t))}ee.loading=function(e,t){return K(e,J("default",E({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ee.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=I(r)?ee.loading(r,n):ee.loading(r.render,E(E({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=E(E(E({type:e},s),n),{},{data:r}),i=I(t)?{render:t}:t;return o?ee.update(o,E(E({},a),i)):ee(i.render,E(E({},a),i)),r}ee.dismiss(o)},u=w(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},ee.success=$("success"),ee.info=$("info"),ee.error=$("error"),ee.warning=$("warning"),ee.warn=ee.warning,ee.dark=function(e,t){return K(e,J("default",E({theme:"dark"},t)))},ee.dismiss=function(e){U.size>0?P.emit(1,e):W=W.filter((function(t){return null!=e&&t.options.toastId!==e}))},ee.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},ee.isActive=function(e){var t=!1;return U.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ee.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=U.get(n||Q);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=E(E(E({},o),t),{},{toastId:t.toastId||e,updateId:X()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,K(i,a)}}),0)},ee.done=function(e){ee.update(e,{progress:1})},ee.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},ee.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ee.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,(function(e){Q=e.containerId||e,U.set(Q,e),W.forEach((function(e){P.emit(0,e.content,e.options)})),W=[]})).on(3,(function(e){U.delete(e.containerId||e),0===U.size&&P.off(0).off(1).off(5)}));var te,ne,oe=n(2906),re=n(168),ae=n(7402),ie=ae.Z.form(te||(te=(0,re.Z)(["\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),se=ae.Z.button(ne||(ne=(0,re.Z)(["\n  cursor: pointer;\n"])));var ce=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],f=(0,u.lr)(),d=(0,a.Z)(f,2),p=d[0],g=d[1],h=p.get("query");return(0,c.useEffect)((function(){function e(){return e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.oW)(t.trim());case 3:if(!(n=e.sent).length){e.next=7;break}return i((0,o.Z)(n)),e.abrupt("return");case 7:ee.error("No movies found. Try one more time )"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),e.apply(this,arguments)}h&&function(t){e.apply(this,arguments)}(h)}),[h]),(0,m.jsx)("main",{children:(0,m.jsxs)(oe.W2,{children:[(0,m.jsxs)(ie,{onSubmit:function(e){e.preventDefault(),g({query:e.target.query.value}),e.target.reset()},children:[(0,m.jsx)("input",{autoComplete:"off",name:"query",type:"text",autoFocus:!0}),(0,m.jsx)(se,{type:"submit",children:"Search"})]}),(0,m.jsx)(v,{movies:n}),(0,m.jsx)(V,{})]})})}},9173:function(e,t,n){e.exports=n.p+"static/media/placeholder.1c03061f51b504e0d479.webp"}}]);
//# sourceMappingURL=919.2452d91b.chunk.js.map