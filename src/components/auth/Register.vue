<template>
  <div class="container">
    <div class="row">
      <form class="col-4 m-auto">
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Name</label>
          <input type="text" v-model="name" class="form-control" id="exampleInputName1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          @click.prevent="store"
          :disabled="disabl"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "@/sevice/axios";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      disabl: false,
    };
  },
  methods: {
    async store() {
      this.disabl = true;
      await axios
        .post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          alert(res.data.message);
        });
      (this.disabl = false),(this.name = ""), (this.email = ""), (this.password = "");
    },
  },
};
</script>
<style></style>
