## 版本更新记录
##### v4.1.4
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 同步后端更新至4.1.4
##### v4.1.3
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 优化首页样式
> - [Upgrade] 优化表格样式
> - [Upgrade] 页面跳转公共方法支持按路由path或name进行跳转，并且可同时带入query和params（name跳转才有效）参数
> - [Upgrade] 优化标签页组件
##### v4.1.2
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 同步后端更新至4.1.2
> - [Upgrade] 流程图片改为gif格式
> - [Upgrade] 路由增加元数据配置
##### v4.1.1
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 精细化控制树形配置时的按钮显示
> - [Upgrade] 调整首页样式
> - [Upgrade] 权限配置、机构配置、角色配置增加筛选
> - [Upgrade] 机构配置增加区域字段，编码和区域均为必填
##### v4.1.0
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 规范API接口URL
> - [Upgrade] tools增加文件下载公共方法
> - [Upgrade] 同步后端更新至4.1.0
##### v4.0.7
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 更新lang语言集
> - [Upgrade] 应用配置、路由配置、运行参数配置、用户配置，不可删除的记录禁用勾选框
> - [Upgrade] 优化Api请求404错误处理
> - [Upgrade] 优化查询界面查询条件写法
> - [Upgrade] 增加工作流配置界面
##### v4.0.6
> - [Upgrade] 优化树形选择项显示名称
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 规范路由path写法
> - [Upgrade] 优化 tools 中 processTreeNode 设置 label 的逻辑
> - [Fix] 修复api异常时多次打开错误提示框的问题
> - [Fix] 修复树形配置不会动态刷新节点排序的问题
> - [Fix] 修复树形配置保存后不会及时刷新全路径显示的问题
> - [Fix] 修复树形组件按钮错位的问题
##### v4.0.5
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 修改应用列表获取排序规则
> - [Upgrade] 去除部分多余代码
> - [Upgrade] 调整日志查询界面文字描述
> - [Upgrade] 修改.vue文件缩进，及空标签规范
> - [Fix] 修复批量关闭标签时候（关闭所有、关闭其他），保留标签不正确的BUG
##### v4.0.4
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 模块编码改用el-autocomplete组件，允许自定义
> - [Upgrade] 调整对话框组件body样式
> - [Upgrade] 与后台同步更新至v4.0.4
##### v4.0.3
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 修改分页查询参数
> - [Upgrade] 与后台同步更新至v4.0.3
##### v4.0.2
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 更新vue-cli至4.0.4
> - [Upgrade] 修改日志文件下载写法，支持大文件下载，文件名采用Base64加密
> - [Upgrade] 优化 api 异常处理逻辑
> - [Upgrade] 修改登录日志、操作日志、路由日志，信息类型下拉框选项顺序
##### v4.0.1
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 与后台同步更新至v4.0.1
##### v4.0.0
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 页面组件由 iView 替换为 Element-UI
> - [Upgrade] 优化部分页面逻辑
> - [Upgrade] 重写树形组件相关算法
> - [Upgrade] 应用配置界面增加 scope 字段配置
> - [Upgrade] 调整路由日志查询接口
> - [Upgrade] 新增操作日志界面
> - [Upgrade] 新增登录日志界面
> - [Upgrade] 首页在线用户数增加数字动画
> - [Upgrade] 查询界面table自动调整高度
> - [Upgrade] 跳转至登录界面时候清空本地标签缓存
> - [Upgrade] 优化登录界面跳转逻辑，保证安全默认强制清空标签栏
> - [Upgrade] 优化权限配置、机构配置、角色配置界面样式
> - [Upgrade] 优化cookie设置，指定path参数
> - [Upgrade] 去除localStore，统一存储进cookie
> - [Upgrade] 取消配置中心界面，优化标签页
> - [Upgrade] 增加顶部加载进度条
> - [Upgrade] 修改登录界面样式
> - [Fix] 修复菜单栏展开/折叠动画
> - [Fix] 修复关闭其他标签页时控制台报错的问题
> - [Fix] 修复IE兼容性问题，兼容IE10及以上版本
##### v3.0.5
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 角色编码使用自动补全，可自定义输入
> - [Upgrade] 优化 tools.js 中 processTreeNode 函数
> - [Upgrade] 优化统一页面跳转方法
> - [Upgrade] 优化代码树形选择
> - [Upgrade] 修改后端请求地址baseURL及代理配置，解决跨域问题
> - [Upgrade] 增加项目部署路径配置，支持部署至非根路径
##### v3.0.4
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 优化输入框样式
> - [Upgrade] 调整标题栏最右侧下拉菜单顺序
> - [Upgrade] token失效或主动注销后，为保证安全性强制清除标题栏缓存
> - [Fix] 解决 404 和 500 页面偶尔会出现在标签栏的问题
> - [Fix] 解决重复路由报错的问题
> - [Fix] 修复登录时偶尔极端环境下可以重复点击提交导致token失效的问题
##### v3.0.3
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 与后台同步更新至v3.0.3
##### v3.0.2
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 修改配置中心及路由日志部分界面样式
> - [Upgrade] 优化代码书写，去除大部分警告
> - [Fix] 修复用户登录名获取不正确的问题
##### v3.0.1
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 与后台同步更新至v3.0.1
##### v3.0.0
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 修改 mock 数据
> - [Upgrade] 增加配置刷新方式，“指定服务名”、“规则匹配”、“所有服务”
> - [Upgrade] 与后台同步更新至v3.0.0
##### v2.0.1
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 与后台同步更新至v2.0.1
##### v2.0.0
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 关闭 eslint 校验，解决插件版本不兼容的问题
> - [Upgrade] 更新mock信息，与后台同步更新至v2.0.0
##### v1.4.3
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] 超级管理员增加网关路由日志查询界面
> - [Upgrade] 更新文档
> - [Upgrade] 优化404及500页面跳转
##### v1.4.2
> - [Upgrade] 更新依赖插件至最新版本
> - [Upgrade] cookie 增加超时时间
> - [Upgrade] 增加文件上传 demo 界面
> - [Fix] 修复 vue-json-editor 组件 height 样式无效的问题
##### v1.4.1
> - [Upgrade] 更新依赖插件版本
> - [Upgrade] 优化代码逻辑和 mock 匹配规则
> - [Upgrade] 优化登录界面输入款样式
##### v1.4.0
> - [Upgrade] 更新依赖插件版本
> - [Upgrade] 超级管理员增加后台网关动态路由配置界面，可维护 SpringCloud GateWay 路由信息、动态刷新路由
> - [Upgrade] 更新文档
> - [Fix] 修复 404 页面跳转
##### v1.3.0
> - [Upgrade] 接口字段统一改为驼峰命名
> - [Upgrade] 退出登录时调用下线接口
> - [Upgrade] 重写首页，增加在线用户及各应用登录情况统计图表
> - [Upgrade] 更新依赖插件至最新版
> - [Fix] 修复部分页面可遮蔽层控制
##### v1.2.0
> - [Upgrade] 更新依赖插件版本
> - [Upgrade] 超级管理员增加配置中心界面，可维护配置信息、刷新后台服务配置
##### v1.1.0
> - 超级管理员增加后台系统日志文件查询、下载功能
> - 更新依赖插件版本
##### v1.0.0
> - 初始化项目
> - 完成各类组件模块的封装和框架的封装
