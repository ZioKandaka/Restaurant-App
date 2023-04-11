<script>
import { def } from '@vue/shared';

    export default {
        props: ['buttonName', 'editCategoryData'],
        emits: ['submitCategory', 'switchPage'],
        data() {
            return {
                name: ''
            }
        },
        methods: {
            submitCategory(newData) {
                this.$emit('submitCategory', newData)
            },
            switchPage(to) {
                this.$emit('switchPage', to)
            }
        },
        created() {
            if(this.editCategoryData) {
                this.name = this.editCategoryData.name
            }
        }
    }
</script>

<template>
    <div class="flex justify-center w-4/6 h-3/6 items-center text-2xl">
        <form @submit.prevent="submitCategory(this.name)" class="flex flex-col justify-center w-5/6">
            <label for="new-category-name">Name</label>
            <input type="text" name="new-category-name"
                id="new-category-name"
                class="input input-bordered input-info w-full mt-5"
                v-model="name"
            >
            <div class="flex justify-center items-center mt-12">
                <div style="margin: 20px;">
                    <button @click="switchPage('category')" class="btn btn-error">Cancel</button>
                </div>
                <div style="margin: 20px;">
                <button class="btn btn-info bg-cyan-400" type="submit">{{ buttonName }}</button>
            </div>
            </div>
        </form>
    </div>
</template>

<style></style>