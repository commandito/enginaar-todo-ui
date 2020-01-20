<template>
  <div class="home">
    <h1 class="subheading grey--text">Team</h1>
    <v-container fluid class="my-5">
        <v-row>
          <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.id"> 
              <v-card outlined class="text-center ma-3">
                <v-responsive class="pt-4">
                  <v-avatar size="100" class="grey lighten-2">
                    <img :src="person.avatar" />
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="subheading">{{person.name}}</div>
                  <div class="grey--text">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="grey">
                    <v-icon small left>mdi-message</v-icon>
                    <span>Message</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {id:1, name: "Kenan", role: "Developer", avatar: "/sf6.jpg"},
        {id:2, name: "Kerim", role: "Security", avatar: "/sf6.jpg"},
        {id:3, name: "Kemal", role: "Auditer", avatar: "/sf6.jpg"},
        {id:3, name: "Kemal", role: "Auditer", avatar: "/sf6.jpg"}
      ]
    }
  }
};
</script>
