"use strict";(self.webpackChunkhallo=self.webpackChunkhallo||[]).push([[746],{6594:function(e,t,r){var n=r(4942),c=r(885),a=r(5987),o=r(5900),i=r.n(o),s=r(7294),l=r(1118),p=r(9541),f=r(5893),b=["as","bsPrefix","variant","size","active","className"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=s.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,o=e.variant,s=e.size,u=e.active,m=e.className,d=(0,a.Z)(e,b),y=(0,p.vE)(n,"btn"),j=(0,l.FT)(O({tagName:r},d)),v=(0,c.Z)(j,2),P=v[0],g=v[1].tagName;return(0,f.jsx)(g,O(O(O({},P),d),{},{ref:t,className:i()(m,y,u&&"active",o&&"".concat(y,"-").concat(o),s&&"".concat(y,"-").concat(s),d.href&&d.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=m},5071:function(e,t,r){r.d(t,{Z:function(){return ke}});var n=r(7294),c=r(3639),a=r(994),o=r(7408),i=r(6594),s=r(4942),l=r(5987),p=r(5900),f=r.n(p),b=n.createContext({}),u=r(5893),O=["controlId","as"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=n.forwardRef((function(e,t){var r=e.controlId,c=e.as,a=void 0===c?"div":c,o=(0,l.Z)(e,O),i=(0,n.useMemo)((function(){return{controlId:r}}),[r]);return(0,u.jsx)(b.Provider,{value:i,children:(0,u.jsx)(a,d(d({},o),{},{ref:t}))})}));y.displayName="FormGroup";var j=y,v=r(9541),P=["bsPrefix","className","children","controlId","label"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.children,a=e.controlId,o=e.label,i=(0,l.Z)(e,P);return r=(0,v.vE)(r,"form-floating"),(0,u.jsxs)(j,h(h({ref:t,className:f()(n,r),controlId:a},i),{},{children:[c,(0,u.jsx)("label",{htmlFor:a,children:o})]}))}));w.displayName="FloatingLabel";var N=w,x=r(5697),E=r.n(x),D=["as","className","type","tooltip"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={type:E().string,tooltip:E().bool,as:E().elementType},C=n.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,c=e.className,a=e.type,o=void 0===a?"valid":a,i=e.tooltip,s=void 0!==i&&i,p=(0,l.Z)(e,D);return(0,u.jsx)(n,S(S({},p),{},{ref:t,className:f()(c,"".concat(o,"-").concat(s?"tooltip":"feedback"))}))}));C.displayName="Feedback",C.propTypes=k;var I=C,F=["id","bsPrefix","className","type","isValid","isInvalid","as"];function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=n.forwardRef((function(e,t){var r=e.id,c=e.bsPrefix,a=e.className,o=e.type,i=void 0===o?"checkbox":o,s=e.isValid,p=void 0!==s&&s,O=e.isInvalid,m=void 0!==O&&O,d=e.as,y=void 0===d?"input":d,j=(0,l.Z)(e,F),P=(0,n.useContext)(b).controlId;return c=(0,v.vE)(c,"form-check-input"),(0,u.jsx)(y,z(z({},j),{},{ref:t,type:i,id:r||P,className:f()(a,c,p&&"is-valid",m&&"is-invalid")}))}));T.displayName="FormCheckInput";var V=T,L=["bsPrefix","className","htmlFor"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=n.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,a=e.htmlFor,o=(0,l.Z)(e,L),i=(0,n.useContext)(b).controlId;return r=(0,v.vE)(r,"form-check-label"),(0,u.jsx)("label",q(q({},o),{},{ref:t,htmlFor:a||i,className:f()(c,r)}))}));A.displayName="FormCheckLabel";var H=A;var G=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=n.forwardRef((function(e,t){var r=e.id,c=e.bsPrefix,a=e.bsSwitchPrefix,o=e.inline,i=void 0!==o&&o,s=e.disabled,p=void 0!==s&&s,O=e.isValid,m=void 0!==O&&O,d=e.isInvalid,y=void 0!==d&&d,j=e.feedbackTooltip,P=void 0!==j&&j,g=e.feedback,h=e.feedbackType,w=e.className,N=e.style,x=e.title,E=void 0===x?"":x,D=e.type,Z=void 0===D?"checkbox":D,S=e.label,k=e.children,C=e.as,F=void 0===C?"input":C,R=(0,l.Z)(e,G);c=(0,v.vE)(c,"form-check"),a=(0,v.vE)(a,"form-switch");var z=(0,n.useContext)(b).controlId,T=(0,n.useMemo)((function(){return{controlId:r||z}}),[z,r]),L=!k&&null!=S&&!1!==S||function(e,t){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===t}))}(k,H),M=(0,u.jsx)(V,_(_({},R),{},{type:"switch"===Z?"checkbox":Z,ref:t,isValid:m,isInvalid:y,disabled:p,as:F}));return(0,u.jsx)(b.Provider,{value:T,children:(0,u.jsx)("div",{style:N,className:f()(w,L&&c,i&&"".concat(c,"-inline"),"switch"===Z&&a),children:k||(0,u.jsxs)(u.Fragment,{children:[M,L&&(0,u.jsx)(H,{title:E,children:S}),g&&(0,u.jsx)(I,{type:h,tooltip:P,children:g})]})})})}));J.displayName="FormCheck";var K=Object.assign(J,{Input:V,Label:H}),Q=(r(2473),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=n.forwardRef((function(e,t){var r,c,a=e.bsPrefix,o=e.type,i=e.size,p=e.htmlSize,O=e.id,m=e.className,d=e.isValid,y=void 0!==d&&d,j=e.isInvalid,P=void 0!==j&&j,g=e.plaintext,h=e.readOnly,w=e.as,N=void 0===w?"input":w,x=(0,l.Z)(e,Q),E=(0,n.useContext)(b).controlId;(a=(0,v.vE)(a,"form-control"),g)?r=(0,s.Z)({},"".concat(a,"-plaintext"),!0):(c={},(0,s.Z)(c,a,!0),(0,s.Z)(c,"".concat(a,"-").concat(i),i),r=c);return(0,u.jsx)(N,W(W({},x),{},{type:o,size:p,ref:t,readOnly:h,id:O||E,className:f()(m,r,y&&"is-valid",P&&"is-invalid","color"===o&&"".concat(a,"-color"))}))}));X.displayName="FormControl";var Y=Object.assign(X,{Feedback:I}),$=(0,r(8870).Z)("form-floating"),ee=["as","bsPrefix","column","visuallyHidden","className","htmlFor"];function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=n.forwardRef((function(e,t){var r=e.as,c=void 0===r?"label":r,a=e.bsPrefix,i=e.column,s=e.visuallyHidden,p=e.className,O=e.htmlFor,m=(0,l.Z)(e,ee),d=(0,n.useContext)(b).controlId;a=(0,v.vE)(a,"form-label");var y="col-form-label";"string"==typeof i&&(y="".concat(y," ").concat(y,"-").concat(i));var j=f()(p,a,s&&"visually-hidden",i&&y);return O=O||d,i?(0,u.jsx)(o.Z,re({ref:t,as:"label",className:j,htmlFor:O},m)):(0,u.jsx)(c,re({ref:t,className:j,htmlFor:O},m))}));ne.displayName="FormLabel",ne.defaultProps={column:!1,visuallyHidden:!1};var ce=ne,ae=["bsPrefix","className","id"];function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=n.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,a=e.id,o=(0,l.Z)(e,ae),i=(0,n.useContext)(b).controlId;return r=(0,v.vE)(r,"form-range"),(0,u.jsx)("input",ie(ie({},o),{},{type:"range",ref:t,className:f()(c,r),id:a||i}))}));se.displayName="FormRange";var le=se,pe=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"];function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=n.forwardRef((function(e,t){var r=e.bsPrefix,c=e.size,a=e.htmlSize,o=e.className,i=e.isValid,s=void 0!==i&&i,p=e.isInvalid,O=void 0!==p&&p,m=e.id,d=(0,l.Z)(e,pe),y=(0,n.useContext)(b).controlId;return r=(0,v.vE)(r,"form-select"),(0,u.jsx)("select",be(be({},d),{},{size:a,ref:t,className:f()(o,r,c&&"".concat(r,"-").concat(c),s&&"is-valid",O&&"is-invalid"),id:m||y}))}));ue.displayName="FormSelect";var Oe=ue,me=["bsPrefix","className","as","muted"];function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,a=void 0===c?"small":c,o=e.muted,i=(0,l.Z)(e,me);return r=(0,v.vE)(r,"form-text"),(0,u.jsx)(a,ye(ye({},i),{},{ref:t,className:f()(n,r,o&&"text-muted")}))}));je.displayName="FormText";var ve=je;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=n.forwardRef((function(e,t){return(0,u.jsx)(K,ge(ge({},e),{},{ref:t,type:"switch"}))}));he.displayName="Switch";var we=Object.assign(he,{Input:K.Input,Label:K.Label}),Ne=["className","validated","as"];function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De={_ref:E().any,validated:E().bool,as:E().elementType},Ze=n.forwardRef((function(e,t){var r=e.className,n=e.validated,c=e.as,a=void 0===c?"form":c,o=(0,l.Z)(e,Ne);return(0,u.jsx)(a,Ee(Ee({},o),{},{ref:t,className:f()(r,n&&"was-validated")}))}));Ze.displayName="Form",Ze.propTypes=De;var Se=Object.assign(Ze,{Group:j,Control:Y,Floating:$,Check:K,Switch:we,Label:ce,Text:ve,Range:le,Select:Oe,FloatingLabel:N}),ke=function(){return n.createElement("div",{className:"info-form mx-auto"},n.createElement(c.Z,{className:"px-2"},n.createElement(a.Z,null,n.createElement(o.Z,{md:12,className:"mt-4 pt-2 mt-md-0"},n.createElement("h2",{className:"info-title"},"NECESITAS MÁS ",n.createElement("span",{className:"orange-text"},"INFORMACIÓN")))),n.createElement(a.Z,{className:"mt-2"},n.createElement(o.Z,{xs:4,md:6,className:"pe-0"},n.createElement("h4",{className:"write-us-title"},"Escríbenos")),n.createElement(o.Z,{xs:8,md:6,className:"ps-0"},n.createElement("h4",{className:"call-us-title"},n.createElement("span",{className:"orange-text"},"Llámanos Celular:")," 098 252 2222"))),n.createElement(a.Z,{className:"mt-2"},n.createElement(o.Z,{md:12},n.createElement(N,{label:"Nombre",className:"mb-2"},n.createElement(Se.Control,{type:"text",placeholder:"Nombre",required:!0})),n.createElement(N,{label:"Email",className:"mb-2"},n.createElement(Se.Control,{type:"email",placeholder:"Email",required:!0})),n.createElement(N,{label:"Celular",className:"mb-2"},n.createElement(Se.Control,{type:"text",placeholder:"Celular",required:!0})),n.createElement(N,{label:"Cédula",className:"mb-2"},n.createElement(Se.Control,{type:"text",placeholder:"Cédula",required:!0})),n.createElement(N,{label:"Agencia",className:"mb-2"},n.createElement(Se.Control,{type:"text",placeholder:"Agencia",required:!0})),n.createElement(N,{label:"Mensaje",className:"mb-2"},n.createElement(Se.Control,{as:"textarea",placeholder:"Mensaje",style:{height:"80px"}})))),n.createElement(a.Z,null,n.createElement(o.Z,{md:12,className:"text-center mb-4 mb-md-0"},n.createElement(i.Z,{variant:"light",className:"send-btn px-4"},"Enviar")))))}},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=37fe0a4a2e75ea4045f065a28498b98970c884dd-cbf9cb71b4ede232e81f.js.map