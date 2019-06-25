<template>
    <div>
        <v-content>
            <v-container fluid>
                <v-layout align-center>
                    <v-flex>
                        <v-card class="elevation-5">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Paste #{{ $route.params.id }}</v-toolbar-title>
                            </v-toolbar>

                            <v-card-text>
                                <pre v-highlightjs="code" style="white-space: pre-line"><code class="cpp"></code></pre>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import axios from 'axios';
    //import hljs from 'highlight.js';
    export default {
        name: "Content",

        data() {
            return {
                code: "No data"
            }
        },

        mounted() {
            axios
                .get('http://localhost:3000/post/' +  this.$route.params.id)
                .then(response => {
                    this.$data.code = response.data.content;
                });
        },

        components: {

        }
    }
</script>

<style scoped>
    code, pre {
        font-family: 'Consolas', "Noto Mono for Powerline", monospace;
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
    }
</style>