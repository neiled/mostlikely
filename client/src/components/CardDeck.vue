<template>
  <div class="mx-auto">
    <Card :message="current_message" v-on:next="next"></Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import "@/assets/cards";
import _ from "underscore";

@Component({ components: { Card } })
export default class CardDeck extends Vue {
  data() {
    return {
      current_card: 0,
      messages: _.shuffle(["Test1", "Test2", "Test3"]),
      current_message: "New Game"
    };
  }

  next() {
    if (this.$data.current_card >= this.$data.messages.length) {
      this.$data.current_card = 0;
    }
    this.$data.current_message = this.$data.messages[this.$data.current_card];
    this.$data.current_card++;
  }
}
</script>
