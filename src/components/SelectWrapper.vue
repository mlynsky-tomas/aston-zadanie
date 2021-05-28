<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">
        <md-field>
            <label :for="id">{{ label }}</label>
            <md-select v-model="getValue[id]" :name="id" :id="id" :required="required" :multiple="multiple">
                <md-option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.name }}
                </md-option>
            </md-select>
        </md-field>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    computed: {
        ...mapGetters(["getValue"])
    }
}
</script>