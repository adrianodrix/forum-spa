/* eslint-disable */

import Vue from '../main'
import {router} from '../main'

export default {

    user: {
        authenticated: false,
        profile: null,
    },

    check () {
        "use strict";
        if (localStorage.getItem('id_token') !== null) {
            Vue.http.get('auth/user').then(
                response => {
                    this.user.authenticated = true
                    this.user.profile = response.data.data
                }
            )
        }
    },

    // To log out, we just need to remove the token
    logout () {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
        this.user.profile = null

        router.push({ name: 'home' })
    },

    signin (context, email, password) {
        "use strict";
        var data = {
            'email': email,
            'password': password
        }

        Vue.http.post(
            'auth/signin',
            data
        ).then(response => {
            context.error = false

            localStorage.setItem('id_token', response.data.meta.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

            this.user.authenticated = true
            this.user.profile = response.data.data

            router.push({ name: 'home' })
        }, response => {
            context.response = response.data
            context.error = true
        })
    },

    signup (context, email, username, password) {
        "use strict";
        var data = {
            'email': email,
            'username': username,
            'password': password
        }

        Vue.http.post(
            'auth/signup',
            data
        ).then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    }
}
