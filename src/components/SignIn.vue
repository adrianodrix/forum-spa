<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>Could not sign you in with those details.</p>
        </div>

        <form autocomplete="off" v-on:submit="signin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" required v-model="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" required v-model="password" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import auth from '../auth'

export default {
    data () {
        return {
            email: null,
            password: null,
            error: false
        }
    },
    methods: {
        signin (e) {
            e.preventDefault()
            auth.signin(this, this.email, this.password)
        }
    }
}
</script>