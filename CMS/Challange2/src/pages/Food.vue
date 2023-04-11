<script>
import TableRowFood from '../components/TableRowFood.vue'

export default {
    components: {
        TableRowFood
    },
    props: ['food'],
    emits: ['switchPage', 'changeEditId', 'statusChange'],
    data() {
        return {
            
        }
    },
    methods: {
        switchPage(to) {
            this.$emit('switchPage', to)
        },
        changeEditId(id) {
            this.$emit('changeEditId', id)
        },
        statusChange(value) {
            this.$emit('statusChange', value)
        }
    }
}
</script>

<template>
    <div class="bg-slate-300 flex justify-center pb-10">
        <div class="w-92 bg-sky-50 rounded-3xl">
            <div id="top-food" class="flex justify-around w-full p-5 font-bold text-2xl bg-slate-700"
                style="border-radius: 24px 24px 0px 0px; color: white;">
                <div>
                    <h2>Foods</h2>
                </div>
            </div>
            <div id="table-food" class="">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th style="max-width: 500px;">Description</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRowFood v-for="(food, index) in food" :key="food.id" :food="food" :index="index" @switchPage="switchPage"
                        @changeEditId="changeEditId"
                        @statusChange="statusChange"
                        />
                    </tbody>
                </table>
            </div>
            <div class="" style="margin-left: 145px; margin-top: 30px;">
                <button class="btn btn-primary bg-slate-700 mb-8" style="color: white;" @click="switchPage('addFood')">Add
                    Food</button>
            </div>
        </div>
    </div>
</template>

<style></style>