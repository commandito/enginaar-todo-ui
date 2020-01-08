<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app  fixed class="primary">
             <v-list>
                 <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon >
                            <v-icon v-text="link.icon" class="white--text"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                 </v-list-item-group>
             </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon color="grey" class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text">
                <span class="font-weight-light">Enginaar</span>
                <span class="font-weight-dark text-uppercase">Todo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: "mdi-view-dashboard", text: "Dashboard", route: "/"},
                {icon: "mdi-folder", text: "My Projects", route: "/projects"},
                {icon: "mdi-account", text: "Team", route: "/team"},
            ]
        }
    }
}
</script>