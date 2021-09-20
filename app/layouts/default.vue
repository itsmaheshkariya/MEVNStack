<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar>
          <v-app-bar-title> Home </v-app-bar-title>
        </v-app-bar>
        <v-container justify="center" align="center">
          <client-only>
            <Nuxt />
          </client-only>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>