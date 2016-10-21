<template>
    <div class="panel panel-default" style="margin-top:10px;">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <router-link :to="{ name: 'home' }" tag="li" exact><a>Home</a></router-link>
                    <router-link :to="{ name: 'topic.new' }" tag="li" exact v-if="auth.user.authenticated"><a>Create a new Topic</a></router-link>

                    <router-link :to="{ name: 'auth.signin' }" tag="li" class="pull-right" exact v-if="!auth.user.authenticated"><a>Sign In</a></router-link>
                    <router-link :to="{ name: 'auth.signup' }" tag="li" class="pull-right" exact v-if="!auth.user.authenticated"><a>Sign up</a></router-link>
                    <li class="pull-right" exact v-if="auth.user.authenticated"><a @click="auth.logout()" href="#">Log Out</a></li>
                    <router-link to="#" tag="li" class="pull-right" exact v-if="auth.user.authenticated">Hi! {{ auth.user.profile.username }}</router-link>
                </ul>
            </nav>
        </div>
        <div class="panel-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<style src="assets/sass/app.scss" lang="sass"></style>

<script>
/* eslint-disable */
import auth from '../auth'

export default {
    data () {
        return {
            auth: auth
        }
    },

    mounted () {
        auth.check()
    }
}

</script>