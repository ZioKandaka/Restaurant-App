<script>
    import NavbarButton from '../components/NavbarButton.vue';
    export default {
        components: {
            NavbarButton
        },
        props: ['username'],
        emits: ['switchPage', 'logout'],
        methods: {
            switchPage(to) {
                this.$emit('switchPage', to)
            },
            logout() {
                this.$emit('logout')
            }
        }
    }
</script>

<template>
    <div class="navbar h-10 flex justify-around bg-slate-300" id="navbar">
        <div style="display: flex; flex-direction: row; align-items: center; column-gap: 20px;">
            <NavbarButton
                :buttonName="'Dashboard'"
                :buttonRef="'dashboard'"
                @switchPage="switchPage"
             />
             
            <NavbarButton
                :buttonName="'Food'"
                :buttonRef="'food'"
                @switchPage="switchPage"
             />
            <NavbarButton
                :buttonName="'Categories'"
                :buttonRef="'category'"
                @switchPage="switchPage"
             />
            <NavbarButton
                :buttonName="'Logs'"
                :buttonRef="'log'"
                @switchPage="switchPage"
             />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; column-gap: 20px;">
            <div class="flex items-center bg-slate-50 h-8 rounded-md">
                <p class="navbar">Hey, {{username}}</p>
            </div>
            <button class="btn btn-sm" @click="logout" >Logout</button>
        </div>
    </div>
</template>

<style>

</style>