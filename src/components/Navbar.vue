<template>
    <nav class="navbar navbar-light">
        <a class="navbar-brand" href="#">Event manager</a>
        <a @click="onLogout()" class="btn-logout"><i class="fa fa-sign-out" aria-hidden="true"></i></a>
    </nav>
</template>

<script>
import axios from "axios"
export default {
    name:"navbar",
    methods:{
        onLogout(){
            axios.post("http://localhost:5000/mobile/logout")
            .then(response =>{
                this.$store.commit('set_user', null) //เซ็ตให้ store ว่าง
                this.$router.push({name:"login"})
            })
            .catch(error => alert(error.response.data.message))
        }
    }
}
</script>

<style scoped>
.navbar{
    background-color:white;
    height: 60px;
    border-bottom: solid 1px #17A2B8;
    padding-right: 0;
}
.navbar-brand{
    width: 262px;
    height: 60px;
}
.btn-logout{
    width: 80px;
    height: 38px;
    background-color:#17A2B8;
    font-size:25px;
    text-align: center;
    line-height:40px;
    cursor: pointer;
}
.btn-logout i {
    color:#FFFFFF;
}
</style>