api         请求API
app.js      项目跟组件
components  展示型组件
config      全局配置
constants   容器组件
helper      工具/辅助函数
index.html  入口HTML文件
router      路由模块
services    应用服务模块
store       redux store
styles      样式


布局组件：仅仅涉及应用UI界面结构的组件，不涉及任何业务逻辑，数据请求及操作；
容器组件：负责获取数据，处理业务逻辑，通常在render()函数内返回展示型组件；
展示型组件：负责应用的界面UI展示；
UI组件：指抽象出的可重用的UI独立组件，通常是无状态组件；