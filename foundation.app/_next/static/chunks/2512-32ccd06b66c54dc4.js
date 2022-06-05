"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2512],{58363:function(a,b){b.Z=function(a,b){if(a&&b){var c=Array.isArray(b)?b:b.split(","),d=a.name||"",e=(a.type||"").toLowerCase(),f=e.replace(/\/.*$/,"");return c.some(function(a){var b=a.trim().toLowerCase();return"."===b.charAt(0)?d.toLowerCase().endsWith(b):b.endsWith("/*")?f===b.replace(/\/.*$/,""):e===b})}return!0}},32512:function(a,b,c){c.d(b,{uI:function(){return ga}});var d=c(67294),e=c(45697),f=c.n(e),g=c(70655),h=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function i(a,b){var c=j(a);if("string"!=typeof c.path){var d=a.webkitRelativePath;Object.defineProperty(c,"path",{value:"string"==typeof b?b:"string"==typeof d&&d.length>0?d:a.name,writable:!1,configurable:!1,enumerable:!0})}return c}function j(a){var b=a.name;if(b&& -1!==b.lastIndexOf(".")&&!a.type){var c=b.split(".").pop().toLowerCase(),d=h.get(c);d&&Object.defineProperty(a,"type",{value:d,writable:!1,configurable:!1,enumerable:!0})}return a}var k=[".DS_Store","Thumbs.db"];function l(a){return"object"==typeof a&&null!==a}function m(a){return a.filter(function(a){return -1===k.indexOf(a.name)})}function n(a){if(null===a)return[];for(var b=[],c=0;c<a.length;c++){var d=a[c];b.push(d)}return b}function o(a){if("function"!=typeof a.webkitGetAsEntry)return q(a);var b=a.webkitGetAsEntry();return b&&b.isDirectory?s(b):q(a)}function p(a){return a.reduce(function(a,b){return(0,g.fl)(a,Array.isArray(b)?p(b):[b])},[])}function q(a){var b=a.getAsFile();if(!b)return Promise.reject(a+" is not a File");var c=i(b);return Promise.resolve(c)}function r(a){return(0,g.mG)(this,void 0,void 0,function(){return(0,g.Jh)(this,function(b){return[2,a.isDirectory?s(a):t(a)]})})}function s(a){var b=a.createReader();return new Promise(function(a,c){var d=[];function e(){var f=this;b.readEntries(function(b){return(0,g.mG)(f,void 0,void 0,function(){var f,h,i;return(0,g.Jh)(this,function(g){switch(g.label){case 0:if(b.length)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,Promise.all(d)];case 2:return a(f=g.sent()),[3,4];case 3:return c(h=g.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(b.map(r)),d.push(i),e(),g.label=6;case 6:return[2]}})})},function(a){c(a)})}e()})}function t(a){return(0,g.mG)(this,void 0,void 0,function(){return(0,g.Jh)(this,function(b){return[2,new Promise(function(b,c){a.file(function(c){b(i(c,a.fullPath))},function(a){c(a)})})]})})}var u=c(58363);function v(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function w(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?v(Object(c),!0).forEach(function(b){x(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):v(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function x(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function y(a,b){return D(a)||C(a,b)||A(a,b)||z()}function z(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(a,b){if(a){if("string"==typeof a)return B(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return B(a,b)}}function B(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function C(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}function D(a){if(Array.isArray(a))return a}var E=function(a){a=Array.isArray(a)&&1===a.length?a[0]:a;var b=Array.isArray(a)?"one of ".concat(a.join(", ")):a;return{code:"file-invalid-type",message:"File type must be ".concat(b)}},F=function(a){return{code:"file-too-large",message:"File is larger than ".concat(a," ").concat(1===a?"byte":"bytes")}},G=function(a){return{code:"file-too-small",message:"File is smaller than ".concat(a," ").concat(1===a?"byte":"bytes")}},H={code:"too-many-files",message:"Too many files"};function I(a,b){var c="application/x-moz-file"===a.type||(0,u.Z)(a,b);return[c,c?null:E(b)]}function J(a,b,c){if(K(a.size)){if(K(b)&&K(c)){if(a.size>c)return[!1,F(c)];if(a.size<b)return[!1,G(b)]}else if(K(b)&&a.size<b)return[!1,G(b)];else if(K(c)&&a.size>c)return[!1,F(c)]}return[!0,null]}function K(a){return null!=a}function L(a){return"function"==typeof a.isPropagationStopped?a.isPropagationStopped():void 0!==a.cancelBubble&&a.cancelBubble}function M(a){return a.dataTransfer?Array.prototype.some.call(a.dataTransfer.types,function(a){return"Files"===a||"application/x-moz-file"===a}):!!a.target&&!!a.target.files}function N(a){a.preventDefault()}function O(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return b.some(function(b){return!L(a)&&b&&b.apply(void 0,[a].concat(d)),L(a)})}}function P(){return"showOpenFilePicker"in window}var Q=["children"],R=["open"],S=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],T=["refKey","onChange","onClick"];function U(a,b){return Z(a)||Y(a,b)||W(a,b)||V()}function V(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function W(a,b){if(a){if("string"==typeof a)return X(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return X(a,b)}}function X(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function Y(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}function Z(a){if(Array.isArray(a))return a}function $(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?$(Object(c),!0).forEach(function(b){aa(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):$(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function aa(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function ba(a,b){if(null==a)return{};var c,d,e=ca(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function ca(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var da=(0,d.forwardRef)(function(a,b){var c=a.children,e=ba(a,Q),f=ga(e),g=f.open,h=ba(f,R);return(0,d.useImperativeHandle)(b,function(){return{open:g}},[g]),d.createElement(d.Fragment,null,c(_(_({},h),{},{open:g})))});da.displayName="Dropzone";var ea={disabled:!1,getFilesFromEvent:function(a){return(0,g.mG)(this,void 0,void 0,function(){return(0,g.Jh)(this,function(b){var c,d,e,f;return l(a)&&l(a.dataTransfer)?[2,(c=a.dataTransfer,d=a.type,(0,g.mG)(this,void 0,void 0,function(){var a,b;return(0,g.Jh)(this,function(e){switch(e.label){case 0:if(null===c)return[2,[]];if(!c.items)return[3,2];if(a=n(c.items).filter(function(a){return"file"===a.kind}),"drop"!==d)return[2,a];return[4,Promise.all(a.map(o))];case 1:return[2,m(p(b=e.sent()))];case 2:return[2,m(n(c.files).map(function(a){return i(a)}))]}})}))]:l(e=a)&&l(e.target)?[2,n(a.target.files).map(function(a){return i(a)})]:Array.isArray(a)&&a.every(function(a){return"getFile"in a&&"function"==typeof a.getFile})?[2,(f=a,(0,g.mG)(this,void 0,void 0,function(){var a;return(0,g.Jh)(this,function(b){switch(b.label){case 0:return[4,Promise.all(f.map(function(a){return a.getFile()}))];case 1:return[2,(a=b.sent()).map(function(a){return i(a)})]}})}))]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};da.defaultProps=ea,da.propTypes={children:f().func,accept:f().oneOfType([f().string,f().arrayOf(f().string)]),multiple:f().bool,preventDropOnDocument:f().bool,noClick:f().bool,noKeyboard:f().bool,noDrag:f().bool,noDragEventsBubbling:f().bool,minSize:f().number,maxSize:f().number,maxFiles:f().number,disabled:f().bool,getFilesFromEvent:f().func,onFileDialogCancel:f().func,onFileDialogOpen:f().func,useFsAccessApi:f().bool,onDragEnter:f().func,onDragLeave:f().func,onDragOver:f().func,onDrop:f().func,onDropAccepted:f().func,onDropRejected:f().func,validator:f().func};var fa={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ga(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=_(_({},ea),a),c=b.accept,e=b.disabled,f=b.getFilesFromEvent,g=b.maxSize,h=b.minSize,i=b.multiple,j=b.maxFiles,k=b.onDragEnter,l=b.onDragLeave,m=b.onDragOver,n=b.onDrop,o=b.onDropAccepted,p=b.onDropRejected,q=b.onFileDialogCancel,r=b.onFileDialogOpen,s=b.useFsAccessApi,t=b.preventDropOnDocument,u=b.noClick,v=b.noKeyboard,z=b.noDrag,A=b.noDragEventsBubbling,B=b.validator,C=(0,d.useMemo)(function(){return"function"==typeof r?r:ia},[r]),D=(0,d.useMemo)(function(){return"function"==typeof q?q:ia},[q]),E=(0,d.useRef)(null),F=(0,d.useRef)(null),G=U((0,d.useReducer)(ha,fa),2),K=G[0],Q=G[1],R=K.isFocused,V=K.isFileDialogActive,Y=K.draggedFiles,Z=function(){V&&setTimeout(function(){F.current&&(F.current.files.length||(Q({type:"closeDialog"}),D()))},300)};(0,d.useEffect)(function(){return s&&P()?function(){}:(window.addEventListener("focus",Z,!1),function(){window.removeEventListener("focus",Z,!1)})},[F,V,D,s]);var $=(0,d.useRef)([]),ca=function(a){E.current&&E.current.contains(a.target)||(a.preventDefault(),$.current=[])};(0,d.useEffect)(function(){return t&&(document.addEventListener("dragover",N,!1),document.addEventListener("drop",ca,!1)),function(){t&&(document.removeEventListener("dragover",N),document.removeEventListener("drop",ca))}},[E,t]);var da,ga,ja,ka,la,ma,na,oa=(0,d.useCallback)(function(a){var b;a.preventDefault(),a.persist(),Ba(a),$.current=[].concat(function(a){if(Array.isArray(a))return X(a)}(b=$.current)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(b)||W(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[a.target]),M(a)&&Promise.resolve(f(a)).then(function(b){L(a)&&!A||(Q({draggedFiles:b,isDragActive:!0,type:"setDraggedFiles"}),k&&k(a))})},[f,k,A]),pa=(0,d.useCallback)(function(a){a.preventDefault(),a.persist(),Ba(a);var b=M(a);if(b&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch(c){}return b&&m&&m(a),!1},[m,A]),qa=(0,d.useCallback)(function(a){a.preventDefault(),a.persist(),Ba(a);var b=$.current.filter(function(a){return E.current&&E.current.contains(a)}),c=b.indexOf(a.target);-1!==c&&b.splice(c,1),$.current=b,!(b.length>0)&&(Q({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),M(a)&&l&&l(a))},[E,l,A]),ra=(0,d.useCallback)(function(a,b){var d=[],e=[];a.forEach(function(a){var b=U(I(a,c),2),f=b[0],i=b[1],j=J(a,h,g),k=U(j,2),l=k[0],m=k[1],n=B?B(a):null;if(f&&l&&!n)d.push(a);else{var o=[i,m];n&&(o=o.concat(n)),e.push({file:a,errors:o.filter(function(a){return a})})}}),(!i&&d.length>1||i&&j>=1&&d.length>j)&&(d.forEach(function(a){e.push({file:a,errors:[H]})}),d.splice(0)),Q({acceptedFiles:d,fileRejections:e,type:"setFiles"}),n&&n(d,e,b),e.length>0&&p&&p(e,b),d.length>0&&o&&o(d,b)},[Q,i,c,h,g,j,n,o,p,B]),sa=(0,d.useCallback)(function(a){a.preventDefault(),a.persist(),Ba(a),$.current=[],M(a)&&Promise.resolve(f(a)).then(function(b){L(a)&&!A||ra(b,a)}),Q({type:"reset"})},[f,ra,A]),ta=(0,d.useCallback)(function(){if(s&&P()){Q({type:"openDialog"}),C();var a,b={multiple:i,types:(a="string"==typeof(a=c)?a.split(","):a,[{description:"everything",accept:Array.isArray(a)?a.filter(function(a){return"audio/*"===a||"video/*"===a||"image/*"===a||"text/*"===a||/\w+\/[-+.\w]+/g.test(a)}).reduce(function(a,b){return w(w({},a),{},x({},b,[]))},{}):{}}])};window.showOpenFilePicker(b).then(function(a){return f(a)}).then(function(a){return ra(a,null)}).catch(function(a){return D(a)}).finally(function(){return Q({type:"closeDialog"})});return}F.current&&(Q({type:"openDialog"}),C(),F.current.value=null,F.current.click())},[Q,C,D,s,ra,c,i]),ua=(0,d.useCallback)(function(a){E.current&&E.current.isEqualNode(a.target)&&(32===a.keyCode||13===a.keyCode)&&(a.preventDefault(),ta())},[E,F,ta]),va=(0,d.useCallback)(function(){Q({type:"focus"})},[]),wa=(0,d.useCallback)(function(){Q({type:"blur"})},[]),xa=(0,d.useCallback)(function(){u||((function(){var a,b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==(a=b).indexOf("MSIE")|| -1!==a.indexOf("Trident/")|| -1!==b.indexOf("Edge/")})()?setTimeout(ta,0):ta())},[F,u,ta]),ya=function(a){return e?null:a},za=function(a){return v?null:ya(a)},Aa=function(a){return z?null:ya(a)},Ba=function(a){A&&a.stopPropagation()},Ca=(0,d.useMemo)(function(){return function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.refKey,c=a.role,d=a.onKeyDown,f=a.onFocus,g=a.onBlur,h=a.onClick,i=a.onDragEnter,j=a.onDragOver,k=a.onDragLeave,l=a.onDrop,m=ba(a,S);return _(_(aa({onKeyDown:za(O(d,ua)),onFocus:za(O(f,va)),onBlur:za(O(g,wa)),onClick:ya(O(h,xa)),onDragEnter:Aa(O(i,oa)),onDragOver:Aa(O(j,pa)),onDragLeave:Aa(O(k,qa)),onDrop:Aa(O(l,sa)),role:"string"==typeof c&&""!==c?c:"button"},void 0===b?"ref":b,E),e||v?{}:{tabIndex:0}),m)}},[E,ua,va,wa,xa,oa,pa,qa,sa,v,z,e]),Da=(0,d.useCallback)(function(a){a.stopPropagation()},[]),Ea=(0,d.useMemo)(function(){return function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.refKey,d=a.onChange,e=a.onClick,f=ba(a,T),g=aa({accept:c,multiple:i,type:"file",style:{display:"none"},onChange:ya(O(d,sa)),onClick:ya(O(e,Da)),autoComplete:"off",tabIndex:-1},void 0===b?"ref":b,F);return _(_({},g),f)}},[F,c,i,sa,e]),Fa=Y.length,Ga=Fa>0&&(ga=(da={files:Y,accept:c,minSize:h,maxSize:g,multiple:i,maxFiles:j}).files,ja=da.accept,ka=da.minSize,la=da.maxSize,ma=da.multiple,na=da.maxFiles,(!!ma||!(ga.length>1))&&(!ma||!(na>=1)||!(ga.length>na))&&ga.every(function(a){var b=y(I(a,ja),1)[0],c=J(a,ka,la),d=y(c,1),e=d[0];return b&&e}));return _(_({},K),{},{isDragAccept:Ga,isDragReject:Fa>0&&!Ga,isFocused:R&&!e,getRootProps:Ca,getInputProps:Ea,rootRef:E,inputRef:F,open:ya(ta)})}function ha(a,b){switch(b.type){case"focus":return _(_({},a),{},{isFocused:!0});case"blur":return _(_({},a),{},{isFocused:!1});case"openDialog":return _(_({},fa),{},{isFileDialogActive:!0});case"closeDialog":return _(_({},a),{},{isFileDialogActive:!1});case"setDraggedFiles":var c=b.isDragActive,d=b.draggedFiles;return _(_({},a),{},{draggedFiles:d,isDragActive:c});case"setFiles":return _(_({},a),{},{acceptedFiles:b.acceptedFiles,fileRejections:b.fileRejections});case"reset":return _({},fa);default:return a}}function ia(){}}}])
//# sourceMappingURL=2512-32ccd06b66c54dc4.js.map