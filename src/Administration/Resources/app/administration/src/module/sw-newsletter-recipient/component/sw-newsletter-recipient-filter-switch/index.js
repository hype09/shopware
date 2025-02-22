import template from './sw-newsletter-recipient-filter-switch.html.twig';

/**
 * @package buyers-experience
 */

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default {
    template,

    emits: ['update:value'],

    props: {
        id: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            required: false,
            default: '',
        },

        group: {
            type: String,
            required: false,
            default: null,
        },
    },

    methods: {
        onChange(value) {
            this.$emit('update:value', { id: this.id, group: this.group, value });
        },
    },
};
