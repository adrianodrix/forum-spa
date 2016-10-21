<template>
    <div>
        <div class="media" v-for="topic in topics">
            <div class="media-left">
                <router-link :to="{ name: 'topic', params: { topicId: topic.id } }">
                    <img class="media-object" :src="topic.user.data.avatar" :alt="topic.user.data.username">
                </router-link>
            </div>
            <div class="media-body">
                <router-link :to="{ name: 'topic', params: { topicId: topic.id } }">
                    <h4 class="media-heading">{{ topic.title }}</h4>
                </router-link>
                <p class="text-muted">Posted by {{ topic.user.data.username }} in {{ topic.diffForHumans }}</p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import store from '../store'

export default {
    data () {
        return {
            topics: []
        }
    },

    mounted () {
        store.getTopicsBySection(this.$route.params.sectionId).then(topics => {
            this.topics = topics
        })
    }
}
</script>