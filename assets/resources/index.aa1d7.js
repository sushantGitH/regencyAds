window.__require=function t(e,n,o){function r(i,a){if(!n[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(t){return r(e[i][1][t]||t)},p,p.exports,t,e,n,o)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<o.length;i++)r(o[i]);return r}({btn:[function(t,e,n){"use strict";cc._RF.push(e,"1b63dKbRsFL+5eN0qeFKj5v","btn");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.myNumber=0,e}return o(e,t),e.prototype.start=function(){},e.prototype.initialiseNumber=function(t){this.myNumber=t},e.prototype.onCallClicked=function(){window.location.href="tel://"+this.myNumber},e.prototype.onWhatsAppClicked=function(){window.location.href=this.getLinkWhastapp()},e.prototype.getLinkWhastapp=function(){return"https://api.whatsapp.com/send?phone=91"+this.myNumber+"&text=%20"},e=r([i],e)}(cc.Component));n.default=a,cc._RF.pop()},{}],commonFun:[function(t,e,n){"use strict";cc._RF.push(e,"0f3cfxc+sBPVasfjR9NnERu","commonFun");var o=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(n,"__esModule",{value:!0}),n.CommonFun=void 0;var r=cc._decorator,c=r.ccclass,i=(r.property,function(){function t(){}var e;return e=t,Object.defineProperty(t,"instance",{get:function(){return this._instance?this._instance:(this._instance=new e,this._instance)},enumerable:!1,configurable:!0}),t.prototype.start=function(){},t.prototype.addFrame=function(t,e){cc.resources.load(e,cc.SpriteFrame,function(e,n){t.getComponent(cc.Sprite).spriteFrame=n})},t=e=o([c("CommonFun")],t)}());n.CommonFun=i,cc._RF.pop()},{}],constant:[function(t,e,n){"use strict";cc._RF.push(e,"73225VQ4HpPaZUVHjzJ1T1n","constant"),Object.defineProperty(n,"__esModule",{value:!0}),n.constant=void 0;var o=function(){function t(){}return t.data={0:"babysitting",1:"cake",2:"cattering",3:"childrennursery",4:"classes",5:"cookedfooddelivery",6:"doctor",7:"fish",8:"flouratta",9:"gasservice",10:"interior",11:"internet",12:"inverter",13:"laundry",14:"medicine",15:"pooja",16:"snacks",17:"stationery",18:"tailor",19:"tiffin",20:"vegetables",21:"vehicle"},t.publicGetNumber={babysitting:1,cake:3,cattering:3,childrennursery:3,classes:5,cookedfooddelivery:1,doctor:2,fish:0,flouratta:2,gasservice:0,interior:2,internet:1,inverter:0,laundry:0,medicine:0,pooja:2,snacks:1,stationery:0,tailor:1,tiffin:0,vegetables:0,vehicle:1},t.getNumber={babysitting:[7945271372,9967443774],cake:[8291202070,9920177363,9747641448,9136318339],cattering:[7900148635,9768340325,9819097902,9819925071],childrennursery:[9022055563,8369926652,7945271372,9967443774],classes:[7758019741,9820355083,7039371216,9819226096,8828109671,8898028100],cookedfooddelivery:[9821141523,8097000305],doctor:[9324412708,9022800100,9324412708],fish:[8976173226],flouratta:[9769927372,9892940302,8454050894],gasservice:[8879667644],interior:[9004366620,9922081799,9769420408],internet:[9702285594,9322571666],inverter:[7506357813],laundry:[9819026708],medicine:[8433620174],pooja:[7666855031,9561505605,9930154551],snacks:[9920204169,9819773666],stationery:[9167030101],tailor:[9029239966,9561865766],tiffin:[9769271294],vegetables:[9769032255],vehicle:[9221440125,8689836888]},t}();n.constant=o,cc._RF.pop()},{}],mainMenu:[function(t,e,n){"use strict";cc._RF.push(e,"052d0z6U2JHyb1Ffog6jeKh","mainMenu");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./btn"),i=t("./commonFun"),a=t("./constant"),s=cc._decorator,u=s.ccclass,p=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.holder=null,e.item=null,e.content=null,e.scrollView=null,e}return o(e,t),e.prototype.start=function(){},e.prototype.dummy=function(){},e.prototype.onClicked=function(t,e){var n=a.constant.data[e];this.holder.active=!0,this.scrollView.getComponent(cc.ScrollView).scrollToTop();for(var o=a.constant.publicGetNumber[n],r=0;r<=o;r++){var s=cc.instantiate(this.item);this.content.addChild(s);var u="png/regency/"+n+"/"+r;i.CommonFun.instance.addFrame(s.getChildByName("img"),u),s.getComponent(c.default).initialiseNumber(a.constant.getNumber[n][r])}},e.prototype.onCloseClicked=function(){this.holder.active=!1,this.content.removeAllChildren()},r([p(cc.Node)],e.prototype,"holder",void 0),r([p(cc.Prefab)],e.prototype,"item",void 0),r([p(cc.Node)],e.prototype,"content",void 0),r([p(cc.Node)],e.prototype,"scrollView",void 0),e=r([u],e)}(cc.Component);n.default=l,cc._RF.pop()},{"./btn":"btn","./commonFun":"commonFun","./constant":"constant"}]},{},["btn","commonFun","constant","mainMenu"]);