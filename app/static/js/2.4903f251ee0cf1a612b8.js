webpackJsonp([2],{"1kS7":function(e,t){t.f=Object.getOwnPropertySymbols},"9bp8":function(e,t){},Dd8w:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("woOf"),s=(i=n)&&i.__esModule?i:{default:i};t.default=s.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}},NpIQ:function(e,t){t.f={}.propertyIsEnumerable},R4wc:function(e,t,a){var i=a("kM2E");i(i.S+i.F,"Object",{assign:a("To3L")})},To3L:function(e,t,a){"use strict";var i=a("lktj"),n=a("1kS7"),s=a("NpIQ"),r=a("sB3e"),l=a("MU5D"),o=Object.assign;e.exports=!o||a("S82l")(function(){var e={},t={},a=Symbol(),i="abcdefghijklmnopqrst";return e[a]=7,i.split("").forEach(function(e){t[e]=e}),7!=o({},e)[a]||Object.keys(o({},t)).join("")!=i})?function(e,t){for(var a=r(e),o=arguments.length,c=1,u=n.f,m=s.f;o>c;)for(var g,f=l(arguments[c++]),d=u?i(f).concat(u(f)):i(f),h=d.length,p=0;h>p;)m.call(f,g=d[p++])&&(a[g]=f[g]);return a}:o},V3tA:function(e,t,a){a("R4wc"),e.exports=a("FeBl").Object.assign},ePsb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s=a("Xxa5"),r=a.n(s),l=a("exGp"),o=a.n(l),c=a("gyMJ"),u={name:"WapChat",mounted:function(){if(this.$User.user){var e=this.$route.params.chat;if(e)this.addChat(e);else{var t=this.$route.query.id;this.getChat(t),this.getChatMessage(t)}this.in_chat(),this.scrollAuto()}else this.$router.push("/login")},data:function(){return{chat_id:null,chat:{id:1,name:"test",logo:"/static/images/admin.jpg",type:"group",chat_obj_id:1},send_message:"",send_image:null,emoji_active:!1,active_frame:null,message_data:[],emoji_list:[{url:"1.gif",name:"#1"},{url:"2.gif",name:"#2"},{url:"3.gif",name:"#3"},{url:"4.gif",name:"#4"},{url:"5.gif",name:"#5"},{url:"6.gif",name:"#6"},{url:"7.gif",name:"#7"},{url:"8.gif",name:"#8"},{url:"9.gif",name:"#9"},{url:"10.gif",name:"#10"},{url:"11.gif",name:"#11"},{url:"12.gif",name:"#12"},{url:"13.gif",name:"#13"},{url:"14.gif",name:"#14"},{url:"15.gif",name:"#15"},{url:"16.gif",name:"#16"},{url:"17.gif",name:"#17"},{url:"18.gif",name:"#18"},{url:"19.gif",name:"#19"},{url:"20.gif",name:"#20"},{url:"21.gif",name:"#21"},{url:"22.gif",name:"#22"},{url:"23.gif",name:"#23"},{url:"24.gif",name:"#24"},{url:"25.gif",name:"#25"},{url:"26.gif",name:"#26"},{url:"27.gif",name:"#27"},{url:"28.gif",name:"#28"},{url:"29.gif",name:"#29"},{url:"30.gif",name:"#30"},{url:"31.gif",name:"#31"},{url:"32.gif",name:"#32"},{url:"33.gif",name:"#33"},{url:"34.gif",name:"#34"},{url:"35.gif",name:"#35"},{url:"36.gif",name:"#36"},{url:"37.gif",name:"#37"},{url:"38.gif",name:"#38"},{url:"39.gif",name:"#39"},{url:"40.gif",name:"#40"},{url:"41.gif",name:"#41"},{url:"42.gif",name:"#42"},{url:"43.gif",name:"#43"},{url:"44.gif",name:"#44"},{url:"45.gif",name:"#45"},{url:"46.gif",name:"#46"},{url:"47.gif",name:"#47"},{url:"48.gif",name:"#48"},{url:"49.gif",name:"#49"},{url:"50.gif",name:"#50"},{url:"51.gif",name:"#51"},{url:"52.gif",name:"#52"},{url:"53.gif",name:"#53"},{url:"54.gif",name:"#54"},{url:"55.gif",name:"#55"},{url:"56.gif",name:"#56"},{url:"57.gif",name:"#57"},{url:"58.gif",name:"#58"},{url:"59.gif",name:"#59"},{url:"60.gif",name:"#60"},{url:"61.gif",name:"#61"},{url:"62.gif",name:"#62"},{url:"63.gif",name:"#63"},{url:"64.gif",name:"#64"},{url:"65.gif",name:"#65"},{url:"66.gif",name:"#66"},{url:"67.gif",name:"#67"},{url:"68.gif",name:"#68"},{url:"69.gif",name:"#69"},{url:"70.gif",name:"#70"},{url:"71.gif",name:"#71"},{url:"72.gif",name:"#72"},{url:"73.gif",name:"#73"},{url:"74.gif",name:"#74"},{url:"75.gif",name:"#75"},{url:"76.gif",name:"#76"},{url:"77.gif",name:"#77"},{url:"78.gif",name:"#78"},{url:"79.gif",name:"#79"},{url:"80.gif",name:"#80"},{url:"81.gif",name:"#81"},{url:"82.gif",name:"#82"},{url:"83.gif",name:"#83"},{url:"84.gif",name:"#84"},{url:"85.gif",name:"#85"},{url:"86.gif",name:"#86"},{url:"87.gif",name:"#87"},{url:"88.gif",name:"#88"},{url:"89.gif",name:"#89"},{url:"90.gif",name:"#90"},{url:"91.gif",name:"#91"},{url:"92.gif",name:"#92"},{url:"93.gif",name:"#93"},{url:"94.gif",name:"#94"},{url:"95.gif",name:"#95"},{url:"96.gif",name:"#96"},{url:"97.gif",name:"#97"},{url:"98.gif",name:"#98"},{url:"99.gif",name:"#99"},{url:"100.gif",name:"#100"},{url:"101.gif",name:"#101"}]}},methods:{clickSendMessage:function(){},getChat:function(e){var t=this;return o()(r.a.mark(function a(){var i,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i={chat_id:e},a.next=3,Object(c.l)(i);case 3:n=a.sent,console.log(n),200===n.code?t.chat=n.data:t.$Message.error(n.message);case 6:case"end":return a.stop()}},a,t)}))()},getChatMessage:function(e){var t=this;return o()(r.a.mark(function a(){var i,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i={chat_id:e},a.next=3,Object(c.m)(i);case 3:n=a.sent,console.log(n),200===n.code?t.message_data=n.data:t.$Message.error(n.message);case 6:case"end":return a.stop()}},a,t)}))()},sendMessage:function(){var e={name:"xiaoxin",logo:"/static/images/xiaoxin.jpg",message:this.send_message};this.message_data[this.chat_id].push(e),this.send_message="",this.scrollAuto()},addChat:function(e){var t=this;return o()(r.a.mark(function a(){var i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.d)(e);case 2:i=a.sent,console.log(i),200===i.code?t.chat=i.data:t.$Message.warning(i.message);case 5:case"end":return a.stop()}},a,t)}))()},chatMore:function(){console.log(this.chat),2===this.chat.type||"2"===this.chat.type?this.$router.push("/group_info/"+this.chat.chat_obj_id):this.$router.push("/friend_info/"+this.chat.chat_obj_id)},clickEmoji:function(e){var t=this;this.send_message+='<img src="/static/images/emoji/'+e.url+'">',this.emoji_active=!1,setTimeout(function(){t.keepLastIndex(document.getElementById("send-message"))},5)},changeMessage:function(e){var t=this,a=e.target;console.log(a.innerHTML),console.log(a),this.send_message=a.innerHTML.trim(),setTimeout(function(){t.keepLastIndex(a)},5)},scrollAuto:function(){this.$nextTick(function(){var e=document.getElementById("chat-body");e.scrollTop=e.scrollHeight})},keepLastIndex:function(e){var t=null;window.getSelection?(e.focus(),(t=window.getSelection()).selectAllChildren(e),t.collapseToEnd()):document.selection&&((t=document.body.createTextRange()).moveToElementText(e),t.collapse(!1),t.select())},clickImage:function(){document.getElementById("send-image").click()},uploadImage:function(){var e=this;return o()(r.a.mark(function t(){var a,i,n,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.getElementById("send-image"),i=a.files[0],(n=new FormData).append("file",i),t.next=6,Object(c.v)(n);case 6:s=t.sent,console.log(s),200===s.code&&(e.common_logo=s.data.url),e.create_group_modal&&(e.new_group_logo=e.$Server+e.common_logo);case 10:case"end":return t.stop()}},t,e)}))()},send:function(e){console.log(this.chat);var t={chat_id:this.chat.id,message:this.send_message,user_data:this.$User.user};this.$socket.emit("message",t),this.message_data.push(n()({},this.$User.user,{message:this.send_message})),this.scrollAuto()},in_chat:function(){this.$socket.emit("in_chat",this.chat.id)},out_chat:function(){this.$socket.emit("out_chat",this.chat.id)}},destroyed:function(){this.out_chat()},sockets:{connect:function(){console.log("socket connected")},message:function(e){console.log(e.nickname),this.message_data.push(e),this.scrollAuto(),console.log("返回"+e)}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wap-main"},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"send-image"},on:{change:e.uploadImage}}),e._v(" "),a("div",{staticClass:"wap-main-chat"},[a("div",{staticClass:"wap-main-chat-title"},[a("span",{staticClass:"wap-main-chat-title-back",on:{click:function(t){e.$router.push("/")}}},[a("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),e._v(" "),a("span",{staticClass:"wap-main-chat-title-name"},[e._v("\n        "+e._s(e.chat.name)+"\n      ")]),e._v(" "),a("span",{staticClass:"wap-main-chat-title-more"},[a("Icon",{attrs:{type:"ios-more",size:"20"},on:{click:e.chatMore}})],1)]),e._v(" "),a("div",{staticClass:"wap-main-chat-body",attrs:{id:"chat-body"}},[e._l(e.message_data,function(t){return[t.id===e.$User.user.id?[a("div",{staticClass:"message-item-self"},[a("div",{staticClass:"wap-chat-text"},[a("span",{staticStyle:{"text-align":"left",display:"inline-block"},domProps:{innerHTML:e._s(t.message)}})]),e._v(" "),a("div",{staticClass:"wap-chat-img"},[a("img",{attrs:{src:t.logo}})])])]:[a("div",{staticClass:"message-item"},[a("div",{staticClass:"wap-chat-img"},[a("img",{attrs:{src:t.logo}})]),e._v(" "),a("div",{staticClass:"wap-chat-text"},[a("span",{domProps:{innerHTML:e._s(t.message)}})])])]]})],2),e._v(" "),a("div",{staticClass:"wap-main-chat-bottom"},[a("div",{staticStyle:{"text-align":"left",height:"30px","line-height":"30px","padding-left":"5px",float:"left"}},[a("Icon",{staticClass:"message-file",attrs:{type:"ios-happy-outline",size:"22"},on:{click:function(t){e.emoji_active=!e.emoji_active}}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.emoji_active,expression:"emoji_active"}],staticClass:"emoji"},[e._l(e.emoji_list,function(t){return[a("img",{attrs:{src:"/static/images/emoji/"+t.url,alt:t.name},on:{click:function(a){e.clickEmoji(t)}}})]})],2),e._v(" "),a("Icon",{staticClass:"message-file",attrs:{type:"md-images",size:"22"},on:{click:e.clickImage}})],1),e._v(" "),a("div",{staticStyle:{float:"left",width:"68%",left:"3px"}},[a("div",{staticClass:"send-message",attrs:{contentEditable:"true",id:"send-message"},domProps:{innerHTML:e._s(e.send_message)},on:{input:e.changeMessage}})]),e._v(" "),a("Button",{staticStyle:{float:"left",left:"3px"},attrs:{size:"small",type:"primary"},on:{click:e.send}},[e._v("发送")])],1),e._v(" "),a("div",{staticClass:"frame-btn",on:{click:function(t){e.active_frame=!0}}},[a("Icon",{attrs:{type:"logo-vimeo",size:"20"}})],1)]),e._v(" "),e.active_frame?a("div",{staticClass:"frame-div"},[a("div",{staticStyle:{position:"absolute",color:"#57a3f3",top:"20px",left:"2px"},on:{click:function(t){e.active_frame=!1}}},[a("Icon",{attrs:{type:"ios-undo",size:"20"}})],1),e._v(" "),a("iframe",{staticStyle:{width:"100%",height:"100%",background:"#fafafa"},attrs:{src:"http://www.baidu.com",frameborder:"0"}})]):e._e()])},staticRenderFns:[]};var g=a("VU/8")(u,m,!1,function(e){a("9bp8")},"data-v-14067f16",null);t.default=g.exports},woOf:function(e,t,a){e.exports={default:a("V3tA"),__esModule:!0}}});
//# sourceMappingURL=2.4903f251ee0cf1a612b8.js.map