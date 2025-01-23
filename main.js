(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);"]),i.push([n.id,"/* Import Inter Font (ensure you have this in your project or via CDN) */\n\n/* Reset some default styles for consistency across browsers */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  background: linear-gradient(135deg, #e0eafc, #cfdef3);\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#mainContainer {\n  background-color: #ffffff;\n  padding: 40px 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n  max-width: 400px;\n}\n\n/* Weather Data Styles */\n#weatherDataContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n#temp {\n  font-weight: 700;\n  font-size: 4.5rem;\n  color: #333333;\n}\n\n#desc {\n  font-style: italic;\n  text-align: center;\n  font-size: 1.2rem;\n  color: #555555;\n}\n\n/* Form Styles */\n#inputContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n}\n\nlabel {\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #333333;\n}\n\ninput[type='text'] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1.5px solid #ccc;\n  border-radius: 8px;\n  font-size: 16px;\n  transition:\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n  outline: none;\n}\n\ninput[type='text']:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n\nbutton {\n  width: 100%;\n  padding: 12px 16px;\n  background-color: #007bff;\n  border: none;\n  border-radius: 8px;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.3s ease,\n    transform 0.2s ease;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\nbutton:active {\n  transform: scale(0.98);\n}\n\n.hidden {\n  display: none;\n}\n\n#bodyContainer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loader {\n  z-index: 1000;\n  padding: 20px;\n  border-radius: 10px;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 50%;\n  height: auto;\n}\n\nimg {\n  height: 25px;\n}\n\n/* Responsive Design */\n@media (max-width: 480px) {\n  #mainContainer {\n    padding: 30px 20px;\n  }\n\n  #temp {\n    font-size: 3.5rem;\n  }\n\n  #desc {\n    font-size: 1rem;\n    text-align: center;\n  }\n\n  input[type='text'],\n  button {\n    font-size: 14px;\n    padding: 10px 14px;\n  }\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,wEAAwE;;AAGxE,8DAA8D;AAC9D;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gCAAgC;EAChC,qDAAqD;EACrD,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;EACf;;wBAEsB;EACtB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;;uBAEqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,sBAAsB;AACtB;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;;IAEE,eAAe;IACf,kBAAkB;EACpB;AACF",sourcesContent:["/* Import Inter Font (ensure you have this in your project or via CDN) */\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\r\n\r\n/* Reset some default styles for consistency across browsers */\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Inter', sans-serif;\r\n  background: linear-gradient(135deg, #e0eafc, #cfdef3);\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#mainContainer {\r\n  background-color: #ffffff;\r\n  padding: 40px 30px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 25px;\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n/* Weather Data Styles */\r\n#weatherDataContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n#temp {\r\n  font-weight: 700;\r\n  font-size: 4.5rem;\r\n  color: #333333;\r\n}\r\n\r\n#desc {\r\n  font-style: italic;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  color: #555555;\r\n}\r\n\r\n/* Form Styles */\r\n#inputContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  gap: 4px;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 8px;\r\n  font-weight: 600;\r\n  color: #333333;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 100%;\r\n  padding: 12px 16px;\r\n  border: 1.5px solid #ccc;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  transition:\r\n    border-color 0.3s ease,\r\n    box-shadow 0.3s ease;\r\n  outline: none;\r\n}\r\n\r\ninput[type='text']:focus {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 12px 16px;\r\n  background-color: #007bff;\r\n  border: none;\r\n  border-radius: 8px;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition:\r\n    background-color 0.3s ease,\r\n    transform 0.2s ease;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#bodyContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#loader {\r\n  z-index: 1000;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: fit-content;\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 50%;\r\n  height: auto;\r\n}\r\n\r\nimg {\r\n  height: 25px;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 480px) {\r\n  #mainContainer {\r\n    padding: 30px 20px;\r\n  }\r\n\r\n  #temp {\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  #desc {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n  }\r\n\r\n  input[type='text'],\r\n  button {\r\n    font-size: 14px;\r\n    padding: 10px 14px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],c=r.base?A[0]+r.base:A[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=t(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var A=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,t.d({},{Lq:()=>m,VY:()=>g,Zy:()=>b});var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),A=t.n(s),c=t(56),d=t.n(c),l=t(540),p=t.n(l),u=t(113),f=t.n(u),C=t(208),B={};B.styleTagTransform=f(),B.setAttributes=d(),B.insert=A().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=p(),o()(C.A,B),C.A&&C.A.locals&&C.A.locals;const E=t.p+"6e371854a6bdc67e48e4.gif",m="28RELCWXNR4CHUTCUDFR8F9FN",g="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",x=document.getElementById("submitBtn"),h=document.getElementById("loader");async function b(n){try{const e=await fetch(n,{mode:"cors"});if(!e.ok)throw new Error(`HTTP Error, status ${e.status}`);return await e.json()}catch(n){return console.log(n),alert("Failed to fetch weather data. Please check the location or try again later."),null}}document.querySelector("img").src=E,async function(){const n=document.getElementById("moonphase");let e=await async function(){let n=g+"85308?key="+m;const e=await b(n);if(e){const{moonphase:n}=e.currentConditions;return n}}();switch(!0){case 0===e:n.textContent="Moon: New Moon";break;case e>0&&e<.25:n.textContent="Moon: Waxing Crescent";break;case.25===e:n.textContent="Moon: First Quarter";break;case e>.25&&e<.5:n.textContent="Moon: Waxing Gibbous";break;case.5===e:n.textContent="Moon: Full Moon";break;case e>.5&&e<.75:n.textContent="Moon: Waning Gibbous";break;case.75===e:n.textContent="Moon: Last Quarter";break;case e>.75&&e<1:n.textContent="Moon: Waning Crescent"}}(),x.addEventListener("click",(async()=>{const n=document.querySelector("input").value.trim();if(document.querySelector("input").value="",""===n)return void alert("Please enter a location or zipcode");const e=g+n+"?key="+m;h.classList.remove("hidden");try{const n=await b(e);n&&function(n){const e=document.getElementById("temp"),t=document.getElementById("desc"),r=document.getElementById("location");if(!n||!n.currentConditions)return void alert("Error parsing weather data");const{temp:o}=n.currentConditions,{description:a,resolvedAddress:i}=n;r.textContent=i,e.textContent=o+"°F",function(n,e){switch(!0){case e<=32:n.style.color="#AECBFA";break;case e>32&&e<=64:n.style.color="#C1E1C1";break;case e>64&&e<90:n.style.color="#FFD59A";break;case e>=90:n.style.color="#FFB3B3"}}(e,o),t.textContent=a}(n)}catch(n){console.log("Error fetching data, ",n)}finally{h.classList.add("hidden")}}))})();
//# sourceMappingURL=main.js.map