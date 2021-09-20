<template>
  <div>
    <br />
    <h2>Form</h2>
    <v-form>
      <v-text-field  v-model="id" label="Id"></v-text-field>
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn @click="submit({ id, name, email, password })">{{
        id ? "Edit" : "Submit"
      }}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.user.id;
      },
      set(value) {
        this.$store.commit("user/setId", value);
      },
    },
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("user/setName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("user/setEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        this.$store.commit("user/setPassword", value);
      },
    },
  },
  methods: {
    async submit(user) {
      if (user.id) {
        await this.$axios.put("http://localhost:4000/users/" + user.id, {
          name: user.name,
          email: user.email,
        });
      } else {
        await this.$axios.post("http://localhost:4000/users/signup", {
          name: user.name,
          email: user.email,
          password: user.password,
        });
      }
      this.resetUser({ id: 0, name: "", email: "", password: "" });
      this.$store.commit(
        "users/storeData",
        (await this.$axios.get("http://localhost:4000/users")).data
      );
    },
    resetUser(user) {
      this.$store.commit("user/setId", user.id);
      this.$store.commit("user/setName", user.name);
      this.$store.commit("user/setEmail", user.email);
      this.$store.commit("user/setPassword", user.password);
    },
  },
};
</script>

<style>
</style>