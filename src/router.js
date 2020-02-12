import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register'
import Login from './views/Login.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home, meta: { auth: true } }, //สร้างตัวแปร meta แล้วเก็บvalue ชื่อ auth เป็น boolean
        { path: '/register', name: 'register', component: Register },
        { path: '/login', name: 'login', component: Login }
    ]
})

//ตรวจสอบสิทธิ์การเข้าถึงหน้าต่างๆ(บล็อคไม่ให้เข้าหน้า Home โดยที่ยังไม่ล็อคอิน)
router.beforeEach((to, from, next) => {
    if (!to.meta.auth) return next() //ถ้าตัวแปร meta นั้น ไม่มีค่า(Null,Undefine) ก็ให้ return next คือ ยอมให้เข้าถึงทุกหน้า

    router.app.$store.dispatch('get_user_login')
        .then(() => next())
        .catch(() => next({ name: 'login' }))
})

export default router;