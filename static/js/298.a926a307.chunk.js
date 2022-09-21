"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[298],{5758:function(e,n,t){var o=t(4836);n.Z=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}o.default=e,t&&t.set(e,o)}(t(2791));var r=o(t(5649)),i=t(184);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}var c=(0,r.default)((0,i.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");n.Z=c},5112:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(3366),r=t(7462),i=t(2791),a=t(8182),c=t(4419),u=t(277),s=t(5513),l=t(7962),d=t(1217);function f(e){return(0,d.Z)("MuiBackdrop",e)}(0,t(5878).Z)("MuiBackdrop",["root","invisible"]);var p=t(184),v=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],m=(0,u.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),b=i.forwardRef((function(e,n){var t,i,u=(0,s.Z)({props:e,name:"MuiBackdrop"}),d=u.children,b=u.component,h=void 0===b?"div":b,y=u.components,Z=void 0===y?{}:y,g=u.componentsProps,x=void 0===g?{}:g,E=u.className,k=u.invisible,w=void 0!==k&&k,R=u.open,T=u.transitionDuration,P=u.TransitionComponent,S=void 0===P?l.Z:P,A=(0,o.Z)(u,v),C=(0,r.Z)({},u,{component:h,invisible:w}),F=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,c.Z)(t,f,n)}(C);return(0,p.jsx)(S,(0,r.Z)({in:R,timeout:T},A,{children:(0,p.jsx)(m,{"aria-hidden":!0,as:null!=(t=Z.Root)?t:h,className:(0,a.Z)(F.root,E),ownerState:(0,r.Z)({},C,null==(i=x.root)?void 0:i.ownerState),classes:F,ref:n,children:d})}))}))},7962:function(e,n,t){var o=t(7462),r=t(3366),i=t(2791),a=t(6752),c=t(4142),u=t(6780),s=t(7933),l=t(184),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],f={entering:{opacity:1},entered:{opacity:1}},p=i.forwardRef((function(e,n){var t=(0,c.Z)(),p={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},v=e.addEndListener,m=e.appear,b=void 0===m||m,h=e.children,y=e.easing,Z=e.in,g=e.onEnter,x=e.onEntered,E=e.onEntering,k=e.onExit,w=e.onExited,R=e.onExiting,T=e.style,P=e.timeout,S=void 0===P?p:P,A=e.TransitionComponent,C=void 0===A?a.ZP:A,F=(0,r.Z)(e,d),M=i.useRef(null),O=(0,s.Z)(h.ref,n),I=(0,s.Z)(M,O),D=function(e){return function(n){if(e){var t=M.current;void 0===n?e(t):e(t,n)}}},j=D(E),L=D((function(e,n){(0,u.n)(e);var o=(0,u.C)({style:T,timeout:S,easing:y},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),g&&g(e,n)})),N=D(x),B=D(R),K=D((function(e){var n=(0,u.C)({style:T,timeout:S,easing:y},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),k&&k(e)})),W=D(w);return(0,l.jsx)(C,(0,o.Z)({appear:b,in:Z,nodeRef:M,onEnter:L,onEntered:N,onEntering:j,onExit:K,onExited:W,onExiting:B,addEndListener:function(e){v&&v(M.current,e)},timeout:S},F,{children:function(e,n){return i.cloneElement(h,(0,o.Z)({style:(0,o.Z)({opacity:0,visibility:"exited"!==e||Z?void 0:"hidden"},f[e],T,h.props.style),ref:I},n))}}))}));n.Z=p},3928:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(7462),r=(t(2791),t(2554)),i=t(184);function a(e){var n=e.styles,t=e.defaultTheme,o=void 0===t?{}:t,a="function"===typeof n?function(e){return n(void 0===(t=e)||null===t||0===Object.keys(t).length?o:e);var t}:n;return(0,i.jsx)(r.xB,{styles:a})}var c=t(4205);var u=function(e){return(0,i.jsx)(a,(0,o.Z)({},e,{defaultTheme:c.Z}))}},6283:function(e,n,t){t.d(n,{Z:function(){return P}});var o=t(3433),r=t(9439),i=t(4942),a=t(3366),c=t(7462),u=t(2791),s=t(8182),l=t(4419),d=t(9853),f=t(277),p=t(5513),v=t(2763),m=t(7933),b=t(4565),h=t(1217);function y(e){return(0,h.Z)("MuiLink",e)}var Z=(0,t(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=t(8529),x=t(2065),E={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=function(e){var n=e.theme,t=e.ownerState,o=function(e){return E[e]||e}(t.color),r=(0,g.D)(n,"palette.".concat(o),!1)||t.color,i=(0,g.D)(n,"palette.".concat(o,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,x.Fq)(r,.4)},w=t(184),R=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],T=(0,f.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,c.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:k({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(Z.focusVisible),{outline:"auto"}))})),P=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiLink"}),i=t.className,f=t.color,b=void 0===f?"primary":f,h=t.component,Z=void 0===h?"a":h,g=t.onBlur,x=t.onFocus,k=t.TypographyClasses,P=t.underline,S=void 0===P?"always":P,A=t.variant,C=void 0===A?"inherit":A,F=t.sx,M=(0,a.Z)(t,R),O=(0,v.Z)(),I=O.isFocusVisibleRef,D=O.onBlur,j=O.onFocus,L=O.ref,N=u.useState(!1),B=(0,r.Z)(N,2),K=B[0],W=B[1],H=(0,m.Z)(n,L),U=(0,c.Z)({},t,{color:b,component:Z,focusVisible:K,underline:S,variant:C}),V=function(e){var n=e.classes,t=e.component,o=e.focusVisible,r=e.underline,i={root:["root","underline".concat((0,d.Z)(r)),"button"===t&&"button",o&&"focusVisible"]};return(0,l.Z)(i,y,n)}(U);return(0,w.jsx)(T,(0,c.Z)({color:b,className:(0,s.Z)(V.root,i),classes:k,component:Z,onBlur:function(e){D(e),!1===I.current&&W(!1),g&&g(e)},onFocus:function(e){j(e),!0===I.current&&W(!0),x&&x(e)},ref:H,ownerState:U,variant:C,sx:[].concat((0,o.Z)(Object.keys(E).includes(b)?[]:[{color:b}]),(0,o.Z)(Array.isArray(F)?F:[F]))},M))}))},4978:function(e,n,t){t.d(n,{Z:function(){return z}});var o=t(9439),r=t(3366),i=t(7462),a=t(2791),c=t(7563),u=t(9723),s=t(8956),l=t(8949),d=t(4419),f=t(6174),p=t(5671),v=t(3144),m=t(3433),b=t(7979),h=t(7137);function y(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Z(e){return parseInt((0,b.Z)(e).getComputedStyle(e).paddingRight,10)||0}function g(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}function x(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,m.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!g(e);n&&t&&y(e,r)}))}function E(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function k(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,u.Z)(e);return n.body===e?(0,b.Z)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=(0,h.Z)((0,u.Z)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(Z(o)+r,"px");var i=(0,u.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(Z(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=(0,u.Z)(o).body;else{var c=o.parentElement,s=(0,b.Z)(o);a="HTML"===(null==c?void 0:c.nodeName)&&"scroll"===s.getComputedStyle(c).overflowY?c:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var w=function(){function e(){(0,p.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,v.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&y(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);x(n,e.mount,e.modalRef,o,!0);var r=E(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=E(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=k(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=E(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&y(e.modalRef,n),x(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&y(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),R=t(184),T=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function P(e){var n=[],t=[];return Array.from(e.querySelectorAll(T)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function S(){return!0}var A=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,i=void 0!==r&&r,s=e.disableRestoreFocus,l=void 0!==s&&s,d=e.getTabbable,f=void 0===d?P:d,p=e.isEnabled,v=void 0===p?S:p,m=e.open,b=a.useRef(),h=a.useRef(null),y=a.useRef(null),Z=a.useRef(null),g=a.useRef(null),x=a.useRef(!1),E=a.useRef(null),k=(0,c.Z)(n.ref,E),w=a.useRef(null);a.useEffect((function(){m&&E.current&&(x.current=!o)}),[o,m]),a.useEffect((function(){if(m&&E.current){var e=(0,u.Z)(E.current);return E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),x.current&&E.current.focus()),function(){l||(Z.current&&Z.current.focus&&(b.current=!0,Z.current.focus()),Z.current=null)}}}),[m]),a.useEffect((function(){if(m&&E.current){var e=(0,u.Z)(E.current),n=function(n){var t=E.current;if(null!==t)if(e.hasFocus()&&!i&&v()&&!b.current){if(!t.contains(e.activeElement)){if(n&&g.current!==n.target||e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(!x.current)return;var o=[];if(e.activeElement!==h.current&&e.activeElement!==y.current||(o=f(E.current)),o.length>0){var r,a,c=Boolean((null==(r=w.current)?void 0:r.shiftKey)&&"Tab"===(null==(a=w.current)?void 0:a.key)),u=o[0],s=o[o.length-1];c?s.focus():u.focus()}else t.focus()}}else b.current=!1},t=function(n){w.current=n,!i&&v()&&"Tab"===n.key&&e.activeElement===E.current&&n.shiftKey&&(b.current=!0,y.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){"BODY"===e.activeElement.tagName&&n()}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,i,l,v,m,f]);var T=function(e){null===Z.current&&(Z.current=e.relatedTarget),x.current=!0};return(0,R.jsxs)(a.Fragment,{children:[(0,R.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:h,"data-testid":"sentinelStart"}),a.cloneElement(n,{ref:k,onFocus:function(e){null===Z.current&&(Z.current=e.relatedTarget),x.current=!0,g.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,R.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:y,"data-testid":"sentinelEnd"})]})},C=t(5878),F=t(1217);function M(e){return(0,F.Z)("MuiModal",e)}(0,C.Z)("MuiModal",["root","hidden"]);var O=t(7271),I=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"];var D=new w,j=a.forwardRef((function(e,n){var t,p=e.children,v=e.classes,m=e.closeAfterTransition,b=void 0!==m&&m,h=e.component,Z=void 0===h?"div":h,g=e.components,x=void 0===g?{}:g,E=e.componentsProps,k=void 0===E?{}:E,w=e.container,T=e.disableAutoFocus,P=void 0!==T&&T,S=e.disableEnforceFocus,C=void 0!==S&&S,F=e.disableEscapeKeyDown,j=void 0!==F&&F,L=e.disablePortal,N=void 0!==L&&L,B=e.disableRestoreFocus,K=void 0!==B&&B,W=e.disableScrollLock,H=void 0!==W&&W,U=e.hideBackdrop,V=void 0!==U&&U,z=e.keepMounted,q=void 0!==z&&z,Y=e.manager,G=void 0===Y?D:Y,_=e.onBackdropClick,X=e.onClose,J=e.onKeyDown,Q=e.open,$=e.onTransitionEnter,ee=e.onTransitionExited,ne=(0,r.Z)(e,I),te=a.useState(!0),oe=(0,o.Z)(te,2),re=oe[0],ie=oe[1],ae=a.useRef({}),ce=a.useRef(null),ue=a.useRef(null),se=(0,c.Z)(ue,n),le=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),de=null==(t=e["aria-hidden"])||t,fe=function(){return ae.current.modalRef=ue.current,ae.current.mountNode=ce.current,ae.current},pe=function(){G.mount(fe(),{disableScrollLock:H}),ue.current.scrollTop=0},ve=(0,s.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(w)||(0,u.Z)(ce.current).body;G.add(fe(),e),ue.current&&pe()})),me=a.useCallback((function(){return G.isTopModal(fe())}),[G]),be=(0,s.Z)((function(e){ce.current=e,e&&(Q&&me()?pe():y(ue.current,de))})),he=a.useCallback((function(){G.remove(fe(),de)}),[G,de]);a.useEffect((function(){return function(){he()}}),[he]),a.useEffect((function(){Q?ve():le&&b||he()}),[Q,he,le,b,ve]);var ye=(0,i.Z)({},e,{classes:v,closeAfterTransition:b,disableAutoFocus:P,disableEnforceFocus:C,disableEscapeKeyDown:j,disablePortal:N,disableRestoreFocus:K,disableScrollLock:H,exited:re,hideBackdrop:V,keepMounted:q}),Ze=function(e){var n=e.open,t=e.exited,o=e.classes,r={root:["root",!n&&t&&"hidden"]};return(0,d.Z)(r,M,o)}(ye),ge={};void 0===p.props.tabIndex&&(ge.tabIndex="-1"),le&&(ge.onEnter=(0,l.Z)((function(){ie(!1),$&&$()}),p.props.onEnter),ge.onExited=(0,l.Z)((function(){ie(!0),ee&&ee(),b&&he()}),p.props.onExited));var xe=x.Root||Z,Ee=(0,O.Z)({elementType:xe,externalSlotProps:k.root,externalForwardedProps:ne,additionalProps:{ref:se,role:"presentation",onKeyDown:function(e){J&&J(e),"Escape"===e.key&&me()&&(j||(e.stopPropagation(),X&&X(e,"escapeKeyDown")))}},className:Ze.root,ownerState:ye}),ke=x.Backdrop,we=(0,O.Z)({elementType:ke,externalSlotProps:k.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(_&&_(e),X&&X(e,"backdropClick"))},open:Q},ownerState:ye});return q||Q||le&&!re?(0,R.jsx)(f.Z,{ref:be,container:w,disablePortal:N,children:(0,R.jsxs)(xe,(0,i.Z)({},Ee,{children:[!V&&ke?(0,R.jsx)(ke,(0,i.Z)({},we)):null,(0,R.jsx)(A,{disableEnforceFocus:C,disableAutoFocus:P,disableRestoreFocus:K,isEnabled:me,open:Q,children:a.cloneElement(p,ge)})]}))}):null})),L=t(1503),N=t(627),B=t(277),K=t(5513),W=t(5112),H=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],U=(0,B.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),V=(0,B.ZP)(W.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),z=a.forwardRef((function(e,n){var t,c,u=(0,K.Z)({name:"MuiModal",props:e}),s=u.BackdropComponent,l=void 0===s?V:s,d=u.BackdropProps,f=u.closeAfterTransition,p=void 0!==f&&f,v=u.children,m=u.component,b=u.components,h=void 0===b?{}:b,y=u.componentsProps,Z=void 0===y?{}:y,g=u.disableAutoFocus,x=void 0!==g&&g,E=u.disableEnforceFocus,k=void 0!==E&&E,w=u.disableEscapeKeyDown,T=void 0!==w&&w,P=u.disablePortal,S=void 0!==P&&P,A=u.disableRestoreFocus,C=void 0!==A&&A,F=u.disableScrollLock,M=void 0!==F&&F,O=u.hideBackdrop,I=void 0!==O&&O,D=u.keepMounted,B=void 0!==D&&D,W=u.theme,z=(0,r.Z)(u,H),q=a.useState(!0),Y=(0,o.Z)(q,2),G=Y[0],_=Y[1],X={closeAfterTransition:p,disableAutoFocus:x,disableEnforceFocus:k,disableEscapeKeyDown:T,disablePortal:S,disableRestoreFocus:C,disableScrollLock:M,hideBackdrop:I,keepMounted:B},J=(0,i.Z)({},u,X,{exited:G}),Q=function(e){return e.classes}(J),$=null!=(t=null!=(c=h.Root)?c:m)?t:U;return(0,R.jsx)(j,(0,i.Z)({components:(0,i.Z)({Root:$,Backdrop:l},h),componentsProps:{root:function(){return(0,i.Z)({},(0,L.Z)(Z.root,J),!(0,N.Z)($)&&{as:m,theme:W})},backdrop:function(){return(0,i.Z)({},d,(0,L.Z)(Z.backdrop,J))}},onTransitionEnter:function(){return _(!1)},onTransitionExited:function(){return _(!0)},ref:n},z,{classes:Q},X,{children:v}))}))},7137:function(e,n,t){function o(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}t.d(n,{Z:function(){return o}})},5671:function(e,n,t){function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return o}})},3144:function(e,n,t){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=298.a926a307.chunk.js.map