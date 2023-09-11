<template>
    <div class="container">
        <div class="row">
            <form class="col-4 m-auto">
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "@/sevice/axios";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("/auth/login", {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem("access_token", response.data.access_token);
            } catch {
                console.log('xato');
            }
            this.email = '';
            this.password = '';
        },
    },
};
</script>
<style></style>
