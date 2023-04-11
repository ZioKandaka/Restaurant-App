<script>
export default {
    props: ['log', 'index'],
    emits: [],
    components: {

    }
}
</script>

<template>
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ log.name }}</td>
        <td class="flex justify-center h-full">{{ log.description }}</td>
        <td>{{ log.formattedTime }}</td>
        <td>{{ log.updatedBy }}</td>
    </tr>
</template>

<style></style>