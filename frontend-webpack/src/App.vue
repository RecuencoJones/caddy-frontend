<template>
  <main>
    Hello, world!
    Backend version: {{ version || 'unknown' }}

    <ul v-if="starships">
      <li v-for="starship of starships" :key="starship.url">
        {{ starship.name }}
      </li>
    </ul>

  </main>
</template>

<script>
export default {
  data() {
    return {
      version: null,
      starships: null
    };
  },
  mounted() {
    fetch('/api/starships/')
      .then((r) => r.json())
      .then(({ results }) => {
        this.starships = results
      })

    fetch('/bff/version')
      .then((r) => r.json())
      .then(({ version }) => {
        this.version = version
      })
  }
}
</script>
