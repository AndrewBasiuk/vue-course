<template>
    <b-alert show>{{ msg }}</b-alert>
</template>

<script>
export default {
    name: "myComponent",
    props: {
        msg: String
    }
}
</script>

