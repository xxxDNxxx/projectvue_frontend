<template>
    <div class="register container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <h1 class="card-header">
                        LOGIN
                    </h1>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit()">
                            <div class="form-group">
                                <label for="">ชื่อผู้ใช้งาน</label>
                                <input type="text" name="username"
                                    v-validate="{ required: true }"
                                    v-model.trim="form.username"
                                    :class="{ 'is-invalid': errors.has('username') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('username') }}</span>
                            </div>

                            <div class="form-group">
                                <label for="">รหัสผ่าน</label>
                                <input type="password" name="password"
                                    v-validate="{ required: true}"
                                    v-model.trim="form.password"
                                    :class="{ 'is-invalid': errors.has('password') }"
                                    class="form-control">
                                <span class="invalid-feedback">{{ errors.first('password') }}</span>
                            </div>

                            <div v-if="errorMessage" class="alert alert-warning text-center">
                                {{ errorMessage }}
                            </div>

                            <div class="form-group buttons">
                                <button type="submit" class="btn btn-success btn-block">
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
    // ส่งข้อมูลไปตรวจสอบ
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;
        axios
          .post("http://localhost:5000/mobile/login", this.form)
          .then(response => {
              this.$router.push({name:"home"})
          })
          .catch(err => (this.errorMessage = err.response.da.message))
      });
    },
    // ล้างค่า Form
    onReset() {
      this.errorMessage = null;
      this.$validator.reset();
      this.form = {
        username: "",
        password: ""
      };
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


