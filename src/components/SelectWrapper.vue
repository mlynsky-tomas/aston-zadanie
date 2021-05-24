<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
        <md-field>
            <label :for="id">{{ label }}</label>
            <md-select v-model="select" :name="id" :id="id" :required="required" :multiple="multiple" @md-selected="updateForm(id, select)">
                <md-option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.name }}
                </md-option>
            </md-select>
        </md-field>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectWrapper',
    props: {
        id: String,
        label: String,
        options: Array,
        default: String,
        required: Boolean,
        multiple: Boolean
    },
    data: () => ({
      select: ''
    }),
    methods: {
        updateForm: function (name, value) {
            this.$store.commit("updateForm", {name, value})
        }
    }
}
</script>

<style>
</style>