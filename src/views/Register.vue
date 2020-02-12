<template>
    <div class="register container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <h1 class="card-header">
                        REGISTER
                    </h1>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit()">
                            <div class="form-group">
                                <label for="">ชื่อผู้ใช้งาน</label>
                                <input type="text" name="username"
                                    v-validate="{ required: true, regex: /^[A-Za-z0-9]{6,15}$/ }"
                                    v-model.trim="form.username"
                                    :class="{ 'is-invalid': errors.has('username') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('username') }}</span>
                            </div>

                            <div class="form-group">
                                <label for="">รหัสผ่าน</label>
                                <input type="password" name="password"
                                    v-validate="{ required: true, regex: /^[A-Za-z0-9]{6,15}$/ }"
                                    v-model.trim="form.password"
                                    :class="{ 'is-invalid': errors.has('password') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('password') }}</span>
                            </div>

                            <div class="form-group">
                                <label for="">ชื่อ</label>
                                <input type="text" name="firstname"
                                    v-validate="'required'"
                                    v-model.trim="form.firstname"
                                    :class="{ 'is-invalid': errors.has('firstname') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('firstname') }}</span>
                            </div>

                            <div class="form-group">
                                <label for="">นามสกุล</label>
                                <input type="text" name="lastname"
                                    v-validate="'required'"
                                    v-model.trim="form.lastname"
                                    :class="{ 'is-invalid': errors.has('lastname') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('lastname') }}</span>
                            </div>

                            <div v-if="errorMessage" class="alert alert-warning text-center">
                                {{ errorMessage }}
                            </div>

                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-info btn-block">
                                    ลงทะเบียน
                                </button>

                                <button @click="onRedirectToLogin()" type="button" class="btn btn-secondary btn-block">
                                    เข้าสู่ระบบ
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        firstname: "",
        lastname: ""
      },
      errorMessage: ""
    };
  },
  methods: {
    // บันทึกข้อมูลลงทะเบียน
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;
        axios
          .post("http://localhost:5000/mobile/register", this.form)
          .then(response => this.onReset())
          .catch(err => (this.errorMessage = err.response.data.message));
      });
    },
    // ล้างค่า Form
    onReset() {
      this.errorMessage = null;
      this.$validator.reset();
      this.form = {
        username: "",
        password: "",
        firstname: "",
        lastname: ""
      };
    },
    // ไปหน้าLogin
    onRedirectToLogin(){
      this.$router.push({name: "login"})
    }

  }
};
</script>

<style scoped>
.img-logo {
  width: 90%;
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 30px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}
.card {
  margin-bottom: 15%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.buttons .btn-secondary {
  margin-top: 20px;
}
.buttons {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>


