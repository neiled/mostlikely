<template>
  <b-card
    title="Who is most likely to..."
    img-src="https://picsum.photos/300/150/"
    img-alt="Image"
    img-top
    tag="article"
    class="mx-auto"
  >
    <b-card-text>...{{ message }}</b-card-text>

    <b-button href="#" v-on:click="$emit('next')" variant="primary">Next</b-button>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class Card extends Vue {
  @Prop({ default: "No Message" }) readonly message!: string;
}
</script>
