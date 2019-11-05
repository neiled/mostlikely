<template>
  <b-card
    title="Who is most likely"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    class="mx-auto"
  >
    <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class Card extends Vue {}
</script>
