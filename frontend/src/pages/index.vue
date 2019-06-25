<template>
        <v-content>
            <v-container fluid>
                <v-layout align-center>
                    <v-flex>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>New Paste</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <v-btn slot="activator" icon large>
                                        <v-icon large>send</v-icon>
                                    </v-btn>
                                    <span>Paste!</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" name="poster" label="Poster" type="text"></v-text-field>
                                    <v-layout>
                                        <v-flex xs12><v-select id="format-selector" :items="formats" label="Syntax" prepend-icon="text_format"></v-select></v-flex>
                                        <v-flex xs12><v-select id="timer-selector" :items="expires" label="Expiration" prepend-icon="timer"></v-select></v-flex>
                                    </v-layout>
                                    <v-textarea id="content-area" prepend-icon="code" name="post-content" label="Content" auto-grow></v-textarea>
                                    <v-text-field prepend-icon="comment" name="title" label="Title (optional)" type="text"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn id="action-btn" color="primary" large onclick="">Paste!</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
</template>

<script>
    //import axios from 'axios';
export default {
  name: "Index",
  data: () => ({
    drawer: null,
    formats: ["Plain Text", "C/C++", "C#", "Java", "JavaScript", "Python"],
    expires: ["A day", "A week", "A month", "A year", "Never"]
  }),
  props: {
      source: String
  },
  methods: {

  }

};
</script>

<style>
    #content-area {
      max-height: 100%;
      font-family: monospace;
    }
    #action-btn {
      margin-left: 41px;
    }
</style>
