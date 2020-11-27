<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="success">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3>Add a new project</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
          <v-menu
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="due"
                label="Due date"
                prepend-icon="mdi-calendar-range"
                readonly
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @input="dateMenu = false"></v-date-picker>
          </v-menu>
          <v-btn text class="success" @click="submit()" :loading="loadingProject">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      title: "",
      content: "",
      due: new Date().toISOString().substr(0, 10),
      inputRules: [
          v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loadingProject: false
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
          this.loadingProject = true;
          const project = {
              title: this.title,
              content: this.content,
              due: this.due,
              person: 'Enginaar',
              status: 'ongoing'
          }

          db.collection('projects').add(project)
            .then(() => {
                alert("Added to db"); 
                this.loadingProject = false;
                });

      }
    }
  }
};
</script>

<style>
</style>