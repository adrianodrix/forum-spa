/* eslint-disable */

// 0. If using a module system, call Vue.use(VueRouter)
import Vue from 'vue'
export default Vue

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://forum.dev/api'
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

// 1. Define route components.
// These can be imported from other files
import App from 'components/App'
import Home from 'components/Home'
import SignUp from 'components/SignUp'
import SignIn from 'components/SignIn'
import Topic from 'components/Topic'
import Topics from 'components/Topics'
import NewTopic from 'components/NewTopic'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/', name: 'auth.logout', component: Home},
    {path: '/signup', name: 'auth.signup', component: SignUp},
    {path: '/signin', name: 'auth.signin', component: SignIn},
    {path: '/topic/:topicId', name: 'topic', component: Topic},
    {path: '/section/:sectionId', name: 'topics', component: Topics},
    {path: '/topic/new', name: 'topic.new', component: NewTopic},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export var router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active'
})


// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
// Now the app has started!

