<template>
    <div class="event.Cards">
        <span>{{event.time}} on {{event.date}}</span>
        <h4>{{event.title}}</h4>
    </div>
</template>

<script>
export default {
    name:'Cards',
    props: {
        event: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>