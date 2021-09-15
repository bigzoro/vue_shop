import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 把Message挂载到Vue的原型对象上（￥message可以自定义名称），每个组件都可以通过this.$message获取 Message
Vue.prototype.$message = Message
