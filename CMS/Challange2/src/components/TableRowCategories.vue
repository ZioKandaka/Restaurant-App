<script>
export default {
    props: ["category", "index"],
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
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ category.name }}</td>
        <td class="flex justify-center h-full">
            <div class="flex justify-evenly w-3/6">
                <button 
                @click="editCategory(category.id)" 
                class="btn btn-warning"
                >Edit</button>
                <button @click="deleteCategory(category.id)" class="btn btn-error ">Delete</button>
            </div>
        </td>
    </tr>
</template>

<style></style>