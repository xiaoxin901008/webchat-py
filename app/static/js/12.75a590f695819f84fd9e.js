webpackJsonp([12],{"+wF8":function(t,e){},"5fZ6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),s=a("exGp"),c=a.n(s),r=a("gyMJ"),o={name:"Friend",mounted:function(){this.checkLogin(),this.getFriend()},data:function(){return{user:{},chatroom_active:!1,search_name:"",friend_list:[]}},methods:{checkLogin:function(){var t=this;return c()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.f)();case 2:200===(a=e.sent).code&&(t.user=a.data);case 4:case"end":return e.stop()}},e,t)}))()},toChat:function(){this.$router.push("/")},toGroup:function(){this.$router.push("/group")},toUser:function(){this.$router.push("/user")},clickFriend:function(t){this.$router.push("/friend_info/"+t)},getFriend:function(){var t=this;return c()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.m)();case 2:200===(a=e.sent).code?t.friend_list=a.data:t.$Message.error(a.message);case 4:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wap-main"},[a("div",{staticClass:"wap-main-title"},[a("div",{staticClass:"text"},[t._v("\n      在线聊天室\n      "),t.user.type<2?a("Icon",{attrs:{type:"md-arrow-dropdown",size:"24"},on:{click:function(e){t.chatroom_active=!t.chatroom_active}}}):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.chatroom_active,expression:"chatroom_active"}],staticClass:"wap-create-group-modal"},[a("ul",[a("li",{on:{click:function(e){t.$router.push("/group_add")}}},[t._v("创建群组")]),t._v(" "),a("li",{on:{click:function(e){t.$router.push("/friend_add")}}},[t._v("添加好友")])])])],1)]),t._v(" "),a("div",{staticClass:"wap-main-body",on:{click:function(e){t.chatroom_active=!1}}},[a("div",{staticClass:"wap-main-body-friend"},[a("div",{staticClass:"wap-main-body-friend-search"},[a("Input",{attrs:{search:"",placeholder:"搜索",size:"large"},model:{value:t.search_name,callback:function(e){t.search_name=e},expression:"search_name"}})],1),t._v(" "),a("div",{staticClass:"wap-main-body-friend-body"},[t._l(t.friend_list,function(e,i){return e.remark_name&&e.remark_name.startsWith(t.search_name)||e.nickname&&e.nickname.startsWith(t.search_name)?[a("div",{staticClass:"chat-item",on:{click:function(a){t.clickFriend(e.id)}}},[a("div",{staticClass:"chat-img"},[a("img",{attrs:{src:e.logo}})]),t._v(" "),a("div",{staticClass:"chat-text"},[t._v("\n              "+t._s(e.remark_name||e.nickname)+"\n            ")])])]:t._e()})],2)])]),t._v(" "),a("div",{staticClass:"wap-main-bottom"},[a("ul",[a("li",{staticClass:"wap-main-bottom-chat",on:{click:t.toChat}},[a("div",[a("Icon",{attrs:{type:"ios-chatbubbles",size:"32"}})],1),t._v(" "),a("p",[t._v("聊天")])]),t._v(" "),a("li",{staticClass:"active",staticStyle:{width:"23%"}},[a("div",[a("Icon",{attrs:{type:"md-contacts",size:"32"}})],1),t._v(" "),a("p",[t._v("\n          好友\n        ")])]),t._v(" "),a("li",{staticStyle:{width:"23%"},on:{click:t.toGroup}},[a("div",[a("Icon",{attrs:{type:"ios-people",size:"34"}})],1),t._v(" "),a("p",[t._v("\n          群聊\n        ")])]),t._v(" "),a("li",{staticClass:"wap-main-bottom-my",on:{click:t.toUser}},[a("div",[a("Icon",{attrs:{type:"md-person",size:"32"}})],1),t._v(" "),a("p",[t._v("我")])])])])])},staticRenderFns:[]};var d=a("VU/8")(o,u,!1,function(t){a("+wF8")},null,null);e.default=d.exports}});
//# sourceMappingURL=12.75a590f695819f84fd9e.js.map