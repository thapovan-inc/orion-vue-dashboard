import Vue from 'vue';
import AppFooter from '@/components/AppFooter';

describe('AppFooter.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(AppFooter);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.copyright').textContent)
            .to.equal('Copyright © 2017 Snap Interactive, Inc. All Rights Reserved.');
    });
});
