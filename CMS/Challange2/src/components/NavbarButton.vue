<script>
    export default {
        props: ['buttonName', 'buttonRef'],
        emits: [],
        data () {
            return {
                ref: this.buttonRef
            }
        },
        methods: {
            switchPage(to) {
                this.$emit('switchPage', to)
            }
        }
    }
</script>

<template>
    <button class="btn btn-sm" @click.prevent="switchPage(this.ref)">{{ buttonName }}</button>
</template>

<style>

</style>