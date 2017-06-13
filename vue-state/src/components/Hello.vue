<template>
  <div class="container">
    <div class="row text-center">
        <h3>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</h3>
        <button class="btn btn-success" @click="increment">+</button>
        <button class="btn btn-danger" @click="decrement">-</button>
        <button class="btn" @click="incrementIfOdd">Increment if odd</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
      'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    

  ])
  
}
</script>