<template>
    <div>
        <div class="media">
            <div class="media-left">
                <router-link :to="{ name: 'home' }">
                    <img class="media-object" :src="topic.user.data.avatar" :alt="topic.user.data.username">
                </router-link>
            </div>
            <div class="media-body">
                <h3 class="media-heading">{{ topic.title }}</h3>
                <p class="text-muted">Posted by {{ topic.user.data.username }} {{ topic.diffForHumans }}</p>
                <span v-html="marked(topic.body)"></span>

                <div class="media" v-for="post in topic.posts.data">
                    <div class="media-left">
                        <router-link :to="{ name: 'home' }">
                            <img class="media-object img-thumbnail" width="30px" height="30px"  :src="post.user.data.avatar" :alt="post.user.data.username">
                        </router-link>
                    </div>
                    <div class="media-body">
                        <p class="text-muted">Posted by {{ post.user.data.username }} {{ post.diffForHumans }}</p>
                        <p class="text" v-html="marked(post.body)"></p>
                    </div>
                </div>

                <div class="alert alert-dismissible alert-info" v-if="!auth.user.authenticated">
                    <strong>Heads up!</strong>
                    <router-link :to="{ name: 'auth.signup' }" class="alert-link">Sign up</router-link> or
                    <router-link :to="{ name: 'auth.signin' }" class="alert-link">Sign In</router-link> to reply.
                </div>

                <form autocomplete="off" v-on:submit="reply" v-if="auth.user.authenticated">
                    <div class="form-group">
                        <textarea rows="3" placeholder="Reply" class="form-control" required v-model="body"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Reply</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import auth from '../auth'
import store from '../store'
import marked from 'marked'

export default {
    data () {
        return {
            auth: auth,
            topic: null,
            body: ''
        }
    },

    mounted () {
        store.getTopicById(this.$route.params.topicId).then(topic => {
            this.topic = topic
        })
    },

    methods: {
        marked,
        reply (e) {
            e.preventDefault()
            store.replyToTopicById(this.topic.id, this.body).then( post => {
                this.topic.posts.data.push(post)
                this.body = ''
            })
        }
    }
}
</script>
