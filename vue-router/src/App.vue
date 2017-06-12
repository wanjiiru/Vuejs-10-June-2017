<script>
  export default {
    data() {
      return {
        Login:{
          email:"",
          password:""
        }
      }
    },
    methods:{
      handleLoginFormSubmit(){
        const postData = {
          grant_type: "password",
          client_id: "",
          client_secret :"",
          username: this.login.email,
          password: this.login.password,
          scope:" "

        }
        this.$http.post("http:/localhost:8080/oauth/token")
          .then(response => {
            console.log(response)
          })

      }
    }
  }
</script>

<template>
  <div class="wrapper" id = "home-wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md -6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Login</strong>
                <div class="panel-body">
                    <form v-on:submit.prevent= "handleLoginFormSubmit()">
                      <div class="form-group">
                        <label>Email Adress</label>
                        <input 
                        class="form-control">
                        placeholder = "Enter your email adress"
                        type = "text"
                        v-model = "login.email">
                    </div>
                    <div class="form-group">
                    <label>Password</label>
                    <input
                      class = "form-control"
                      placeholder = "Enter your password"
                      v-model = "login.password">
                      </div>
                    <button class="btn btn-primary">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

  <style lang ="sass">
    import "./assets'/bootsrap.css"
  </style>
