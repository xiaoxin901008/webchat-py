webpackJsonp([17],{brs8:function(e,t){},tVJf:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Xxa5"),r=s.n(a),n=s("exGp"),i=s.n(n),c=s("gyMJ"),o={name:"GroupUserDel",mounted:function(){this.group_id=this.$route.params.id,this.getGroupUser()},data:function(){return{user:{},group_id:null,search_name:"",member_list:[],group_user_list:[]}},methods:{getGroupUser:function(){var e=this;return i()(r.a.mark(function t(){var s,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={group_id:e.group_id},t.next=3,Object(c.p)(s);case 3:a=t.sent,console.log(a),200===a.code?e.group_user_list=a.data:e.$Message.error(a.message);case 6:case"end":return t.stop()}},t,e)}))()},delGroupUser:function(e){var t=this;return i()(r.a.mark(function s(){var a,n;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a={group_id:t.group_id,to_user_id:e},s.next=3,Object(c.j)(a);case 3:n=s.sent,console.log(n),200===n.code?(t.$Message.success("用户删除成功"),t.$router.go(-1)):t.$Message.error(n.message);case 6:case"end":return s.stop()}},s,t)}))()}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wap-main"},[s("div",{staticClass:"wap-main-group"},[s("div",{staticClass:"wap-group-info-title"},[s("span",{staticClass:"wap-main-chat-title-back",on:{click:function(t){e.$router.go(-1)}}},[s("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),e._v(" "),s("span",{staticClass:"wap-main-chat-title-name"},[e._v("\n        选择联系人\n      ")])]),e._v(" "),s("div",{staticClass:"wap-main-body-friend-search"},[s("Input",{attrs:{search:"",placeholder:"搜索",size:"large"},model:{value:e.search_name,callback:function(t){e.search_name=t},expression:"search_name"}})],1),e._v(" "),s("div",{staticClass:"wap-main-body-friend-body"},[e._l(e.group_user_list,function(t,a){return[t.nickname.startsWith(e.search_name)&&t.nickname!==e.user.nickname?s("div",{staticClass:"chat-item",on:{click:function(s){e.delGroupUser(t.id)}}},[s("div",{staticClass:"chat-img"},[s("img",{attrs:{src:t.logo}})]),e._v(" "),s("div",{staticClass:"chat-text"},[e._v("\n                "+e._s(t.nickname)+"\n              ")])]):e._e()]})],2)])])},staticRenderFns:[]};var l=s("VU/8")(o,u,!1,function(e){s("brs8")},"data-v-10645805",null);t.default=l.exports}});
//# sourceMappingURL=17.9ab7396ee8fe2d3811d2.js.map