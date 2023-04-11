<script >
    import FoodForm from '../components/FoodForm.vue';

    export default {
        props: ['categories', 'editFoodData'],
        emits: ['submitForm'],
        components: {
            FoodForm
        },
        methods: {
            submitForm(data) {
                this.$emit('submitForm', data)
            },
            switchPage(to) {
                this.$emit('switchPage', to)
            }
        }
    }
</script>

<template>
    <div class="h-screen w-screen bg-slate-300 flex justify-center items-center">
        <div class="w-5/6 h-5/6 bg-sky-50 rounded-3xl">
            <div id="top-food" class="flex justify-around w-full p-5 font-bold text-2xl bg-slate-700"
                style="border-radius: 24px 24px 0px 0px; color: white;">
                <div>
                    <h2>Add New Food</h2>
                </div>
            </div>
            <div class="flex justify-center mt-12">
                <FoodForm 
                    :categories="categories"
                    :buttonName="'Add Food'"
                    @submitForm="submitForm"
                    @switchPage="switchPage"
                />
            </div>
        </div>
    </div>
</template>

<style>

</style>