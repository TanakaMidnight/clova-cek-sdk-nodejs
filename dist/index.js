"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var crypto=require("crypto"),bodyParser=require("body-parser");function __awaiter(i,u,s,c){return new(s||(s=Promise))(function(e,t){function r(e){try{o(c.next(e))}catch(e){t(e)}}function n(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((c=c.apply(i,u||[])).next())})}function __generator(r,n){var o,i,u,e,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,u&&(t=[2&t[0],u.value]),t[0]){case 0:case 1:u=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(u=0<(u=s.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){s.label=t[1];break}if(6===t[0]&&s.label<u[1]){s.label=u[1],u=t;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(t);break}u[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],i=0}finally{o=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_core=createCommonjsModule(function(e){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document=_global.document,is=_isObject(document)&&_isObject(document.createElement),_domCreate=function(e){return is?document.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,r){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(r),_ie8DomDefine)try{return dP(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,r){return _objectDp.f(e,t,_propertyDesc(1,r))}:function(e,t,r){return e[t]=r,e},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},_redefine=createCommonjsModule(function(e){var i=_uid("src"),t="toString",r=Function[t],u=(""+r).split(t);_core.inspectSource=function(e){return r.call(e)},(e.exports=function(e,t,r,n){var o="function"==typeof r;o&&(_has(r,"name")||_hide(r,"name",t)),e[t]!==r&&(o&&(_has(r,i)||_hide(r,i,e[t]?""+e[t]:u.join(String(t)))),e===_global?e[t]=r:n?e[t]?e[t]=r:_hide(e,t,r):(delete e[t],_hide(e,t,r)))})(Function.prototype,t,function(){return"function"==typeof this&&this[i]||r.call(this)})}),_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(n,o,e){if(_aFunction(n),void 0===o)return n;switch(e){case 1:return function(e){return n.call(o,e)};case 2:return function(e,t){return n.call(o,e,t)};case 3:return function(e,t,r){return n.call(o,e,t,r)}}return function(){return n.apply(o,arguments)}},PROTOTYPE="prototype",$export=function(e,t,r){var n,o,i,u,s=e&$export.F,c=e&$export.G,a=e&$export.S,f=e&$export.P,p=e&$export.B,l=c?_global:a?_global[t]||(_global[t]={}):(_global[t]||{})[PROTOTYPE],h=c?_core:_core[t]||(_core[t]={}),d=h[PROTOTYPE]||(h[PROTOTYPE]={});for(n in c&&(r=t),r)i=((o=!s&&l&&void 0!==l[n])?l:r)[n],u=p&&o?_ctx(i,_global):f&&"function"==typeof i?_ctx(Function.call,i):i,l&&_redefine(l,n,i,e&$export.U),h[n]!=i&&_hide(h,n,u),f&&d[n]!=i&&(d[n]=i)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_defined=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_toIobject=function(e){return _iobject(_defined(e))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(0<e?floor:ceil)(e)},min=Math.min,_toLength=function(e){return 0<e?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(s){return function(e,t,r){var n,o=_toIobject(e),i=_toLength(o.length),u=_toAbsoluteIndex(r,i);if(s&&t!=t){for(;u<i;)if((n=o[u++])!=n)return!0}else for(;u<i;u++)if((s||u in o)&&o[u]===t)return s||u||0;return!s&&-1}},_library=!1,_shared=createCommonjsModule(function(e){var t="__core-js_shared__",r=_global[t]||(_global[t]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:_core.version,mode:_library?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var r,n=_toIobject(e),o=0,i=[];for(r in n)r!=IE_PROTO&&_has(n,r)&&i.push(r);for(;t.length>o;)_has(n,r=t[o++])&&(~arrayIndexOf(i,r)||i.push(r));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},f$1={}.propertyIsEnumerable,_objectPie={f:f$1},isEnum=_objectPie.f,_objectToArray=function(s){return function(e){for(var t,r=_toIobject(e),n=_objectKeys(r),o=n.length,i=0,u=[];i<o;)isEnum.call(r,t=n[i++])&&u.push(s?[t,r[t]]:r[t]);return u}},$values=_objectToArray(!1);_export(_export.S,"Object",{values:function(e){return $values(e)}});var values=_core.Object.values,Context=function(){function e(e){this.requestObject=e,this.responseObject={response:{card:{},directives:[],outputSpeech:{},shouldEndSession:!1},sessionAttributes:e.session.sessionAttributes,version:e.version}}return e.prototype.endSession=function(){this.responseObject.response.shouldEndSession=!0,this.responseObject.sessionAttributes={}},e.prototype.getSessionId=function(){return this.requestObject.session.sessionId},e.prototype.getIntentName=function(){var e=this.requestObject.request;return e.intent?e.intent.name:null},e.prototype.getSlots=function(){var e=this.requestObject.request;return e.intent&&e.intent.slots?Object.values(e.intent.slots).reduce(function(e,t){var r;return Object.assign({},e,((r={})[t.name]=t.value,r))},{}):{}},e.prototype.getSlot=function(e){return this.getSlots()[e]||null},e.prototype.getUser=function(){return this.requestObject.session.user},e.prototype.setOutputSpeech=function(e,t){void 0===t&&(t=!1),t?this.responseObject.response.reprompt={outputSpeech:e}:this.responseObject.response.outputSpeech=e},e.prototype.setReprompt=function(e){this.responseObject.response.reprompt={outputSpeech:e}},e.prototype.setSimpleSpeech=function(e,t){void 0===t&&(t=!1);var r={type:"SimpleSpeech",values:e};return this.setOutputSpeech(r,t),this},e.prototype.setSpeechList=function(e,t){void 0===t&&(t=!1);var r={type:"SpeechList",values:e};return this.setOutputSpeech(r,t),this},e.prototype.setSpeechSet=function(e,t,r){void 0===r&&(r=!1);var n={brief:e,type:"SpeechSet",verbose:t};return this.setOutputSpeech(n,r),this},e.prototype.getSessionAttributes=function(){return this.requestObject.session.sessionAttributes},e.prototype.setSessionAttributes=function(e){this.responseObject.sessionAttributes=e},e}(),SkillConfigurator=function(){function e(){this.config={requestHandlers:{}}}return e.prototype.on=function(e,t){return this.config.requestHandlers[e]||(this.config.requestHandlers[e]=t),this},e.prototype.onLaunchRequest=function(e){return this.on("LaunchRequest",e),this},e.prototype.onIntentRequest=function(e){return this.on("IntentRequest",e),this},e.prototype.onSessionEndedRequest=function(e){return this.on("SessionEndedRequest",e),this},e.prototype.handle=function(){var e=this;return function(i,u){return __awaiter(e,void 0,void 0,function(){var t,r,n,o;return __generator(this,function(e){switch(e.label){case 0:t=new Context(i.body),e.label=1;case 1:return e.trys.push([1,5,,6]),r=t.requestObject.request.type,(n=this.config.requestHandlers[r])?[4,n.call(t,t)]:[3,3];case 2:return e.sent(),u.json(t.responseObject),[3,4];case 3:throw new Error("Unable to find requestHandler for '"+r+"'");case 4:return[3,6];case 5:return o=e.sent(),console.error(o.message),u.sendStatus(500),[3,6];case 6:return[2]}})})}},e.prototype.lambda=function(){var e=this;return function(o){return __awaiter(e,void 0,void 0,function(){var t,r,n;return __generator(this,function(e){switch(e.label){case 0:return t=new Context(o),r=t.requestObject.request.type,(n=this.config.requestHandlers[r])?[4,n.call(t,t)]:[3,2];case 1:return e.sent(),[2,t.responseObject];case 2:throw new Error("Unable to find requestHandler for '"+r+"'")}})})}},e.prototype.firebase=function(){return this.handle()},e}(),Client=function(){function e(){}return e.configureSkill=function(){return new SkillConfigurator},e}(),SpeechBuilder=function(){function r(){}return r.createSpeechText=function(e,t){return{lang:t||r.DEFAULT_LANG,type:"PlainText",value:e}},r.createSpeechUrl=function(e){return{lang:"",type:"URL",value:e}},Object.defineProperty(r,"DEFAULT_LANG",{get:function(){return r.defaultLang},set:function(e){r.defaultLang=e},enumerable:!0,configurable:!0}),r.defaultLang="ja",r}();function checkSignature(e,t,r){var n=crypto.createVerify("RSA-SHA256");if(n.update(r,"utf8"),!n.verify(e,t,"base64"))throw new Error('Invalid signature: "'+t+'".')}function checkApplicationId(e,t){if(e.context.System.application.applicationId!==t)throw new Error("Invalid application id: "+t+".")}function getCertificate(){return"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwiMvQNKD/WQcX9KiWNMb\nnSR+dJYTWL6TmqqwWFia69TyiobVIfGfxFSefxYyMTcFznoGCpg8aOCAkMxUH58N\n0/UtWWvfq0U5FQN9McE3zP+rVL3Qul9fbC2mxvazxpv5KT7HEp780Yew777cVPUv\n3+I73z2t0EHnkwMesmpUA/2Rp8fW8vZE4jfiTRm5vSVmW9F37GC5TEhPwaiIkIin\nKCrH0rXbfe3jNWR7qKOvVDytcWgRHJqRUuWhwJuAnuuqLvqTyAawqEslhKZ5t+1Z\n0GN8b2zMENSuixa1M9K0ZKUw3unzHpvgBlYmXRGPTSuq/EaGYWyckYz8CBq5Lz2Q\nUwIDAQAB\n-----END PUBLIC KEY-----"}function verifier(r,n,o){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:if(!r)throw new Error("Missing signature.");if(!n)throw new Error("Missing applicationId.");if(!o)throw new Error("Missing requestBody.");return[4,getCertificate()];case 1:return checkSignature(e.sent(),r,o),checkApplicationId(t=JSON.parse(o),n),[2,t]}})})}function verifierMiddleware(r){var n=this;return function(i,e,u){var s=i.headers.signaturecek,c=r.applicationId,t=function(o){return __awaiter(n,void 0,void 0,function(){var t,r,n;return __generator(this,function(e){switch(e.label){case 0:t=Buffer.isBuffer(o)?o.toString():o,e.label=1;case 1:return e.trys.push([1,3,,4]),r=i,[4,verifier(s,c,t)];case 2:return r.body=e.sent(),u(),[3,4];case 3:return n=e.sent(),u(n),[3,4];case 4:return[2]}})})};return"string"==typeof i.body||Buffer.isBuffer(i.body)?t(i.body):"object"==typeof i.body?t(JSON.stringify(i.body)):void bodyParser.raw({type:"*/*"})(i,e,function(){return __awaiter(n,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,t(i.body)];case 1:return[2,e.sent()]}})})})}}exports.Client=Client,exports.Context=Context,exports.SpeechBuilder=SpeechBuilder,exports.verifier=verifier,exports.Middleware=verifierMiddleware;
//# sourceMappingURL=index.js.map
