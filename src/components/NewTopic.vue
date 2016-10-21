<template>
    <div>
        <div class="alert alert-dismissible alert-info" v-if="!auth.user.authenticated">
            <strong>Please!</strong>
            <router-link :to="{ name: 'auth.signup' }" class="alert-link">Sign up</router-link> or
            <router-link :to="{ name: 'auth.signin' }" class="alert-link">Sign In</router-link> before posting a topic.
        </div>

        <form autocomplete="off" v-if="auth.user.authenticated" @submit="create">
            <div class="form-group">
                <label for="section">Section</label>
                <select id="section" class="form-control" required v-model="section">
                    <option v-for="section in sections" v-bind:value="section.id">{{ section.title }} ({{ section.id }})</option>
                </select>
            </div>

            <div class="form-group">
                <label for="title">Title</label>
                <input id="title" type="text" class="form-control" required v-model="title" />
            </div>

            <div class="form-group">
                <label for="body">Body</label>
                <textarea id="body" rows="3" class="form-control" required v-model="body" ></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Create topic</button>
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */

import auth from '../auth'
import store from '../store'
import {router} from '../main'

export default {
    data () {
        return {
            auth: auth,
            sections: [],
            section: null,
            title: null,
            body: null
        }
    },

    mounted () {
        store.getSections().then(sections => {
            this.sections = sections
            this.section = sections[0].id
        })
    },

    methods: {
        create (e) {
            e.preventDefault()
            store.createTopic(this.section, this.title, this.body).then( topic => {
                router.push({ name: 'topic', params: { topicId: topic.id } })
            })
        }
    }
}
</script>