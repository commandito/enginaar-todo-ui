<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
       <v-card flat v-for="project in projects" :key="project.title">
         <v-layout wrap :class="`pa-3 project ${project.status}`">
           <v-flex xs12 md6>
             <div class="caption grey--text">Project title</div>
             <div>{{project.title}}</div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>{{project.person}}</div>
           </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Due Date</div>
              <div>{{project.due}}</div>
           </v-flex>
            <v-flex xs2 sm4 md2>
              <div>
                <v-chip small :class="`${project.status} white--text caption`">{{project.status}}</v-chip>
              </div>
           </v-flex>
         </v-layout>
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
        {title: "Title 1", person: "Person 1", due: "1st Jan 2020", status: "ongoing", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."},
        {title: "Title 2", person: "Person 2", due: "2st Jan 2020", status: "complete", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."},
        {title: "Title 3", person: "Person 3", due: "3st Jan 2020", status: "complete", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."},
        {title: "Title 4", person: "Person 4", due: "4st Jan 2020", status: "overdue", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis quisquam! Nemo corporis, velit, placeat perspiciatis sapiente temporibus maxime consequuntur optio tempore eos iusto, repudiandae nihil! Sint nesciunt molestiae suscipit."}
      ]
    }
  }
}
</script>

<style>
.project.complete{
  border-left:4px solid #3cd2c2;
}

.project.ongoing{
  border-left:4px solid orange;
}

.project.overdue{
  border-left:4px solid tomato;
}

.v-chip.complete{
  background:#3cd1c2!important;
}

.v-chip.ongoing{
   background: orange!important;
}

.v-chip.overdue{
   background:tomato!important;
}



</style>