<template>
  <b-container>
    <h1>Most Likely</h1>
    <b-row>
      <CardDeck />
    </b-row>
  </b-container>
</template>

<script>
import CardDeck from "@/components/CardDeck.vue";

export default {
  name: "home",
  components: {
    CardDeck
  }
};
</script>
