"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[103],{2390:function(n,e,t){t.d(e,{Z:function(){return r}});var i=[{name:"Codelance Devs",url:"https://www.linkedin.com/company/codelance-devs/",logo:t.p+"static/media/codelance-devs-logo.a32a2d994b4767ba4998.png"}],r={WEBSITE_URL:"".concat(window.location.protocol,"//").concat(window.location.host),GITHUB_URL:"https://github.com/kunalkeshan/Shiryoku",GITHUB_CONTRIBUTIONS_URL:"https://api.github.com/repos/kunalkeshan/Shiryoku/contributors",GITHUB_ISSUES_URL:"https://api.github.com/repos/kunalkeshan/Shiryoku/issues?state=open",APP_PARTNERS:i,CONTACT:{email:"kunalkeshan12@gmail.com",instagram:"https://www.instagram.com/kunalkeshan/",linkedIn:"https://www.linkedin.com/in/kunalkeshan/",twitter:"https://twitter.com/_kunalkeshan_",github:"https://github.com/kunalkeshan",youtube:"https://www.youtube.com/channel/UCwVRztzBdqgB_Y9hkMX3lZA"},FORMSPREEE_CONTACT_FORM_ID:"xbjbdlvj"}},2376:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var i=t(4942),r=t(1413),a=t(9439),o=t(2791),s=t(6871),c=t(4142),u=t(277),l=t(6015),d=t(3793),p=t(4666),h=t(3811),x=t(4565),f=t(6283),Z=t(5152),m=t(8916),j=t(5629),v=t(4544),g=t(2892),k=t(8008),w=t(1009),b=t(8996),y=t(1535),C=t(675),S=t(3321),P=t(2752),R=t(4054),N=t(5758),_=t(5584),I=t(4642),T=t(6132),A=t(1048),E=t(9978),U=t(9520),M=t(184),z=(0,u.ZP)(E.Z)({minHeight:48,px:2.5}),H=(0,u.ZP)(U.Z)({minWidth:0,justifyContent:"center"}),O=function(n){var e=(0,s.s0)(),t=null!==n&&void 0!==n&&n.nav&&(null===n||void 0===n?void 0:n.nav)===n.currentPage?{justifyContent:n.open?"initial":"center",backgroundColor:"#90caf9"}:{justifyContent:n.open?"initial":"center"},i=(null!==n&&void 0!==n&&n.nav&&(null===n||void 0===n||n.nav,n.currentPage),{mr:n.open?3:"auto"});return(0,M.jsx)(T.ZP,{disablePadding:!0,sx:{display:"block"},title:n.name,children:(0,M.jsxs)(z,{sx:t,onClick:function(){return function(n){var t=n.link,i=n.nav;t?window.open(t,"_blank"):e(i||"")}({link:null===n||void 0===n?void 0:n.link,nav:null===n||void 0===n?void 0:n.nav})},children:[(0,M.jsx)(H,{sx:i,children:n.icon}),(0,M.jsx)(A.Z,{primary:n.name,sx:{opacity:n.open?1:0}})]})},n.name)},B=(0,u.ZP)(l.Z)({marginTop:"auto",padding:".5em",textAlign:"center"}),L=(0,u.ZP)(l.Z)({display:"flex",alignItems:"center",justifyContent:"center",gap:"1em",flexWrap:"wrap",margin:"0.5em"}),D=(0,u.ZP)(l.Z)({display:"flex",alignItems:"center",justifyContent:"center"}),F=function(){var n=(0,s.s0)();return(0,M.jsxs)(B,{component:"footer",children:[(0,M.jsxs)(x.Z,{variant:"body2",children:["All Rights Reserved."," ",(0,M.jsx)(f.Z,{component:"a",href:"https://github.com/kunalkeshan/Shiryoku/blob/main/LICENSE",target:"_blank",sx:{cursor:"pointer"},children:"Shiryoku (Resources)"})," ","\xa9 ",(new Date).getFullYear()," . Made with \ud83e\udde1 by"," ",(0,M.jsx)(f.Z,{component:"a",href:"https://twitter.com/_kunalkeshan_",target:"_blank",sx:{cursor:"pointer"},children:"Kunal Keshan"}),"."]}),(0,M.jsx)(L,{children:[{name:"Home",nav:"/"},{name:"About",nav:"/about"},{name:"Contribute",nav:"/contribute"},{name:"Issues",nav:"/issues"},{name:"Contact",nav:"/contact"},{name:"Support",nav:"/support"},{name:"Repo",link:"https://github.com/kunalkeshan/Shiryoku"}].map((function(e,t){return(0,M.jsx)(f.Z,{component:"a",onClick:function(){return function(e){e.link?window.open(e.link,"_blank"):n(e.nav||"")}(e)},sx:{cursor:"pointer",fontSize:"0.8rem"},children:e.name},t)}))}),(0,M.jsxs)(l.Z,{m:2,children:[(0,M.jsx)(x.Z,{variant:"caption",lineHeight:0}),(0,M.jsx)(D,{})]})]})},G=t(4165),K=t(5861),W=t(294),X=t(8128),V=t(5506),Y=t(464),q=t(8440),J=t(9571),Q=t(788),$=t(7323),nn=t(7205),en=t(2513),tn=t(844),rn=t.n(tn),an=(0,u.ZP)(J.Z)({padding:".25em .5em",borderRadius:"8px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",marginTop:"1em"}),on=(0,u.ZP)(f.Z)({textTransform:"unset",cursor:"pointer"}),sn=function(n){var e=n.id,t=n.title,i=n.message,r=n.dateAdded,a=n.link,s=n.linkText,c=n.setNotifications,u=n.read,l=i;a&&s&&(l=rn()(l,"{link}",(function(){return(0,M.jsx)(f.Z,{href:a,target:"_blank",component:"a",children:s})})));var d=(0,o.useMemo)((function(){return{backgroundColor:"#80808040"}}),[]),p=function(){var n=(0,K.Z)((0,G.Z)().mark((function n(){return(0,G.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.Z.Notifications.updateReadNotifications(e);case 2:c((function(n){return n.map((function(n){return n.id===e&&(n.read=!0),n}))}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,M.jsxs)(an,{sx:u?d:{},children:[(0,M.jsx)(x.Z,{variant:"h6",children:t}),(0,M.jsx)(x.Z,{variant:"subtitle2",children:l}),(0,M.jsxs)(x.Z,{variant:"subtitle2",fontSize:".6rem",textAlign:"right",children:["Last Updated: ",(0,M.jsx)("b",{children:r})]}),u?null:(0,M.jsx)(on,{variant:"button",onClick:p,children:"Mark as read"})]})},cn=(0,u.ZP)(Q.Z)({width:"min(fit-content, 600px)",maxHeight:"600px",overflow:"auto"}),un=(0,u.ZP)($.Z)({display:"flex",alignItems:"center",justifyContent:"space-between"}),ln=(0,u.ZP)(nn.Z)({color:"red",fontSize:".75em"}),dn=(0,u.ZP)(nn.Z)({color:"green",fontSize:".75em"}),pn=function(n){var e=n.open,t=n.setOpen,i=n.notifications,a=n.setNotifications,s=(0,o.useMemo)((function(){return!!i.length&&i.every((function(n){return n.read}))}),[i]),c=function(){t(!1)};return(0,M.jsxs)(cn,{open:e,onClose:c,"aria-describedby":"alert-dialog-slide-description",children:[(0,M.jsxs)(Y.Z,{children:[(0,M.jsx)(en.Z,{})," Notifications"]}),(0,M.jsx)(q.Z,{children:i.length>0?i.map((function(n,e){return(0,M.jsx)(sn,(0,r.Z)((0,r.Z)({},n),{},{setNotifications:a}),e)})):(0,M.jsx)(J.Z,{children:"No Notifications"})}),(0,M.jsxs)(un,{children:[(0,M.jsx)(dn,(0,r.Z)((0,r.Z)({variant:"text",onClick:function(){i.length&&i.forEach(function(){var n=(0,K.Z)((0,G.Z)().mark((function n(e){return(0,G.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.Z.Notifications.updateReadNotifications(e.id);case 2:a((function(n){var e=n.map((function(n){return n.read||(n.read=!0),n}));return e}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},s?{disabled:!0}:null),{},{children:"Mark All As Read"})),(0,M.jsx)(ln,{variant:"text",onClick:c,children:"Close"})]})]})},hn=(0,u.ZP)(l.Z)({}),xn=(0,u.ZP)(l.Z)({cursor:"pointer",padding:".25em",borderRadius:"50%",transition:"all 200ms","&:hover":{backgroundColor:"#80808040"}}),fn=function(){var n=(0,o.useState)(!1),e=(0,a.Z)(n,2),t=e[0],i=e[1],r=(0,o.useState)([]),s=(0,a.Z)(r,2),c=s[0],u=s[1],l=(0,o.useMemo)((function(){if(c.length)return c.filter((function(n){return!n.read})).length}),[c]);(0,o.useEffect)((function(){var n=function(){var n=(0,K.Z)((0,G.Z)().mark((function n(){var e;return(0,G.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.Z.Notifications.getAllNotification();case 2:e=n.sent,u(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();0===c.length&&n()}),[c]);return(0,M.jsxs)(hn,{children:[(0,M.jsx)(xn,{onClick:function(){i(!0)},children:(0,M.jsx)(Z.Z,{title:"View Notifications",children:(0,M.jsx)(W.Z,{badgeContent:null!==l&&void 0!==l?l:0,color:"primary",children:(0,M.jsx)(X.Z,{})})})}),(0,M.jsx)(pn,{open:t,setOpen:i,notifications:c,setNotifications:u})]})},Zn=t(2390),mn=240,jn=function(n){return{width:mn,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen}),overflowX:"hidden"}},vn=function(n){return(0,i.Z)({transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(n.spacing(7)," + 1px)")},n.breakpoints.up("sm"),{width:"calc(".concat(n.spacing(8)," + 1px)")})},gn=(0,u.ZP)("div")((function(n){var e=n.theme;return(0,r.Z)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)})),kn=(0,u.ZP)(g.Z,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,t=n.open;return(0,r.Z)({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},t&&{marginLeft:mn,width:"calc(100% - ".concat(mn,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})})),wn=(0,u.ZP)(v.ZP,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,t=n.open;return(0,r.Z)((0,r.Z)({width:mn,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},t&&(0,r.Z)((0,r.Z)({},jn(e)),{},{"& .MuiDrawer-paper":jn(e)})),!t&&(0,r.Z)((0,r.Z)({},vn(e)),{},{"& .MuiDrawer-paper":vn(e)}))})),bn=function(){var n=(0,s.TH)(),e=(0,c.Z)(),t=(0,o.useState)(!1),i=(0,a.Z)(t,2),u=i[0],v=i[1],g=(0,o.useState)(""),T=(0,a.Z)(g,2),A=T[0],E=T[1],U=[{name:"Resources",nav:"/",icon:(0,M.jsx)(y.Z,{})},{name:"Roadmaps",nav:"/roadmaps",icon:(0,M.jsx)(I.Z,{})},{name:"Contribute",nav:"/contribute",icon:(0,M.jsx)(C.Z,{})},{name:"Issues",nav:"/issues",icon:(0,M.jsx)(S.Z,{})},{name:"Contact",nav:"/contact",icon:(0,M.jsx)(P.Z,{})},{name:"Support",nav:"/support",icon:(0,M.jsx)(R.Z,{})},{name:"About",nav:"/about",icon:(0,M.jsx)(_.Z,{})}],z=[{name:"Repo",link:Zn.Z.GITHUB_URL,icon:(0,M.jsx)(N.Z,{})}];return(0,o.useEffect)((function(){var e=n.pathname;E(e)}),[n]),(0,M.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,M.jsx)(d.ZP,{}),(0,M.jsx)(kn,{position:"fixed",open:u,children:(0,M.jsxs)(p.Z,{children:[(0,M.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){v(!0)},edge:"start",sx:(0,r.Z)({marginRight:1},u&&{display:"none"}),children:(0,M.jsx)(k.Z,{})}),(0,M.jsxs)(l.Z,{sx:{display:"flex",alignItems:"centre",justifyContent:"space-between",width:"100%",overflow:"auto"},children:[(0,M.jsxs)(x.Z,{variant:"h5",noWrap:!0,component:"div",children:["Shiryoku (Resources)"," ",(0,M.jsxs)(x.Z,{variant:"caption",component:"span",children:["by"," ",(0,M.jsx)(f.Z,{href:Zn.Z.CONTACT.twitter,color:"#fff",children:"Kunal Keshan"})]})]}),(0,M.jsx)(fn,{})]})]})}),(0,M.jsxs)(wn,{variant:"permanent",open:u,children:[(0,M.jsxs)(gn,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(x.Z,{variant:"h4",textAlign:"center",width:"100%",sx:{userSelect:"none"},children:(0,M.jsx)(Z.Z,{title:"Shiryoku (Japanese for Resources)",placement:"bottom",followCursor:!0,children:(0,M.jsx)("div",{children:"\u8cc7"})})}),(0,M.jsx)(h.Z,{onClick:function(){v(!1)},children:"rtl"===e.direction?(0,M.jsx)(b.Z,{}):(0,M.jsx)(w.Z,{})})]}),(0,M.jsx)(m.Z,{}),(0,M.jsx)(j.Z,{children:U.map((function(n,e){return(0,o.createElement)(O,(0,r.Z)((0,r.Z)({},n),{},{key:e,open:u,currentPage:A}))}))}),(0,M.jsx)(m.Z,{}),(0,M.jsx)(j.Z,{children:z.map((function(n,e){return(0,o.createElement)(O,(0,r.Z)((0,r.Z)({},n),{},{key:e,open:u,currentPage:A}))}))})]}),(0,M.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3},children:[(0,M.jsx)(gn,{}),(0,M.jsx)(s.j3,{}),(0,M.jsx)(F,{})]})]})}}}]);
//# sourceMappingURL=103.7a963b99.chunk.js.map