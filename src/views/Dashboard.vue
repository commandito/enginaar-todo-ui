<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Sort projects by project names</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs2 sm4 md2>
            <div class="caption grey--text">Due Date</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs2 sm4 md2>
            <div>
              <v-chip small :class="`${project.status} white--text caption`">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Enginaar todo 1",
          person: "kenan",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."
        },
        {
          title: "Seçiniz UI",
          person: "Person 2",
          due: "2st Jan 2020",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."
        },
        {
          title: "Hasscript sorular",
          person: "Herkes",
          due: "3st Jan 2020",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."
        },
        {
          title: "Enginaar.com blog",
          person: "admin",
          due: "4st Jan 2020",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.project {
  margin-left: 0;
}
.project.complete {
  border-left: 4px solid #3cd2c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: orange !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>