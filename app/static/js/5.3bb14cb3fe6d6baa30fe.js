webpackJsonp([5],{M4iv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Xxa5"),a=i.n(s),c=i("exGp"),n=i.n(c),o=i("gyMJ"),r={name:"Wap",mounted:function(){this.$User.user?(this.getChat(),this.in_chat_list()):this.$router.push("/login")},data:function(){return{chatroom_active:!1,chat_delete_modal:"",Loop:null,chat_list:[]}},methods:{toFriend:function(){this.$router.push("/friend")},toGroup:function(){this.$router.push("/group")},toUser:function(){this.$router.push("/user")},getChat:function(){var t=this;return n()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.l)();case 2:i=e.sent,console.log(i),200===i.code?t.chat_list=i.data:t.$Message.error(i.message);case 5:case"end":return e.stop()}},e,t)}))()},touchStart:function(t){var e=this;this.Loop=setTimeout(function(){console.log("start.........",t),e.chat_delete_modal=t},500)},touchEnd:function(){clearTimeout(this.Loop)},delChat:function(t){var e=this;return n()(a.a.mark(function i(){var s;return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return s={chat_id:t.id},i.next=3,Object(o.h)(s);case 3:200===i.sent.code&&e.getChat();case 5:case"end":return i.stop()}},i,e)}))()},changeChat:function(t){this.$router.push({path:"/chat/",query:{id:t}})},in_chat_list:function(){this.$socket.emit("in_chat_list")},out_chat_list:function(){this.$socket.emit("out_chat_list")}},destroyed:function(){this.out_chat_list()},sockets:{connect:function(){console.log("socket connected")},message:function(t){console.log(t);var e=this.chat_list.filter(function(e){return e.id===t.id})[0],i=this.chat_list.indexOf(e);this.chat_list.splice(i,1),this.chat_list.unshift(t)}},filters:{}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wap-main"},[i("div",{staticClass:"wap-main-title"},[i("div",{staticClass:"text"},[t._v("\n      在线聊天室\n      "),t.$User.user.type<2?i("Icon",{attrs:{type:"md-arrow-dropdown",size:"24"},on:{click:function(e){t.chatroom_active=!t.chatroom_active}}}):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.chatroom_active,expression:"chatroom_active"}],staticClass:"wap-create-group-modal"},[i("ul",[i("li",{on:{click:function(e){t.$router.push("/group_add")}}},[t._v("创建群组")]),t._v(" "),i("li",{on:{click:function(e){t.$router.push("/friend_add")}}},[t._v("添加好友")])])])],1)]),t._v(" "),i("div",{staticClass:"wap-main-body",on:{click:function(e){t.chatroom_active=t.chat_delete_modal=!1}}},[i("div",{staticClass:"wap-main-body-message"},[t._l(t.chat_list,function(e){return[i("div",{staticClass:"chat-item",on:{click:function(i){t.changeChat(e.id)},touchstart:function(i){t.touchStart(e.id)},touchend:t.touchEnd}},[i("div",{staticClass:"chat-img"},[i("img",{attrs:{src:e.logo}})]),t._v(" "),i("div",{staticClass:"chat-text"},[i("div",{staticClass:"chat-text-top"},[i("span",{staticClass:"chat-text-name"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"chat-text-time"},[t._v(t._s(e.update_time))])]),t._v(" "),i("div",{staticClass:"chat-text-message",domProps:{innerHTML:t._s(e.message)}})]),t._v(" "),t.chat_delete_modal===e.id?i("div",{staticClass:"chat-item-modal"},[i("p",{on:{click:function(i){t.delChat(e)}}},[t._v("删除该聊天")])]):t._e()])]})],2)]),t._v(" "),i("div",{staticClass:"wap-main-bottom"},[i("ul",[i("li",{staticClass:"wap-main-bottom-chat active"},[i("div",[i("Icon",{attrs:{type:"ios-chatbubbles",size:"32"}})],1),t._v(" "),i("p",[t._v("聊天")])]),t._v(" "),i("li",{staticStyle:{width:"23%"},on:{click:t.toFriend}},[i("div",[i("Icon",{attrs:{type:"md-contacts",size:"32"}})],1),t._v(" "),i("p",[t._v("\n          好友\n        ")])]),t._v(" "),i("li",{staticStyle:{width:"23%"},on:{click:t.toGroup}},[i("div",[i("Icon",{attrs:{type:"ios-people",size:"34"}})],1),t._v(" "),i("p",[t._v("\n          群聊\n        ")])]),t._v(" "),i("li",{staticClass:"wap-main-bottom-my",on:{click:t.toUser}},[i("div",[i("Icon",{attrs:{type:"md-person",size:"32"}})],1),t._v(" "),i("p",[t._v("我")])])])])])},staticRenderFns:[]};var l=i("VU/8")(r,u,!1,function(t){i("hjj2")},null,null);e.default=l.exports},hjj2:function(t,e){}});
//# sourceMappingURL=5.3bb14cb3fe6d6baa30fe.js.map