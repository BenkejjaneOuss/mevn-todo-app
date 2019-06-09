<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Sign up</small>
                    </div>
                    <form role="form" method="post">

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Name"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="form.name">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="form.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="form.password">
                        </base-input>
                        
                        <base-input class="input-group-alternative"
                                    placeholder="Confirm password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="form.cnfPassword">
                        </base-input>
                        <div class="text-center">
                            <base-button type="primary" class="my-4" @click="onCreate" >Create account</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

  export default {
    name: 'register',
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          cnfPassword: ''
        }
      }
    },
    methods:{
        onCreate() {
            this.axios.post('https://rest-api-express-mongo.herokuapp.com/user/register', this.form)
                .then(res => {
                    console.log(res)
                }).catch(e => {
                    console.log('createForm', e)
                })
            
        }
    }
  }
</script>
<style>
</style>
