(function(t){function a(a){for(var n,i,o=a[0],l=a[1],c=a[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);v&&v(a);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(n=!1)}n&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eb1c731a"}[t]+".js"}function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=r[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise((function(a,n){e=r[t]=[a,n]}));a.push(e[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;s=function(a){l.onerror=l.onload=null,clearTimeout(u);var e=r[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,e[1](c)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(a)},o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var v=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1f2d":function(t,a,e){},3981:function(t,a,e){},"3bd5":function(t,a,e){"use strict";var n=e("eec9"),r=e.n(n);r.a},4230:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Menu"),e("v-content",{staticClass:"grey darken-3"},[e("router-view")],1),e("Footer")],1)},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"menu"}},[e("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[e("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(a){a.stopPropagation(),t.show=!t.show}}}),e("v-toolbar-title",{staticClass:"clickable hidden-sm-and-down",on:{click:function(a){return t.$router.push("/")}}},[t._v("Lyrics App")]),e("v-spacer"),e("v-slide-x-reverse-transition",[t.vari?e("v-text-field",{attrs:{placeholder:"Search",solo:"",clearable:"","hide-details":"","single-line":"",filled:""}}):t._e()],1),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.vari=!t.vari}}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e("v-btn",{attrs:{to:"/artists",text:""}},[t._v("Artists")]),e("v-btn",{attrs:{to:"/songs",text:""}},[t._v("Songs")]),e("v-btn",{attrs:{to:"/submit",text:""}},[t._v("Submit")]),e("v-btn",{attrs:{to:"/login",text:""}},[t._v("Login")]),e("v-btn",{attrs:{to:"/registration",text:""}},[t._v("Registration")]),e("v-menu",{attrs:{origin:"top right",transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:""}},n),[e("v-icon",{staticClass:"fa fa-language"})],1)]}}])},[e("v-list",t._l(t.items,(function(a,n){return e("v-list-item",{key:n},[e("v-list-item-title",[t._v(t._s(a.title))])],1)})),1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{dark:"",app:"","disable-resize-watcher":""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title",on:{click:function(a){t.$router.push("/"),t.drawer=!1}}},[t._v(" Lyrics App ")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(a){t.$router.push("/artists"),t.drawer=!1}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-microphone-variant")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Artist")])],1)],1)],1),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(a){t.$router.push("/songs"),t.drawer=!1}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-music-note")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Songs")])],1)],1)],1),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(a){t.$router.push("/submit"),t.drawer=!1}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Submit")])],1)],1)],1),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(a){t.$router.push("/login"),t.drawer=!1}}},[e("v-list-item-icon",[e("v-icon",[t._v(" mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Login")])],1)],1)],1),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(a){t.$router.push("/registration"),t.drawer=!1}}},[e("v-list-item-icon",[e("v-icon",[t._v(" mdi-account-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Registration")])],1)],1)],1)],1)],1)},o=[],l={data:function(){return{show:!1,items:[{title:"English"},{title:"Russian"},{title:"Armenian"},{title:"French"}],vari:!1}},props:{msg:String},translations:[{language:"English",author:"Matthew Bofenkamp"},{language:"Spanish",author:"Arthur"}]},c=l,u=(e("a767"),e("2877")),v=e("6544"),d=e.n(v),g=e("40dc"),m=e("5bc1"),f=e("8336"),h=e("ce7e"),p=e("132d"),b=e("8860"),_=e("da13"),y=e("5d23"),w=e("34c3"),k=e("e449"),C=e("f774"),x=e("0789"),L=e("2fa4"),V=e("8654"),S=e("2a7f"),j=Object(u["a"])(c,i,o,!1,null,"893a27ae",null),T=j.exports;d()(j,{VAppBar:g["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VDivider:h["a"],VIcon:p["a"],VList:b["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemTitle:y["b"],VMenu:k["a"],VNavigationDrawer:C["a"],VSlideXReverseTransition:x["d"],VSpacer:L["a"],VTextField:V["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]});var A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-footer",{attrs:{dark:"",padless:"",app:"",absolute:""}},[e("v-card",{staticClass:"indigo white--text",staticStyle:{width:"100%"},attrs:{flat:"",tile:""}},[e("v-card-text",{staticClass:"text-center"},t._l(t.icons,(function(a){return e("v-btn",{key:a.link,staticClass:"mx-4 white--text",attrs:{href:a.link,target:"_blank",icon:""}},[e("v-icon",{attrs:{size:"24px"}},[t._v(t._s(a.icon))])],1)})),1),e("v-card-text",{staticClass:"white--text pt-0 text-center"},[e("v-btn",{attrs:{dark:"",text:"",to:"/artists"}},[t._v("Artists")]),e("v-btn",{attrs:{dark:"",text:"",to:"/songs"}},[t._v("Songs")]),e("v-btn",{attrs:{dark:"",text:"",to:"/login"}},[t._v("Login")]),e("v-btn",{attrs:{dark:"",text:"",to:"/registration"}},[t._v("Registration")])],1),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("TRANSLATIONS")])])],1)],1)],1)},I=[],R={name:"Song",props:{msg:String},data:function(){return{translations:[{language:"English",author:"Matthew Bofenkamp"},{language:"Spanish",author:"Arthur"}],icons:[{icon:"mdi-facebook-box",link:"https://facebook.com"},{icon:"mdi-twitter-box",link:"https://twitter.com"},{icon:"mdi-linkedin-box",link:"https://linkedin.com"},{icon:"mdi-instagram",link:"https://instagram.com"}]}}},E=R,O=(e("3bd5"),e("b0af")),$=e("99d9"),P=e("553a"),N=Object(u["a"])(E,A,I,!1,null,"2d3de0fe",null),B=N.exports;d()(N,{VBtn:f["a"],VCard:O["a"],VCardText:$["b"],VDivider:h["a"],VFooter:P["a"],VIcon:p["a"]});var q={name:"App",components:{Menu:T,Footer:B},data:function(){return{}}},F=q,M=e("7496"),D=e("a75b"),z=Object(u["a"])(F,r,s,!1,null,null,null),H=z.exports;d()(z,{VApp:M["a"],VContent:D["a"]});e("d3b7");var G=e("8c4f"),K=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"muzieknootjes"},[e("div",{staticClass:"noot-1"},[t._v(" ♫ ♩ ")]),e("div",{staticClass:"noot-2"},[t._v(" ♩ ")]),e("div",{staticClass:"noot-3"},[t._v(" ♯ ♪ ")]),e("div",{staticClass:"noot-4"},[t._v(" ♪ ")])])}],Y={name:"home"},J=Y,Q=(e("cccb"),Object(u["a"])(J,K,U,!1,null,null,null)),W=Q.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"grey darken-3",attrs:{fluid:"","fill-height":"",id:"artists"}},[e("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("h2",{staticClass:"white--text"},[t._v("Artists on Lyrics Translate")])])],1),t.loading?e("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"4"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"indigo"}}),e("h1",{staticClass:"white--text"},[t._v(t._s(t.error))])],1)],1):t._e(),t.loading?t._e():e("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"white--text"},[t._v("Cards")])])],1),t.loading?t._e():e("v-row",{staticClass:"text-center"},t._l(t.artists,(function(a,n){return e("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("v-card",{staticClass:"px-5",attrs:{dark:"",shaped:"",hover:"",color:"grey darken-1"}},[e("v-card-title",{staticClass:"my-0 pb-0"},[t._v(t._s(a.name))]),e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"10"}},[e("v-img",{attrs:{height:"200",width:"200",src:a.img}})],1),e("v-col",{staticClass:"text-center pl-0",attrs:{cols:"auto"}},[e("v-row",{staticClass:"flex-column ma-0 fill-height",attrs:{justify:"center"}},[e("v-col",{staticClass:"px-0"},[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-heart")])],1)],1),e("v-col",{staticClass:"px-0"},[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-bookmark")])],1)],1),e("v-col",{staticClass:"px-0"},[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)],1)],1)],1)],1)})),1)],1)},Z=[],tt=(e("96cf"),e("1da1")),at=e("bc3a"),et=e.n(at),nt={name:"artists",data:function(){return{artists:null,loading:!0,error:null}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:et.a.get("https://lyrics-translate.herokuapp.com/getArtists").then((function(t){a.artists=t.data["artists"],a.loading=!1})).catch((function(t){a.error=t,a.loading=!0}));case 1:case"end":return t.stop()}}),t)})));function a(){return t.apply(this,arguments)}return a}()},rt=nt,st=e("62ad"),it=e("a523"),ot=e("adda"),lt=e("490a"),ct=e("0fd9"),ut=Object(u["a"])(rt,X,Z,!1,null,null,null),vt=ut.exports;d()(ut,{VBtn:f["a"],VCard:O["a"],VCardTitle:$["c"],VCol:st["a"],VContainer:it["a"],VIcon:p["a"],VImg:ot["a"],VProgressCircular:lt["a"],VRow:ct["a"]});var dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",{staticClass:"container grey darken-3"},[e("v-container",{staticClass:"container grey darken-3 pl-9 pb-10 container--fluid fill-height"},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("h2",{staticStyle:{color:"white","text-align":"center"}},[t._v("Songs on Lyrics-Translate")])])],1),t.loading?e("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"4"}},[e("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"indigo"}}),e("h1",{staticClass:"white--text"},[t._v(t._s(t.error)+" ")])],1)],1):t._e(),e("v-row",[t.loading?t._e():e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"grey darken-1",attrs:{headers:t.headers,items:t.songs,dark:""},scopedSlots:t._u([{key:"item",fn:function(a){var n=a.item;return[e("tr",{key:n.id,staticClass:"clickable",on:{click:function(a){return t.$router.push({name:"display",params:{id:n.id}})}}},[e("td",{staticClass:"text-xs-left"},[t._v(t._s(n.title))]),e("td",{staticClass:"text-xs-center"},[t._v(t._s(n.artist))]),e("td",{staticClass:"text-xs-center"},[t._v(t._s(n.originalLanguage))])])]}}],null,!1,2332016731)})],1)],1)],1)],1)},gt=[],mt={name:"songs",data:function(){return{headers:[{text:"Song Title",align:"left",value:"title"},{text:"Artist",value:"artist"},{text:"Language",value:"language"}],songs:null,loading:!0,error:null}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:et.a.get("https://lyrics-translate.herokuapp.com/getSongs").then((function(t){a.songs=t.data["songs"],a.loading=!1})).catch((function(t){a.loading=!0,a.error=t}));case 1:case"end":return t.stop()}}),t)})));function a(){return t.apply(this,arguments)}return a}()},ft=mt,ht=(e("f8cb"),e("8fea")),pt=Object(u["a"])(ft,dt,gt,!1,null,"7f41535a",null),bt=pt.exports;d()(pt,{VCol:st["a"],VContainer:it["a"],VContent:D["a"],VDataTable:ht["a"],VProgressCircular:lt["a"],VRow:ct["a"]});var _t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-container",[e("div",{staticClass:"text-center"},[e("v-card",{staticClass:"grey darken-1",attrs:{dark:""}},[e("v-container",{staticClass:"pa-10"},[e("v-card-title",[t._v(" Login ")]),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"E-mail"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters and must have one number","error-count":"3",counter:""},on:{"click:append":function(a){t.show1=!t.show1}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),e("v-card-actions",[e("v-btn",{attrs:{outlined:""}},[t._v("Login")])],1)],1)],1)],1)])],1)],1)},yt=[],wt={data:function(){return{show1:!1,email:null,password:null}}},kt=wt,Ct=e("4bd4"),xt=Object(u["a"])(kt,_t,yt,!1,null,null,null),Lt=xt.exports;d()(xt,{VBtn:f["a"],VCard:O["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:st["a"],VContainer:it["a"],VForm:Ct["a"],VRow:ct["a"],VTextField:V["a"]});var Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticClass:"grey darken-1",attrs:{dark:""}},[e("v-container",[e("v-card-title",[t._v("Registration")]),e("v-card-text",[e("v-form",[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-text-field",{attrs:{rules:t.notBlankRule,outlined:"",label:"Name"},model:{value:t.firstName,callback:function(a){t.firstName=a},expression:"firstName"}})],1),e("v-col",{attrs:{cols:"6"}},[e("v-text-field",{attrs:{rules:t.notBlankRule,outlined:"",label:"Lastname"},model:{value:t.lastName,callback:function(a){t.lastName=a},expression:"lastName"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{rules:t.emailRules,outlined:"",label:"E-mail"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{outlined:"",label:"Confirm E-mail","error-count":"3",rules:t.emailConfirmationRules},model:{value:t.confirmEmail,callback:function(a){t.confirmEmail=a},expression:"confirmEmail"}}),e("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters and must have one number","error-count":"3",counter:""},on:{"click:append":function(a){t.show1=!t.show1}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1)],1)],1),e("v-card-actions",[e("v-row",{attrs:{justify:"center"}},[e("v-btn",{attrs:{outlined:""}},[t._v("Register")])],1)],1)],1)],1)],1)],1)},St=[],jt={data:function(){return{firstName:null,lastName:null,show1:!1,confirmEmail:null,password:null,email:null,emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=8||"Password must have 8 or more characters"},function(t){return/(?=.*\d)/.test(t)||"Password must contain at least 1 number"}],notBlankRule:[function(t){return!!t||"This field is required"}]}},computed:{emailConfirmationRules:function(){var t=this;return[function(){return t.email===t.confirmEmail||"E-mail must match"},function(t){return!!t||"Confirmation E-mail is required"}]}}},Tt=jt,At=Object(u["a"])(Tt,Vt,St,!1,null,null,null),It=At.exports;d()(At,{VBtn:f["a"],VCard:O["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:st["a"],VContainer:it["a"],VForm:Ct["a"],VRow:ct["a"],VTextField:V["a"]});var Rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"grey darken-3 pl-9 pb-10",attrs:{fluid:"","fill-height":""}},[t.loading?e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"1"}},[e("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"indigo"}})],1)],1):t._e(),e("v-row",{attrs:{justify:"center"}},[t.loading?t._e():e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-card",{staticClass:"grey darken-3",attrs:{flat:""}},[e("v-card-title",{staticStyle:{"word-break":"normal"}},[e("h1",{staticClass:"a"},[t._v(t._s(t.songInfo.title)+" ("+t._s(t.currentLanguage)+") Translation")])]),e("v-card-text",{staticClass:"white--text"},[e("hr"),e("p",[t._v(" Artist: "+t._s(t.songInfo.artist)+" "),e("br"),t._v(" Song: "+t._s(t.songInfo.title)+" "),e("br"),t._v(" Translations: "+t._s(t.songInfo.translations.toString())+" ")])]),e("v-card-actions",[e("v-spacer"),e("v-select",{attrs:{dark:"",items:t.songInfo.translations,label:"Select a translation:"},model:{value:t.currentLanguage,callback:function(a){t.currentLanguage=a},expression:"currentLanguage"}}),e("v-spacer")],1)],1),e("v-card",{staticClass:"grey darken-3",attrs:{flat:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[e("v-card-title",{staticClass:"a justify-center",staticStyle:{"word-break":"normal"}},[t._v("About the Translator")]),e("v-img",{staticClass:"text-center",attrs:{width:"100%",src:"https://lyricstranslate.com/files/styles/avatar/public/avatar-default-u.png?itok=3fdQPvOS"}})],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card-text",{staticClass:"white--text"},[e("ul",[e("li",[e("b",[t._v("Name: ")]),t._v(" "+t._s(t.currentTranslator.firstName+" "+t.currentTranslator.lastName))]),e("li",[e("b",[t._v("Languages: ")]),t._v(t._s(t.currentTranslator.languages.toString()))])])])],1)],1)],1),e("v-card",{staticClass:"grey darken-3"},[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-card-text",{staticClass:"white--text"},[e("div",{staticStyle:{color:"#18ffff"}},[t._v(t._s(t.currentLanguage)+" translation")]),e("hr",{staticClass:"hr1 mb-5"}),e("h2",{staticClass:"mb-5"},[t._v(t._s(t.songInfo.title))]),t._l(t.songInfo.langObj[t.currentLanguage].lyrics,(function(a,n){return e("p",{key:n,class:{highlight:t.hover[n]},on:{mouseover:function(a){return t.hoverSelect(n)},mouseleave:function(a){return t.hoverDeselect(n)}}},[t._v(" "+t._s(a)+" ")])}))],2)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card-text",{staticClass:"white--text"},[e("div",{staticClass:"a"},[t._v(t._s(t.originalLanguage))]),e("hr",{staticClass:"hr1"}),e("br"),e("h2",{staticClass:"mb-5"},[t._v(" "+t._s(t.songInfo.title)+" ")]),t._l(t.songInfo.langObj[t.originalLanguage].lyrics,(function(a,n){return e("p",{key:n,class:{highlight:t.hover[n]},on:{mouseover:function(a){return t.hoverSelect(n)},mouseleave:function(a){return t.hoverDeselect(n)}}},[t._v(" "+t._s(a)+" ")])}))],2)],1)],1)],1),e("p",{staticClass:"white--text"},[t._v("Submitted by "),e("a",{staticClass:"a",attrs:{href:"#"}},[t._v(t._s(t.currentTranslator.firstName+" "+t.currentTranslator.lastName))]),t._v(" on Friday")])],1)],1)],1)},Et=[],Ot=(e("a434"),{name:"Display",data:function(){return{hover:[],songInfo:null,currentLanguage:null,originalLanguage:null,currentTranslator:null,loading:!0}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var a,e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={id:this.$route.params.id},et.a.get("https://lyrics-translate.herokuapp.com/getSongInfo",{params:a}).then((function(t){return e.songInfo=t.data["songInfo"],console.log(e.songInfo),e.originalLanguage=e.songInfo.originalLanguage,e.currentLanguage=e.songInfo.translations[0],console.log(e.originalLanguage),console.log(e.currentLanguage),console.log(e.songInfo.langObj),console.log(e.songInfo.langObj[e.originalLanguage]),console.log(e.songInfo.langObj[e.currentLanguage]),et.a.get("https://lyrics-translate.herokuapp.com/getTranslatorInfo/1")})).then((function(t){e.currentTranslator=t.data["currentTranslator"];for(var a=0;a<e.songInfo.langObj[e.currentLanguage].lyrics.length;a++)e.hover.push(!1);e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:{hoverSelect:function(t){this.hover.splice(t,1,!0)},hoverDeselect:function(t){this.hover.splice(t,1,!1)}}}),$t=Ot,Pt=(e("88a0"),e("b974")),Nt=Object(u["a"])($t,Rt,Et,!1,null,"a589bfde",null),Bt=Nt.exports;d()(Nt,{VCard:O["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:st["a"],VContainer:it["a"],VImg:ot["a"],VProgressCircular:lt["a"],VRow:ct["a"],VSelect:Pt["a"],VSpacer:L["a"]});var qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"container grey darken-3",attrs:{fluid:""}},[e("v-form",{model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"11"}},[e("v-card",{staticClass:"grey darken-1 pa-8"},[e("v-card-title",{staticClass:"white--text"},[e("h1",[t._v("Submit a New Translation")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-text-field",{staticClass:"grey darken-1",attrs:{required:"",dark:"",label:"Artist",rules:[function(t){return!!t||"Artist is required"}]},model:{value:t.artist,callback:function(a){t.artist=a},expression:"artist"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-text-field",{staticClass:"grey darken-1",attrs:{dark:"",label:"Song Name",rules:[function(t){return!!t||"Song name is required"}]},model:{value:t.song,callback:function(a){t.song=a},expression:"song"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-select",{staticClass:"grey darken-1",attrs:{dark:"",items:t.languages,label:"Select the original language",required:"",rules:[function(t){return!!t||"Original Language is required"}]},model:{value:t.originalLang,callback:function(a){t.originalLang=a},expression:"originalLang"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-select",{staticClass:"grey darken-1",attrs:{dark:"",items:t.languages,label:"Select the language you're translating",required:"",rules:[function(t){return!!t||"Translated Language is required"}]},model:{value:t.currentLang,callback:function(a){t.currentLang=a},expression:"currentLang"}})],1)],1)],1)],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"11"}},[e("v-card",{staticClass:"grey darken-1"},[e("v-card-title",{staticClass:"white--text pa-8"},[e("h1",[t._v("Lyrics for: "+t._s(t.song))])]),e("v-form",[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-card-title",{staticStyle:{color:"white","word-break":"normal"}},[t._v(t._s(t.originalLang))]),e("v-card-text",t._l(t.originalLyrics,(function(a,n){return e("v-text-field",{key:n,staticClass:"grey darken-1",attrs:{label:"Enter a line",dark:"",required:"",rules:[function(t){return!!t||"Line is required"}]},model:{value:t.originalLyrics[n],callback:function(a){t.$set(t.originalLyrics,n,a)},expression:"originalLyrics[i]"}})})),1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card-title",{staticStyle:{color:"white","word-break":"normal"}},[t._v(t._s(t.currentLang))]),e("v-card-text",t._l(t.currentLyrics,(function(a,n){return e("v-text-field",{key:n,staticClass:"grey darken-1",attrs:{label:"Enter a line",dark:"",required:"",rules:[function(t){return!!t||"Line is required"}]},model:{value:t.currentLyrics[n],callback:function(a){t.$set(t.currentLyrics,n,a)},expression:"currentLyrics[i]"}})})),1)],1)],1),e("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8",md:"3"}},[e("v-btn",{staticClass:"grey darken-1",attrs:{dark:""},on:{click:t.addLyric}},[t._v("Add Another Line ")])],1),e("v-col",{attrs:{cols:"8",md:"3"}},[e("v-btn",{staticClass:"grey darken-1",attrs:{dark:""},on:{click:t.removeLyric}},[t._v("Remove A Line ")])],1)],1),e("v-card-actions",{staticClass:"pa-8",attrs:{dark:""}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("div",t._g({},n),[e("v-btn",{staticClass:"grey darken-1",attrs:{disabled:!t.valid||t.originalLyrics.length<5,dark:""},on:{click:t.postSong}},[t._v("Submit")])],1)]}}])},[e("span",[t._v("Lyrics must have at least 5 lines")])])],1)],1)],1)],1)],1)],1)],1)},Ft=[],Mt={name:"Submit",data:function(){return{currentLyrics:[null],originalLyrics:[null],artist:null,song:null,currentLang:null,originalLang:null,numLines:1,valid:!0,languages:["Afrikaans","Albanian","Amharic","Arabic","Aramaic","Armenian","Azerbaijani","Basque","Belarusan","Bengali","Bosnian","Bulgarian","Burmese","Cantonese","Catalan","Chechen","Cherokee","Croatian","Czech","Danish","Dutch","English","Esperanto","Estonian","Finnish","French","Georgian","German","Greek","Haitian","Creole","Hawaiian","Hebrew","Hindi","Hungarian","Icelandic","Indonesian","Irish Gaelic","Italian","Japanese","Kazakh","Korean","Kurdish","Kyrgyz","Lao","Latin","Latvian","Lithuanian","Macedonian","Mandarin","Mongolian","Nahuatl","Norwegian","Persian","Polish","Portuguese","Punjabi","Quechua","Romanian","Russian","Rwanda","Samoan","Sanskrit","Serbian","Slovak","Slovene","Somali","Spanish","Swahili","Swedish","Tagalog","Tajiki","Tatar","Thai","Turkish","Ukrainian","Urdu","Uyghur","Uzbek","Vietnamese","Welsh","Yiddish","Yoruba","Yucatec","Zulu"]}},methods:{addLyric:function(){this.currentLyrics.splice(this.numLines,0,null),this.originalLyrics.splice(this.numLines,0,null),this.numLines++},removeLyric:function(){this.numLines--,this.currentLyrics.splice(this.numLines,1),this.originalLyrics.splice(this.numLines,1)},postSong:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,et.a.post("https://lyrics-translate.herokuapp.com/postLyrics",{title:this.song,artist:this.artist,originalLanguage:this.originalLang,translations:[this.currentLang],originalLyrics:this.originalLyrics,currentLyrics:this.currentLyrics});case 2:a=t.sent,e=a.data,this.$router.push("/display/".concat(e));case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}},Dt=Mt,zt=e("3a2f"),Ht=Object(u["a"])(Dt,qt,Ft,!1,null,null,null),Gt=Ht.exports;d()(Ht,{VBtn:f["a"],VCard:O["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:st["a"],VContainer:it["a"],VForm:Ct["a"],VRow:ct["a"],VSelect:Pt["a"],VTextField:V["a"],VTooltip:zt["a"]}),n["a"].use(G["a"]);var Kt=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/artists",name:"artists",component:vt},{path:"/songs",name:"songs",component:bt},{path:"/login",name:"login",component:Lt},{path:"/registration",name:"registration",component:It},{path:"/display/:id",name:"display",component:Bt},{path:"/submit",name:"submit",component:Gt}],Ut=new G["a"]({mode:"history",base:"/",routes:Kt}),Yt=Ut,Jt=e("f309");n["a"].use(Jt["a"]);var Qt=new Jt["a"]({}),Wt=e("a7fe"),Xt=e.n(Wt);n["a"].config.productionTip=!1,new n["a"]({router:Yt,vuetify:Qt,axios:et.a,VueAxios:Xt.a,render:function(t){return t(H)}}).$mount("#app")},"88a0":function(t,a,e){"use strict";var n=e("3981"),r=e.n(n);r.a},a767:function(t,a,e){"use strict";var n=e("aa62"),r=e.n(n);r.a},aa62:function(t,a,e){},cccb:function(t,a,e){"use strict";var n=e("4230"),r=e.n(n);r.a},eec9:function(t,a,e){},f8cb:function(t,a,e){"use strict";var n=e("1f2d"),r=e.n(n);r.a}});
//# sourceMappingURL=app.57a78a5e.js.map