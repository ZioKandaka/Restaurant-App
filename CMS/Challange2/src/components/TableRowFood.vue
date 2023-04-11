<script>
export default {
    props: ["food", "index"],
    emits: ['switchPage', 'statusChange'],
    data() {
        return {
            UserId: localStorage.getItem('userId'),
            foodAuthorId: this.food.authorId,
            role: localStorage.getItem('role')
        }
    },
    methods: {
        switchPage(to) {
            this.$emit('switchPage', to)
        },
        changeEditId(id) {
            this.$emit('changeEditId', id)
        },
        logger(id) {
            console.log(id);
        },
        statusChange(event) {
            // console.log(event.target.value, '<<<<<<<');
            this.$emit('statusChange', {
                status: event.target.value,
                id: this.food.id
            })
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ food.name }}</td>
        <td><img :src="food.imgUrl" alt="foodPic" style="width: 130px; border-radius: 15px;"></td>
        <td>{{ food.description }}</td>
        <td>{{ food.price }}</td>
        <td>{{ food.User.email }}</td>
        <td>
            <div class="flex justify-center h-full">
                <div v-if="role === 'admin'">
                    <select @change="statusChange($event)" name="status" id="status-food" 
                    class="select select-bordered w-auto">
                        <option value="active" :selected="food.status === 'active'">Active</option>
                        <option value="inactive" :selected="food.status === 'inactive'">Inactive</option>
                        <option value="archive" :selected="food.status === 'archive'">Archive</option>
                    </select>
                </div>
                <div v-if="role !== 'admin'">
                    <p>{{ food.status }}</p>
                </div>
            </div>
        </td>
        <td>
            <div v-if="role === 'admin' || UserId == foodAuthorId">
                <button @click="changeEditId(food.id)" class="btn btn-warning" >Edit</button>
            </div>
        </td>
    </tr>
</template>

<style scoped></style>