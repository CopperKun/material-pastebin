<template>
    <v-app id="app">
        <v-navigation-drawer
                v-model="drawer"
                clipped
                fixed
                app
        >
            <v-list dense>
                <v-list-tile
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.to"

                        avatar
                        class="v-list-item"
                >
                    <v-list-tile-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title
                            v-text="link.text"
                    />
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Material Pastebin</v-toolbar-title>
        </v-toolbar>

        <main>
            <v-container fluid>
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
            </v-container>
        </main>

    </v-app>
</template>

<script>
    export default {
        name: 'app',
        data: () => ({
            drawer: null,
            links: [
                {
                    to: '/',
                    icon: 'create',
                    text: 'New'
                },
                {
                    to: '/history',
                    icon: 'history',
                    text: 'History'
                }
            ]
        }),
        props: {
            source: String
        }
    }
</script>

<style>

</style>