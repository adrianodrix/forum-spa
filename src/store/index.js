/* eslint-disable */

import Vue from '../main'

const store = {}

export default store

store.state = {
    topic: null
}

store.getSections = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        Vue.http.get('section').then(response => {
            resolve(response.data.data)
        })
    })
}

store.getTopicsBySection = (id) => {
    "use strict";
    return new Promise((resolve, reject) => {
        Vue.http({
            url: 'topic',
            'method': 'GET',
            params: {'section_id': id}
        }).then(response => {
            resolve(response.data.data)
        })
    })
}

store.getTopicById = (id) => {
    "use strict";
    return new Promise((resolve, reject) => {
        Vue.http.get('topic/' + id).then(
            response => {
                resolve(response.data.data)
            },
            reject => {
                reject(reject.data.data)
            }
        )
    })
}

store.replyToTopicById = (id, body) => {
    "use strict";
    return new Promise((resolve, reject) => {
        var data = {
            'body': body
        }

        Vue.http.post(
            'topic/'+ id +'/post',
            data
        ).then(
            response => {
                resolve(response.data.data)
            },
            reject => {
                reject(reject.data.data)
            }
        )
    })
}