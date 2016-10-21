<template>
    <div>
        <div class="alert alert-dismissible alert-info" v-if="!auth.user.authenticated">
            <strong>Please!</strong>
            <router-link :to="{ name: 'auth.signup' }" class="alert-link">Sign up</router-link> or
            <router-link :to="{ name: 'auth.signin' }" class="alert-link">Sign In</router-link> before posting a topic.
        </div>
        ok
        <form autocomplete="off" v-if="auth.user.authenticated">

        </form>
    </div>
</template>

<script>
/* eslint-disable */
import auth from '../auth'

export default {
    data () {
        return {
            auth: auth
        }
    }
}
</script>