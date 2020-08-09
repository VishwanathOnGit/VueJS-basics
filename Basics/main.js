var app = new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            { text: 'Learn JS'},
            { text: 'Learn PHP'},
            { text: 'Build something awesome' }
        ]
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: "Hello VueJS Here!"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});