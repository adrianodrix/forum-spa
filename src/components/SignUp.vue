<template>
    <div>
        <div class="alert alert-danger" v-if="error && !success">
            <p>Could not sign you up</p>
        </div>

        <div class="alert alert-success" v-if="success">
            <p>You're done! You can now sign in</p>
        </div>

        <form autocomplete="off" v-on:submit="signup" v-if="!success">
            <div class="form-group" v-bind:class="{ 'has-error': error && response.email }">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" required v-model="email" />
                <span class="help-block" v-if="error && response.email">{{ response.email[0] }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && response.username }">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" required v-model="username" />
                <span class="help-block" v-if="error && response.username">{{ response.username[0] }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && response.password }">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" required v-model="password" />
                <span class="help-block" v-if="error && response.password">{{ response.password[0] }}</span>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Sign Up</button>
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
            username: null,
            password: null,
            success: false,
            error: false,
            response: null
        }
    },
    methods: {
        signup (e) {
            e.preventDefault()
            auth.signup(this, this.email, this.username, this.password)
        }
    }
}
</script>

