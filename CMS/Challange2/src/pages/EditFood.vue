<script>
    import FoodForm from '../components/FoodForm.vue';

    export default {
        components: {
            FoodForm
        },
        props: ['editFoodData', 'categories'],
        emits: ['submitForm'],
        methods: {
            logger() {
                console.log();
            },
            submitForm(newData) {
                this.$emit('submitForm', newData)
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
                    <h2>Edit Food</h2>
                </div>
            </div>
            <div class="flex justify-center mt-12">
                <FoodForm 
                    :editFoodData="editFoodData" @submitForm="submitForm"
                    :categories="categories" 
                    :buttonName="'Edit Food'"
                    @switchPage="switchPage"
                />
            </div>
            
        </div>
        <!-- <div>
            <p>{{ editFoodData }}</p>
        </div> -->
    </div>
</template>

<style>

</style>