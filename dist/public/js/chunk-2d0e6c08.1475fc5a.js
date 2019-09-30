(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6c08"],{"99a3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{name:"menuList"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-s-order",staticStyle:{"margin-right":"5px"}}),e._v(e._s(e.$t("forms.menuList")))]),n("el-row",{attrs:{gutter:16}},[n("el-col",{staticStyle:{"min-width":"300px","margin-bottom":"16px"},attrs:{lg:{span:9}}},[n("el-card",[n("div",{staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],staticStyle:{"margin-right":"16px","min-height":"100px"},attrs:{data:e.menuTreeData,"default-expand-all":!0,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,a=t.data;return n("span",{staticClass:"config-tree-node"},[a.isApp?n("span",[e._v(e._s(r.label))]):n("span",{on:{click:function(t){return e.menuClick(a)}}},[n("i",{class:a.iconType,staticStyle:{"margin-right":"5px"}}),e._v(e._s(r.label))]),n("span",[a.isApp?e._e():n("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-minus",loading:e.treeLoading},on:{click:function(t){return e.removeMenu(r,a)}}}),n("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-plus",loading:e.treeLoading},on:{click:function(t){return e.appendMenu(a)}}})],1)])}}])})],1)])],1),n("el-col",{directives:[{name:"show",rawName:"v-show",value:e.currMenu.id&&""!==e.currMenu.id,expression:"currMenu.id&&currMenu.id!==''"}],staticStyle:{"margin-bottom":"16px"},attrs:{lg:{span:15}}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.currMenuFullPath))]),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"menuEditForm",attrs:{size:"mini",model:e.menuEditForm,rules:e.ruleMenuEditForm,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",[n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.name"),prop:"name"}},[n("el-input",{attrs:{disabled:e.treeLoading,placeholder:e.$t("forms.pleaseEnter")+e.$t("forms.name")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSaveMenu(t)}},model:{value:e.menuEditForm.name,callback:function(t){e.$set(e.menuEditForm,"name",t)},expression:"menuEditForm.name"}})],1)],1),n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.iconType"),prop:"iconType"}},[n("el-input",{attrs:{disabled:e.treeLoading,placeholder:e.$t("forms.pleaseEnter")+e.$t("forms.iconType")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSaveMenu(t)}},model:{value:e.menuEditForm.iconType,callback:function(t){e.$set(e.menuEditForm,"iconType",t)},expression:"menuEditForm.iconType"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.parent"),prop:"menuParentArray"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.menuCascaderData,disabled:e.treeLoading,props:{checkStrictly:!0,value:"id"}},model:{value:e.menuEditForm.menuParentArray,callback:function(t){e.$set(e.menuEditForm,"menuParentArray",t)},expression:"menuEditForm.menuParentArray"}})],1)],1),n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.path"),prop:"path"}},[n("el-input",{attrs:{disabled:e.treeLoading,placeholder:e.$t("forms.pleaseEnter")+e.$t("forms.path")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSaveMenu(t)}},model:{value:e.menuEditForm.path,callback:function(t){e.$set(e.menuEditForm,"path",t)},expression:"menuEditForm.path"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.openType"),prop:"openType"}},[n("el-select",{attrs:{disabled:e.treeLoading,value:""},model:{value:e.menuEditForm.openType,callback:function(t){e.$set(e.menuEditForm,"openType",t)},expression:"menuEditForm.openType"}},e._l(e.openType,function(e){return n("el-option",{key:"openType-"+e.value,attrs:{value:e.value,label:e.label}})}),1)],1)],1),n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.sort"),prop:"sort"}},[n("el-input-number",{staticStyle:{width:"100%","max-width":"150px"},attrs:{disabled:e.treeLoading,min:0,placeholder:e.$t("forms.pleaseEnter")+e.$t("forms.sort")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSaveMenu(t)}},model:{value:e.menuEditForm.sort,callback:function(t){e.$set(e.menuEditForm,"sort",t)},expression:"menuEditForm.sort"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.enabled"),prop:"enabled",required:!0}},[n("el-switch",{attrs:{disabled:e.treeLoading},model:{value:e.menuEditForm.enabled,callback:function(t){e.$set(e.menuEditForm,"enabled",t)},expression:"menuEditForm.enabled"}})],1)],1)],1),n("el-form-item",{attrs:{label:e.$t("forms.roleList")}},[n("el-transfer",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],attrs:{data:e.optionalMenuRoles,filterable:!0,props:{key:"id"},titles:[e.$t("forms.optional"),e.$t("forms.selected")],"button-texts":[e.$t("forms.buttons.cancel"),e.$t("forms.buttons.select")]},on:{change:e.handleMenuRoleListChange},model:{value:e.menuEditForm.roleIds,callback:function(t){e.$set(e.menuEditForm,"roleIds",t)},expression:"menuEditForm.roleIds"}})],1),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"info",loading:e.treeLoading},on:{click:e.doResetMenu}},[e._v("\n                "+e._s(e.$t("forms.buttons.reset"))+"\n              ")]),n("el-button",{attrs:{type:"primary",loading:e.treeLoading},on:{click:e.doSaveMenu}},[e._v("\n                "+e._s(e.$t("forms.buttons.submit"))+"\n              ")])],1)],1)],1)],1)],1)],1),n("el-tab-pane",{attrs:{name:"moduleFuncList"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-s-grid",staticStyle:{"margin-right":"5px"}}),e._v(e._s(e.$t("forms.moduleFuncList")))]),n("el-row",{attrs:{gutter:16}},[n("el-col",{staticStyle:{"min-width":"300px","margin-bottom":"16px"},attrs:{lg:{span:9}}},[n("el-card",[n("div",{staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],staticStyle:{"margin-right":"16px","min-height":"100px"},attrs:{data:e.moduleFuncTreeData,"default-expand-all":!0,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,a=t.data;return n("span",{staticClass:"config-tree-node"},[a.isApp?n("span",[e._v(e._s(r.label))]):n("span",{on:{click:function(t){return e.moduleFuncClick(a)}}},[e._v(e._s(r.label))]),n("span",[a.isApp?e._e():n("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-minus",loading:e.treeLoading},on:{click:function(t){return e.removeModuleFunc(r,a)}}}),n("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-plus",loading:e.treeLoading},on:{click:function(t){return e.appendModuleFunc(a)}}})],1)])}}])})],1)])],1),n("el-col",{directives:[{name:"show",rawName:"v-show",value:e.currModuleFunc.id&&""!==e.currModuleFunc.id,expression:"currModuleFunc.id&&currModuleFunc.id!==''"}],staticStyle:{"margin-bottom":"16px"},attrs:{lg:{span:15}}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.currModuleFuncFullPath))]),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"moduleFuncEditForm",attrs:{size:"mini",model:e.moduleFuncEditForm,rules:e.ruleModuleFuncEditForm,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",[n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.name"),prop:"name"}},[n("el-input",{attrs:{disabled:e.treeLoading,placeholder:e.$t("forms.pleaseEnter")+e.$t("forms.name")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSaveModuleFunc(t)}},model:{value:e.moduleFuncEditForm.name,callback:function(t){e.$set(e.moduleFuncEditForm,"name",t)},expression:"moduleFuncEditForm.name"}})],1)],1),n("el-col",{attrs:{sm:{span:12}}},[n("el-form-item",{attrs:{label:e.$t("forms.code"),prop:"code"}},[n("el-select",{attrs:{filterable:!0,disabled:e.treeLoading,value:""},model:{value:e.moduleFuncEditForm.code,callback:function(t){e.$set(e.moduleFuncEditForm,"code",t)},expression:"moduleFuncEditForm.code"}},e._l(e.moduleFuncCodeList,function(e){return n("el-option",{key:"module_func_code_"+e.value,attrs:{value:e.value,label:e.value}})}),1)],1)],1)],1),n("el-row",[n("el-col",{attrs:{sm:{span:24}}},[n("el-form-item",{attrs:{label:e.$t("forms.parent"),prop:"moduleFuncParentArray"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.moduleFuncCascaderData,disabled:e.treeLoading,props:{checkStrictly:!0,value:"id"}},model:{value:e.moduleFuncEditForm.moduleFuncParentArray,callback:function(t){e.$set(e.moduleFuncEditForm,"moduleFuncParentArray",t)},expression:"moduleFuncEditForm.moduleFuncParentArray"}})],1)],1)],1),n("el-form-item",{attrs:{label:e.$t("forms.roleList")}},[n("el-transfer",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],attrs:{data:e.optionalModuleFuncRoles,filterable:!0,props:{key:"id"},titles:[e.$t("forms.optional"),e.$t("forms.selected")],"button-texts":[e.$t("forms.buttons.cancel"),e.$t("forms.buttons.select")]},on:{change:e.handleModuleFuncRoleListChange},model:{value:e.moduleFuncEditForm.roleIds,callback:function(t){e.$set(e.moduleFuncEditForm,"roleIds",t)},expression:"moduleFuncEditForm.roleIds"}})],1),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"info",loading:e.treeLoading},on:{click:e.doResetModuleFunc}},[e._v("\n                "+e._s(e.$t("forms.buttons.reset"))+"\n              ")]),n("el-button",{attrs:{type:"primary",loading:e.treeLoading},on:{click:e.doSaveModuleFunc}},[e._v("\n                "+e._s(e.$t("forms.buttons.submit"))+"\n              ")])],1)],1)],1)],1)],1)],1)],1)},a=[],o=(n("55dd"),n("20d6"),n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("90de")),i={name:"authConfig",data:function(){return{activeName:"menuList",menuTreeData:[],moduleFuncTreeData:[],tree_loading:!1,moduleFuncCode:[],currMenuFullPath:"",currMenuData:{},currMenu:{},menuEditForm:{},currModuleFuncFullPath:"",currModuleFuncData:{},currModuleFunc:{},moduleFuncEditForm:{},optionalMenuRoles:[],optionalModuleFuncRoles:[]}},computed:{treeLoading:function(){return this.tree_loading},openType:function(){return[{value:0,label:this.$i18n.t("forms.inner")},{value:1,label:this.$i18n.t("forms.newTabs")}]},moduleFuncCodeList:function(){return this.moduleFuncCode},menuCascaderData:function(){var e=Object(o["a"])(this.menuTreeData);if(!this.menuEditForm.appId&&""!==this.menuEditForm.appId)for(var t=0;t<e.length;t++)if(e[t].id!==this.menuEditForm.appId){e.splice(t,1);break}return Object(o["c"])(e,[this.menuEditForm.id])},moduleFuncCascaderData:function(){var e=Object(o["a"])(this.moduleFuncTreeData);if(!this.moduleFuncEditForm.appId&&""!==this.moduleFuncEditForm.appId)for(var t=0;t<e.length;t++)if(e[t].id!==this.moduleFuncEditForm.appId){e.splice(t,1);break}return Object(o["c"])(e,[this.moduleFuncEditForm.id])},menuParentArray:function(){return this.menuEditForm.menuParentArray},moduleFuncParentArray:function(){return this.moduleFuncEditForm.moduleFuncParentArray},ruleMenuEditForm:function(){return{name:[{required:!0,message:this.$i18n.t("forms.name")+this.$i18n.t("forms.notEmpty"),trigger:"blur"}],iconType:[{required:!0,message:this.$i18n.t("forms.iconType")+this.$i18n.t("forms.notEmpty"),trigger:"blur"}],openType:[{type:"integer",required:!0,message:this.$i18n.t("forms.openType")+this.$i18n.t("forms.notEmpty"),trigger:"change"}],sort:[{type:"integer",required:!0,message:this.$i18n.t("forms.sort")+this.$i18n.t("forms.notEmpty"),trigger:"blur"}],menuParentArray:[{type:"array",required:!0,message:this.$i18n.t("forms.parent")+this.$i18n.t("forms.notEmpty"),trigger:"on-change"}]}},ruleModuleFuncEditForm:function(){return{name:[{required:!0,message:this.$i18n.t("forms.name")+this.$i18n.t("forms.notEmpty"),trigger:"blur"}],code:[{type:"string",required:!0,message:this.$i18n.t("forms.code")+this.$i18n.t("forms.notEmpty"),trigger:"change"}],moduleFuncParentArray:[{type:"array",required:!0,message:this.$i18n.t("forms.parent")+this.$i18n.t("forms.notEmpty"),trigger:"on-change"}]}}},watch:{menuParentArray:function(e){e.length>0?this.menuEditForm.parentId=e[e.length-1]:this.menuEditForm.parentId=""},moduleFuncParentArray:function(e){e.length>0?this.moduleFuncEditForm.parentId=e[e.length-1]:this.moduleFuncEditForm.parentId=""}},methods:{refreshModuleFuncCodeList:function(){var e=this;this.tree_loading=!0,this.$api.request.auth.getModuleFuncCodeList().then(function(t){e.tree_loading=!1,t&&(e.moduleFuncCode=t.data.map(function(e){var t={};return t.value=e,t}))}).catch(function(){e.tree_loading=!1})},reloadMenuRoleList:function(){var e=this;this.tree_loading=!0,this.$api.request.role.getRoleList(this.currMenu.appId).then(function(t){e.tree_loading=!1,t&&(e.optionalMenuRoles=t.data.map(function(e){return e.label=e.name,e}))}).catch(function(){e.tree_loading=!1})},reloadModuleFuncRoleList:function(){var e=this;this.tree_loading=!0,this.$api.request.role.getRoleList(this.currModuleFunc.appId).then(function(t){e.tree_loading=!1,t&&(e.optionalModuleFuncRoles=t.data.map(function(e){return e.label=e.name,e}))}).catch(function(){e.tree_loading=!1})},refreshMenuTree:function(){var e=this;this.clearMenuCurrObj(),this.tree_loading=!0,this.$api.request.app.getList().then(function(t){if(t){for(var n=t.data,r=0;r<n.length;r++){var a=n[r];a.isApp=!0,a.appId=a.id,a.name=a.appName,a.label=a.appName,a.sort=r,a.children=[]}e.$api.request.auth.getAllMenuList().then(function(t){if(e.tree_loading=!1,t){Object(o["j"])(t.data);var r=!0,a=!1,i=void 0;try{for(var u,d=t.data[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var l=u.value;l.parentId=l.appId;var s=!0,c=!1,m=void 0;try{for(var p,h=n[Symbol.iterator]();!(s=(p=h.next()).done);s=!0){var F=p.value;F.id===l.appId&&F.children.push(l)}}catch(f){c=!0,m=f}finally{try{s||null==h.return||h.return()}finally{if(c)throw m}}}}catch(f){a=!0,i=f}finally{try{r||null==d.return||d.return()}finally{if(a)throw i}}e.menuTreeData=n}}).catch(function(){e.tree_loading=!1})}}).catch(function(){e.tree_loading=!1})},refreshModuleFuncTree:function(){var e=this;this.clearModuleFuncCurrObj(),this.tree_loading=!0,this.$api.request.app.getList().then(function(t){if(t){for(var n=t.data,r=0;r<n.length;r++){var a=n[r];a.isApp=!0,a.appId=a.id,a.name=a.appName,a.label=a.appName,a.children=[]}e.$api.request.auth.getAllModuleFuncList().then(function(t){if(e.tree_loading=!1,t){Object(o["j"])(t.data);var r=!0,a=!1,i=void 0;try{for(var u,d=t.data[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var l=u.value;l.parentId=l.appId;var s=!0,c=!1,m=void 0;try{for(var p,h=n[Symbol.iterator]();!(s=(p=h.next()).done);s=!0){var F=p.value;F.id===l.appId&&F.children.push(l)}}catch(f){c=!0,m=f}finally{try{s||null==h.return||h.return()}finally{if(c)throw m}}}}catch(f){a=!0,i=f}finally{try{r||null==d.return||d.return()}finally{if(a)throw i}}e.moduleFuncTreeData=n}}).catch(function(){e.tree_loading=!1})}}).catch(function(){e.tree_loading=!1})},clearMenuCurrObj:function(e){(!e||e&&e===this.currMenu.id)&&(this.menuEditForm={id:"",appId:"",name:"",iconType:"",path:"",enabled:!0,openType:0,menuParentArray:[],parentId:"",sort:0,roleIds:[]},this.currMenu={id:"",appId:"",name:"",iconType:"",path:"",enabled:!0,openType:0,parentId:"",sort:0,roleIds:[]},this.currMenuData={})},clearModuleFuncCurrObj:function(e){(!e||e&&e===this.currModuleFunc.id)&&(this.moduleFuncEditForm={id:"",appId:"",name:"",code:"",moduleFuncParentArray:[],parentId:"",roleIds:[]},this.currModuleFunc={id:"",appId:"",name:"",code:"",parentId:"",roleIds:[]},this.currModuleFuncData={})},appendMenu:function(e){var t=this;this.tree_loading=!0,this.$api.request.auth.createMenu({appId:e.appId,name:this.$i18n.t("forms.new")+this.$i18n.t("forms.menu"),iconType:"el-icon-caret-right",path:"/",parentId:e.id,enabled:!1,openType:0,sort:e.children.length+1}).then(function(n){if(t.tree_loading=!1,n){t.$message.success(t.$i18n.t("messages.createSuccess")+"");var r=e.children||[];Object(o["j"])([n.data]),r.push(n.data),Object(o["k"])(r),t.menuClick(n.data),t.$set(e,"children",r)}}).catch(function(){t.tree_loading=!1})},appendModuleFunc:function(e){var t=this;this.tree_loading=!0,this.$api.request.auth.createModuleFunc({appId:e.appId,name:this.$i18n.t("forms.new")+this.$i18n.t("forms.moduleFunc"),code:"other",parentId:e.id}).then(function(n){if(t.tree_loading=!1,n){t.$message.success(t.$i18n.t("messages.createSuccess")+"");var r=e.children||[];Object(o["j"])([n.data]),r.push(n.data),Object(o["k"])(r,"code"),t.moduleFuncClick(n.data),t.$set(e,"children",r)}}).catch(function(){t.tree_loading=!1})},removeMenu:function(e,t){var n=this;t.covert?this.$confirm(this.$i18n.t("messages.deleteDataConfirm")+": "+Object(o["i"])(this.menuTreeData,t.id),this.$i18n.t("dialog.confirm")+"",{type:"warning"}).then(function(){n.tree_loading=!0,n.$api.request.auth.deleteMenu([t.id]).then(function(r){if(n.tree_loading=!1,r){n.$message.success(n.$i18n.t("messages.deleteSuccess")+""),n.clearMenuCurrObj(t.id);var a=e.parent,o=a.data.children,i=o.findIndex(function(e){return e.id===t.id});o.splice(i,1)}}).catch(function(){n.tree_loading=!1})}).catch(function(){}):this.$alert(this.$i18n.t("messages.tableDataCannotDel")+": "+Object(o["i"])(this.menuTreeData,t.id),this.$i18n.t("dialog.error")+"",{type:"error"})},removeModuleFunc:function(e,t){var n=this;t.covert?this.$confirm(this.$i18n.t("messages.deleteDataConfirm")+": "+Object(o["i"])(this.moduleFuncTreeData,t.id),this.$i18n.t("dialog.confirm")+"",{type:"warning"}).then(function(){n.tree_loading=!0,n.$api.request.auth.deleteModuleFunc([t.id]).then(function(r){if(n.tree_loading=!1,r){n.$message.success(n.$i18n.t("messages.deleteSuccess")+""),n.clearModuleFuncCurrObj(t.id);var a=e.parent,o=a.data.children,i=o.findIndex(function(e){return e.id===t.id});o.splice(i,1)}}).catch(function(){n.tree_loading=!1})}).catch(function(){}):this.$alert(this.$i18n.t("messages.tableDataCannotDel")+": "+Object(o["i"])(this.moduleFuncTreeData,t.id),this.$i18n.t("dialog.error")+"",{type:"error"})},menuClick:function(e){var t=this;this.tree_loading=!0,this.$api.request.auth.getMenuInfo(e.id).then(function(n){t.tree_loading=!1,n&&(t.currMenuData=e,t.currMenuData.roleIds=n.data.roleIds,t.currMenu={id:t.currMenuData.id,appId:t.currMenuData.appId,name:t.currMenuData.name,iconType:t.currMenuData.iconType,path:t.currMenuData.path,enabled:t.currMenuData.enabled,openType:t.currMenuData.openType,parentId:t.currMenuData.parentId,sort:t.currMenuData.sort,roleIds:t.currMenuData.roleIds},t.doResetMenu())}).catch(function(){t.tree_loading=!1})},moduleFuncClick:function(e){var t=this;this.tree_loading=!0,this.$api.request.auth.getModuleFuncInfo(e.id).then(function(n){t.tree_loading=!1,n&&(t.currModuleFuncData=e,t.currModuleFuncData.roleIds=n.data.roleIds,t.currModuleFunc={id:t.currModuleFuncData.id,appId:t.currModuleFuncData.appId,name:t.currModuleFuncData.name,code:t.currModuleFuncData.code,parentId:t.currModuleFuncData.parentId,roleIds:t.currModuleFuncData.roleIds},t.doResetModuleFunc())}).catch(function(){t.tree_loading=!1})},doSaveMenu:function(){var e=this;this.$refs["menuEditForm"].validate(function(t){t&&(e.tree_loading=!0,e.$api.request.auth.doUpdateMenu({id:e.menuEditForm.id,appId:e.menuEditForm.appId,name:e.menuEditForm.name,iconType:e.menuEditForm.iconType,path:e.menuEditForm.path,parentId:e.menuEditForm.parentId,enabled:e.menuEditForm.enabled,openType:e.menuEditForm.openType,sort:e.menuEditForm.sort,roleIds:e.menuEditForm.roleIds}).then(function(t){if(e.tree_loading=!1,t){var n=e.currMenuData.parentId;e.reloadMenuRoleList(),e.$message.success(e.$i18n.t("messages.saveSuccess")+""),e.currMenuData.name=e.menuEditForm.name,e.currMenuData.label=e.menuEditForm.name,e.currMenuData.iconType=e.menuEditForm.iconType,e.currMenuData.path=e.menuEditForm.path,e.currMenuData.parentId=e.menuEditForm.parentId,e.currMenuData.enabled=e.menuEditForm.enabled,e.currMenuData.openType=e.menuEditForm.openType,e.currMenuData.sort=e.menuEditForm.sort,e.currMenuData.roleIds=e.menuEditForm.roleIds,e.currMenu={id:e.menuEditForm.id,appId:e.menuEditForm.appId,name:e.menuEditForm.name,iconType:e.menuEditForm.iconType,path:e.menuEditForm.path,parentId:e.menuEditForm.parentId,enabled:e.menuEditForm.enabled,openType:e.menuEditForm.openType,sort:e.menuEditForm.sort,roleIds:e.menuEditForm.roleIds},e.currMenuFullPath=Object(o["i"])(e.menuTreeData,e.currMenu.id),n===e.currMenuData.parentId?Object(o["k"])(e.menuTreeData):e.refreshMenuTree()}}).catch(function(){e.tree_loading=!1}))})},doSaveModuleFunc:function(){var e=this;this.$refs["moduleFuncEditForm"].validate(function(t){t&&(e.tree_loading=!0,e.$api.request.auth.doUpdateModuleFunc({id:e.moduleFuncEditForm.id,appId:e.moduleFuncEditForm.appId,name:e.moduleFuncEditForm.name,code:e.moduleFuncEditForm.code,parentId:e.moduleFuncEditForm.parentId,roleIds:e.moduleFuncEditForm.roleIds}).then(function(t){if(e.tree_loading=!1,t){var n=e.currModuleFuncData.parentId;e.reloadModuleFuncRoleList(),e.$message.success(e.$i18n.t("messages.saveSuccess")+""),e.currModuleFuncData.name=e.moduleFuncEditForm.name,e.currModuleFuncData.title=e.moduleFuncEditForm.name,e.currModuleFuncData.label=e.moduleFuncEditForm.name,e.currModuleFuncData.code=e.moduleFuncEditForm.code,e.currModuleFuncData.parentId=e.moduleFuncEditForm.parentId,e.currModuleFuncData.roleIds=e.moduleFuncEditForm.roleIds,e.currModuleFunc={id:e.moduleFuncEditForm.id,appId:e.moduleFuncEditForm.appId,name:e.moduleFuncEditForm.name,code:e.moduleFuncEditForm.code,parentId:e.moduleFuncEditForm.parentId,roleIds:e.moduleFuncEditForm.roleIds},e.currModuleFuncFullPath=Object(o["i"])(e.moduleFuncTreeData,e.currModuleFunc.id),n===e.currModuleFuncData.parentId?Object(o["k"])(e.moduleFuncTreeData,"code"):e.refreshModuleFuncTree()}}).catch(function(){e.tree_loading=!1}))})},doResetMenu:function(){this.$refs["menuEditForm"].resetFields(),this.menuEditForm={id:this.currMenu.id,appId:this.currMenu.appId,name:this.currMenu.name,iconType:this.currMenu.iconType,path:this.currMenu.path,enabled:this.currMenu.enabled,openType:this.currMenu.openType,menuParentArray:Object(o["h"])(this.menuTreeData,this.currMenu.parentId).map(function(e){return e.id}),parentId:this.currMenu.parentId,sort:this.currMenu.sort,roleIds:this.currMenu.roleIds},this.reloadMenuRoleList(),this.currMenuFullPath=Object(o["i"])(this.menuTreeData,this.currMenu.id)},doResetModuleFunc:function(){this.$refs["moduleFuncEditForm"].resetFields(),this.moduleFuncEditForm={id:this.currModuleFunc.id,appId:this.currModuleFunc.appId,name:this.currModuleFunc.name,code:this.currModuleFunc.code,moduleFuncParentArray:Object(o["h"])(this.moduleFuncTreeData,this.currModuleFunc.parentId).map(function(e){return e.id}),parentId:this.currModuleFunc.parentId,roleIds:this.currModuleFunc.roleIds},this.reloadModuleFuncRoleList(),this.currModuleFuncFullPath=Object(o["i"])(this.moduleFuncTreeData,this.currModuleFunc.id)},handleMenuRoleListChange:function(e){this.menuEditForm.roleIds=e},handleModuleFuncRoleListChange:function(e){this.moduleFuncEditForm.roleIds=e}},mounted:function(){this.refreshMenuTree(),this.refreshModuleFuncTree(),this.refreshModuleFuncCodeList()}},u=i,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports}}]);