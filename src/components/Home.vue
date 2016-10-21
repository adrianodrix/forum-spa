<template>
    <div>
        <div class="panel panel-default" v-for="section in sections">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <router-link :to="{ name: 'topics', params: { sectionId: section.id } }">
                    #{{ section.id }}
                    {{ section.title }}
                    </router-link>
                </h3>
            </div>
            <div class="panel-body">
                {{ section.description }}
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
            sections: []
        }
    },

    mounted () {
        store.getSections().then(sections => {
            this.sections = sections
        })
    }
}
</script>
