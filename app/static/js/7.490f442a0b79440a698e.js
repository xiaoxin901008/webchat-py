webpackJsonp([7],{"vk+/":function(e,t){},zrbn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),n=a("exGp"),i=a.n(n),c=a("gyMJ"),o={name:"GroupUserAdd",mounted:function(){this.group_id=this.$route.params.id,this.getGroupUser(),this.getFriend()},data:function(){return{group_id:null,search_name:"",member_list:[],group_user_ids:[5],data_list:[],friend_list:[]}},methods:{getGroupUser:function(){var e=this;return i()(r.a.mark(function t(){var a,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={group_id:e.group_id},t.next=3,Object(c.p)(a);case 3:200===(s=t.sent).code?e.group_user_ids=s.data.map(function(e){return e.id}):e.$Message.error(s.message);case 5:case"end":return t.stop()}},t,e)}))()},getFriend:function(){var e=this;return i()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.m)();case 2:200===(a=t.sent).code?(e.friend_list=a.data,e.data_list=a.data):e.$Message.error(a.message);case 4:case"end":return t.stop()}},t,e)}))()},addGroupUser:function(){var e=this;return i()(r.a.mark(function t(){var a,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.member_list),a={group_id:e.group_id,member_list:e.member_list},t.next=4,Object(c.e)(a);case 4:200===(s=t.sent).code?e.$router.go(-1):e.$Message.error(s.message);case 6:case"end":return t.stop()}},t,e)}))()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wap-main"},[a("div",{staticClass:"wap-main-group"},[a("div",{staticClass:"wap-group-info-title"},[a("span",{staticClass:"wap-main-chat-title-back",on:{click:function(t){e.$router.go(-1)}}},[a("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),e._v(" "),a("span",{staticClass:"wap-main-chat-title-name"},[e._v("\n        选择联系人\n      ")]),e._v(" "),a("span",{staticStyle:{position:"absolute",right:"10px"}},[a("Button",{attrs:{type:"success",disabled:0===e.member_list.length,size:"small"},on:{click:e.addGroupUser}},[e._v("确定")])],1)]),e._v(" "),a("div",{staticClass:"wap-main-body-friend-search"},[a("Input",{attrs:{search:"",placeholder:"搜索",size:"large"},model:{value:e.search_name,callback:function(t){e.search_name=t},expression:"search_name"}})],1),e._v(" "),a("div",{staticClass:"wap-main-body-friend-body"},[a("CheckboxGroup",{model:{value:e.member_list,callback:function(t){e.member_list=t},expression:"member_list"}},[e._l(e.friend_list,function(t,s){return e.group_user_ids.indexOf(t.id)<0&(t.remark_name&&t.remark_name.startsWith(e.search_name)||t.nickname.startsWith(e.search_name))?[a("div",{staticClass:"chat-item"},[a("div",{staticClass:"chat-img"},[a("img",{attrs:{src:t.logo}})]),e._v(" "),a("div",{staticClass:"chat-text"},[e._v("\n                "+e._s(t.remark_name||t.nickname)+"\n                "),a("div",{staticStyle:{display:"inline-block",position:"absolute",right:"10px"}},[a("Checkbox",{attrs:{label:t.id}})],1)])])]:e._e()})],2)],1)])])},staticRenderFns:[]};var d=a("VU/8")(o,u,!1,function(e){a("vk+/")},"data-v-b4d5e768",null);t.default=d.exports}});
//# sourceMappingURL=7.490f442a0b79440a698e.js.map