<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Sign up</small>
                    </div>
                    <form role="form">

                        <base-input class="input-group-alternative"
                                    placeholder="Name"
                                    addon-left-icon="ni ni-hat-3"
                                    :valid="errors.has('name') ? false : null"
                                    v-validate="'required'"
                                    name="name"
                                    v-model="form.name">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    :valid="errors.has('email') ? false : null"
                                    v-validate="'required|email'"
                                    name="email"
                                    v-model="form.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    :valid="errors.has('password') ? false : null"
                                    v-validate="'required'"
                                    name="password"
                                    ref="password"
                                    v-model="form.password">
                        </base-input>
                        
                        <base-input class="input-group-alternative"
                                    placeholder="Confirm password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    :valid="errors.has('cnfPassword') ? false : null"
                                    v-validate="'required|confirmed:password'"
                                    name="cnfPassword"
                                    data-vv-as="Confirm password"
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
            this.$validator.validateAll().then( () => {
                if (!this.errors.any()) {
                    this.axios.post('https://rest-api-express-mongo.herokuapp.com/user/register', this.form)
                        .then(res => {
                            
                            let type = 'error'
                            let title = 'Error!'
                            let text = (res.data.message !== '') ? res.data.message : 'Please retry later'
                            let router = ''
                            if(res.data.success) {
                                type="success"
                                title = 'Added!'
                                text = res.data.message
                                router = '/login'
                                this.form = {
                                    name: '',
                                    email: '',
                                    password: '',
                                    cnfPassword: ''
                                }
                                this.$validator.reset();
                            }
                            this.$swal({
                                type: type,
                                title: title,
                                text: text,
                                showConfirmButton: false,
                                showCloseButton: true,
                                onClose: () => {
                                    this.$router.push(router)
                                }
                            })
                        }).catch(e => {
                            console.log('createForm', e)
                        })
                }
            })
            
        }
    }
  }
</script>
<style>
</style>
