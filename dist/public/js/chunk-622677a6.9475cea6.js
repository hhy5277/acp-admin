(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-622677a6"],{1094:function(t,e,a){"use strict";var l=a("a6e3"),s=a.n(l);s.a},"8b83":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{lg:{span:8}}},[a("el-card",[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadURL,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"",limit:3,"on-exceed":t.handleExceed,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1),a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"用户头像上传"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadURL,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl,alt:""}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"照片墙"}},[a("el-upload",{attrs:{action:t.uploadURL,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1)],1),a("br"),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"文件缩略图"}},[a("el-upload",{attrs:{action:t.uploadURL,"list-type":"picture-card","auto-upload":!1},scopedSlots:t._u([{key:"file",fn:function(e){var l=e.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:l.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[a("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(l)}}},[a("i",{staticClass:"el-icon-zoom-in"})]),t.disabled?t._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleDownload(l)}}},[a("i",{staticClass:"el-icon-download"})]),t.disabled?t._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(l)}}},[a("i",{staticClass:"el-icon-delete"})])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"图片列表缩略图"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadURL,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1),a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"上传文件列表控制"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadURL,"on-change":t.handleChange,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"拖拽上传"}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:t.uploadURL,multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])])],1)],1),a("el-col",{attrs:{lg:{span:8}}},[a("el-card",{attrs:{header:"手动上传"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.uploadURL,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1)],1)],1)},s=[],i=(a("7f7f"),a("6dc3")),o={name:"demoUpload",data:function(){return{uploadURL:i["a"].baseURL+"/file/upload",fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],imageUrl:"",dialogImageUrl:"",dialogVisible:!1,disabled:!1}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleChange:function(t,e){this.fileList=e.slice(-3)},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){return console.log(t,e),this.$confirm("确定移除 ".concat(t.name,"？"))},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleDownload:function(t){console.log(t)}}},r=o,n=(a("1094"),a("2877")),d=Object(n["a"])(r,l,s,!1,null,null,null);e["default"]=d.exports},a6e3:function(t,e,a){}}]);