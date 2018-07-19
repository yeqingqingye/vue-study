let myAll = {
    template: '#all',
    created() {
    }
};

let myDoc = {
    template: '#doc'
};

let myPhoto = {
    template: '#photo'
};

let myVideo = {
    template: '#video'
};

let myMusic = {
    template: '#music'
};

let routes = [
    {
        path: '/all',
        component: myAll
    },
    {
        path: '/doc',
        component: myDoc
    },
    {
        path: '/photo',
        component: myPhoto
    },
    {
        path: '/video',
        component: myVideo
    },
    {
        path: '/music',
        component: myMusic
    },
    {
        path: '', redirect: '/all'
    }
];

let router = new VueRouter({
    routes
});

let vm = new Vue({
    el: '#app',
    data: {
        appName: '我的云盘',
        showType: 'all'
    },
    methods: {
        changeShowType(val) {
            this.showType = val;
        },
        getFile(e) {
            console.log(e.target.files[0]);
        }
    },
    router,
});