webpackJsonp([1],{"9C21":function(e,a){},vFFd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Xxa5"),s=t.n(i),n=t("exGp"),r=t.n(n),o=t("gyMJ"),c={name:"WapChat",mounted:function(){this.$User.user?(this.group_id=this.$route.params.id,this.getGroupUser()):this.$router.push("/login")},data:function(){return{group_id:null,search_name:"",member_list:[],group_user_list:[{id:1,username:"xiaoxin",logo:"/static/images/mv1.jpg",type:"friend",nickname:"xiaoxin1",remark_name:"xiaoxin1"},{id:2,username:"xiaoxin1",logo:"/static/images/mv2.png",type:"friend",nickname:"xiaoxin2",remark_name:"xiaoxin2"},{id:3,username:"xiaoxin3",logo:"/static/images/mv3.jpg",type:"friend",nickname:"xiaoxin3",remark_name:"xiaoxin3"},{id:4,username:"xiaoxin4",logo:"/static/images/mv4.jpg",type:"friend",nickname:"xiaoxin4",remark_name:"xiaoxin4"},{id:5,username:"xiaoxin5",logo:"/static/images/mv5.jpeg",type:"friend",nickname:"xiaoxin5",remark_name:"xiaoxin5"}]}},methods:{getGroupUser:function(){var e=this;return r()(s.a.mark(function a(){var t,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={group_id:e.group_id},a.next=3,Object(o.p)(t);case 3:200===(i=a.sent).code?e.group_user_list=i.data:e.$Message.error(i.message);case 5:case"end":return a.stop()}},a,e)}))()},delGroupUser:function(){var e=this;return r()(s.a.mark(function a(){var t,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e.member_list),t={group_id:e.group_id,member_list:e.member_list},a.next=4,Object(o.k)(t);case 4:200===(i=a.sent).code?e.$router.go(-1):e.$Message.error(i.message);case 6:case"end":return a.stop()}},a,e)}))()},sendMessage:function(){var e={name:"xiaoxin",logo:"/static/images/xiaoxin.jpg",message:this.send_message};this.message_data[this.chat_active_id].push(e),this.send_message="",this.scrollAuto()}},sockets:{connect:function(){console.log("socket connected")},message:function(){console.log("返回"+val)}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wap-main"},[t("div",{staticClass:"wap-main-group"},[t("div",{staticClass:"wap-group-info-title"},[t("span",{staticClass:"wap-main-chat-title-back",on:{click:function(a){e.$router.go(-1)}}},[t("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),e._v(" "),t("span",{staticClass:"wap-main-chat-title-name"},[e._v("\n        选择联系人\n      ")]),e._v(" "),t("span",{staticStyle:{position:"absolute",right:"10px"}},[t("Button",{attrs:{type:"success",disabled:0===e.member_list.length,size:"small"},on:{click:e.delGroupUser}},[e._v("确定")])],1)]),e._v(" "),t("div",{staticClass:"wap-main-body-friend-search"},[t("Input",{attrs:{search:"",placeholder:"搜索",size:"large"},model:{value:e.search_name,callback:function(a){e.search_name=a},expression:"search_name"}})],1),e._v(" "),t("div",{staticClass:"wap-main-body-friend-body"},[t("CheckboxGroup",{model:{value:e.member_list,callback:function(a){e.member_list=a},expression:"member_list"}},[e._l(e.group_user_list,function(a,i){return a.remark_name.startsWith(e.search_name)?[t("div",{staticClass:"chat-item"},[t("div",{staticClass:"chat-img"},[t("img",{attrs:{src:a.logo}})]),e._v(" "),t("div",{staticClass:"chat-text"},[e._v("\n                "+e._s(a.remark_name)+"\n                "),t("div",{staticStyle:{display:"inline-block",position:"absolute",right:"10px"}},[t("Checkbox",{attrs:{label:a.id}})],1)])])]:e._e()})],2)],1)])])},staticRenderFns:[]};var l=t("VU/8")(c,m,!1,function(e){t("9C21")},"data-v-4b934188",null);a.default=l.exports}});
//# sourceMappingURL=1.9fad37b1eafe29607f50.js.map