<script>
    import CategoryForm from '../components/CategoryForm.vue';
    export default {
        components: {
            CategoryForm
        },
        props: ['editCategoryData'],
        emits: ['switchPage', 'submitCategory'],
        methods: {
            switchPage(to) {
                this.$emit('switchPage', to)
            },
            submitCategory(data) {
                this.$emit('submitCategory', data)
            }
        }
    }
</script>

<template>
    <div class="h-screen w-screen bg-slate-300 flex justify-center items-center">
        <div class="w-5/6 h-5/6 bg-sky-50 rounded-3xl">
            <div id="top-category" class="flex justify-around w-full p-5 font-bold text-2xl bg-slate-700"
                style="border-radius: 24px 24px 0px 0px; color: white;">
                <div>
                    <h2>Edit Category</h2>
                </div>
            </div>
            <div class="flex justify-center mt-20">
                <CategoryForm 
                    :buttonName="'Edit Category'"
                    :editCategoryData="editCategoryData"
                    @switchPage="switchPage"
                    @submitCategory="submitCategory"
                />
            </div>
        </div>
    </div>
</template>

<style>

</style>