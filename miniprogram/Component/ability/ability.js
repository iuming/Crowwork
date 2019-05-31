Component({
    options: {
        addGlobalClass: true
    },

    externalClasses: ['custom-class'],

    properties: {
        title: String,
        name: Object,
        fontClass:String,
    },

    methods: {
        onClick() {
            this.triggerEvent('click');
        }
    }
});
