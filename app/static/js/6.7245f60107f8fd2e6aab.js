webpackJsonp([6],{"N+LV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),n=a("exGp"),i=a.n(n),o=a("gyMJ"),c={name:"GroupAdmin",mounted:function(){this.group_id=this.$route.params.id,this.getGroupUser()},data:function(){return{group_id:null,search_name:"",member_list:[],group_user_list:[]}},methods:{getGroupUser:function(){var t=this;return i()(r.a.mark(function e(){var a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={group_id:t.group_id},e.next=3,Object(o.o)(a);case 3:200===(s=e.sent).code?t.group_user_list=s.data:t.$Message.error(s.message);case 5:case"end":return e.stop()}},e,t)}))()},delAdmin:function(t){var e=this;return i()(r.a.mark(function a(){var s,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s={group_id:e.group_id,to_user_id:t,group_type:2},a.next=3,Object(o.t)(s);case 3:200===(n=a.sent).code?e.getGroupUser():e.$Message.error(n.message);case 5:case"end":return a.stop()}},a,e)}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wap-main"},[a("div",{staticClass:"wap-main-group"},[a("div",{staticClass:"wap-group-info-title"},[a("span",{staticClass:"wap-main-chat-title-back",on:{click:function(e){t.$router.go(-1)}}},[a("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),t._v(" "),a("span",{staticClass:"wap-main-chat-title-name"},[t._v("\n        管理员列表\n      ")]),t._v(" "),a("span",{staticStyle:{position:"absolute",right:"10px"}},[a("Button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.$router.push("/group_admin_add/"+t.group_id)}}},[t._v("添加")])],1)]),t._v(" "),a("div",{staticClass:"wap-main-body-friend-search"},[a("Input",{attrs:{search:"",placeholder:"搜索",size:"large"},model:{value:t.search_name,callback:function(e){t.search_name=e},expression:"search_name"}})],1),t._v(" "),a("div",{staticClass:"wap-main-body-friend-body"},[t._l(t.group_user_list,function(e){return 1===e.type&e.remark_name.startsWith(t.search_name)?[a("div",{staticClass:"chat-item"},[a("div",{staticClass:"chat-img"},[a("img",{attrs:{src:e.logo}})]),t._v(" "),a("div",{staticClass:"chat-text"},[t._v("\n                "+t._s(e.remark_name)+"\n                "),a("div",{staticStyle:{display:"inline-block",position:"absolute",right:"10px"}},[a("Icon",{staticStyle:{color:"orangered","font-weight":"bold"},attrs:{type:"ios-remove-circle-outline",size:"20"},on:{click:function(a){t.delAdmin(e.id)}}})],1)])])]:t._e()})],2)])])},staticRenderFns:[]};var p=a("VU/8")(c,u,!1,function(t){a("THpg")},"data-v-4e4e1816",null);e.default=p.exports},THpg:function(t,e){}});
//# sourceMappingURL=6.7245f60107f8fd2e6aab.js.map