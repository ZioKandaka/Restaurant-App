<script>
import TableRowCategories from '../components/TableRowCategories.vue';

export default {
    components: {
        TableRowCategories
    },
    props: ['categories'],
    emits: ['switchPage', 'deleteCategory', 'editCategory'],
    methods: {
        switchPage(to) {
            this.$emit('switchPage', to)
        },
        deleteCategory(id) {
            this.$emit('deleteCategory', id)
        },
        editCategory(id) {
            this.$emit('editCategory', id)
        }
    }
}
</script>

<template>
    <div class="h-full w-full min-h-screen bg-slate-300 flex justify-center">
        <div class="w-5/6 h-5/6 bg-sky-50 rounded-3xl">
            <div id="top-food" class="flex justify-around w-full p-5 font-bold text-2xl bg-slate-700"
                style="border-radius: 24px 24px 0px 0px; color: white;">
                <div>
                    <h2>Categories</h2>
                </div>
            </div>
            <div id="table-food" class="flex justify-center w-full">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th class="flex justify-center" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRowCategories v-for="(category, index) in categories" :key="category.id" :category="category" :index="index"
                        @deleteCategory="deleteCategory"
                        @switchPage="switchPage"
                        @editCategory="editCategory"
                         />
                    </tbody>
                </table>
            </div>
            <div class="" style="margin-left: 245px; margin-top: 30px;">
                <button class="btn btn-primary bg-slate-700 mb-12" style="color: white;"
                @click="switchPage('addCategory')"
                >Add Category</button>
            </div>
        </div>
    </div>
</template>

<style></style>