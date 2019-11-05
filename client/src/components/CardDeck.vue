<template>
  <div>
    <h1>CardDeck</h1>
    <b-col>
      <Card></Card>
    </b-col>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

@Component({ components: { Card } })
export default class CardDeck extends Vue {}
</script>
