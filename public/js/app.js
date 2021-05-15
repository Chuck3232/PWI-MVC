new Vue({
    el: '.pwi-app',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    },
    mounted() {
        const container = document.querySelector('.pwi-app');
        this.formLightbox = container.getAttribute('data-lightbox') === 'true';
    }
});