<script>
    export default {
        props: ['data']
    }
</script>

<template>
    <div class="w-full h-full min-h-screen bg-slate-300 flex justify-center">
        <div class="h-5/6 w-5/6 flex flex-col items-center bg-slate-200 rounded-3xl">
            <div class="w-full p-5 bg-slate-700 flex justify-center font-bold text-4xl" style="border-radius: 24px 24px 0px 0px; color: white;">
                <h2>Dashboard</h2>
            </div>
            <div class="w-full flex flex-row justify-center items-start bg-white h-full" style="border-radius: 0px 0px 24px 24px;">
                <div class="m-10 flex flex-col items-center justify-center border-double border-4 border-slate-700 rounded-lg p-10 font-bold text-2xl">
                    <h3>Total Foods</h3>
                    <p>{{ data.foodCount }}</p>
                </div>
                <div class="m-10 flex flex-col items-center justify-center border-double border-4 border-slate-700 rounded-lg p-10 font-bold text-2xl">
                    <h3>Total Categories</h3>
                    <p>{{ data.categoryCount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>