webpackJsonp([6],{"+Nh0":function(e,t){},AXd7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),o=n.n(a),r=n("exGp"),s=n.n(r),c=n("gyMJ"),i={name:"GroupAdd",mounted:function(){},data:function(){return{new_group_name:"",new_group_logo:""}},methods:{createGroup:function(){var e=this;return s()(o.a.mark(function t(){var n,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.new_group_name&&e.new_group_name.trim()){t.next=3;break}return e.$Message.warning("群组名称不能为空！"),t.abrupt("return");case 3:if(e.new_group_logo){t.next=6;break}return e.$Message.warning("请选择头像！"),t.abrupt("return");case 6:return n={group_name:e.new_group_name,group_logo:e.new_group_logo},t.next=9,Object(c.d)(n);case 9:200===(a=t.sent).code?(e.$Message.success("群组创建成功！"),e.$router.push("/group")):e.$Message.error(a.message);case 11:case"end":return t.stop()}},t,e)}))()},clickImage:function(){document.getElementById("send-image").click()},uploadImage:function(){var e=this;return s()(o.a.mark(function t(){var n,a,r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("send-image"),a=n.files[0],(r=new FormData).append("file",a),t.next=6,Object(c.z)(r);case 6:s=t.sent,console.log(s),200===s.code&&(e.new_group_logo=e.$Server+s.data.url);case 9:case"end":return t.stop()}},t,e)}))()}},sockets:{connect:function(){console.log("socket connected")},message:function(){console.log("返回"+val)}},filters:{},watch:{}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wap-main"},[n("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"send-image"},on:{change:e.uploadImage}}),e._v(" "),n("div",{staticClass:"wap-main-group"},[n("div",{staticClass:"wap-group-info-title"},[n("span",{staticClass:"wap-main-chat-title-back",on:{click:function(t){e.$router.go(-1)}}},[n("Icon",{attrs:{type:"ios-arrow-back",size:"18"}})],1),e._v(" "),n("span",{staticClass:"wap-main-chat-title-name"},[e._v("\n        创建群聊\n      ")])]),e._v(" "),n("div",{staticClass:"wap-group-body"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[e.new_group_logo?e._e():n("Icon",{staticClass:"message-file",attrs:{type:"ios-add-circle-outline",size:"100"},on:{click:e.clickImage}}),e._v(" "),e.new_group_logo?n("img",{staticStyle:{height:"200px",width:"200px","border-radius":"50%"},attrs:{src:e.new_group_logo,alt:""},on:{click:e.clickImage}}):e._e()],1),e._v(" "),n("Input",{attrs:{placeholder:"请输入群组名称",width:"100",autofocus:""},model:{value:e.new_group_name,callback:function(t){e.new_group_name=t},expression:"new_group_name"}})],1),e._v(" "),n("div",{staticClass:"wap-group-add-btn"},[n("div",{staticClass:"btn-item"},[n("Button",{attrs:{long:"",type:"primary"},on:{click:e.createGroup}},[e._v("确定")])],1),e._v(" "),n("div",{staticClass:"btn-item"},[n("Button",{attrs:{long:""},on:{click:function(t){e.$router.go(-1)}}},[e._v("取消")])],1)])])])},staticRenderFns:[]};var l=n("VU/8")(i,u,!1,function(e){n("+Nh0")},"data-v-e97f039e",null);t.default=l.exports}});
//# sourceMappingURL=6.bd23b14415a6d1f85efc.js.map