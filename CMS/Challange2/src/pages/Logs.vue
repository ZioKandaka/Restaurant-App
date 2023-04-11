<script>
    import HistoryRow from '../components/HistoryRow.vue';

    export default {
        props: ['history'],
        emits: [],
        components: {
            HistoryRow
        }
    }
</script>

<template>
    <div class="h-full w-full bg-slate-300 flex justify-center items-center">
        <div class="w-5/6 h-5/6 bg-sky-50 rounded-3xl mb-16">
            <div id="top-food" class="flex justify-around w-full p-5 font-bold text-2xl bg-slate-700"
                style="border-radius: 24px 24px 0px 0px; color: white;">
                <div>
                    <h2>Change Logs</h2>
                </div>
            </div>
            <!-- <div class="" style="margin-left: 245px; margin-top: 30px;">
                <button class="btn btn-primary bg-slate-700" style="color: white;">Filter Name</button>
                <input type="text" name="searchLog" id="" class="input input-bordered ml-3">
            </div> -->
            <div id="table-food" class="flex justify-center w-full">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th class="flex justify-center">Description</th>
                            <th>Created At</th>
                            <th>Updated By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <HistoryRow v-for="(log, index) in history" :log="log" :index="index" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>

</style>