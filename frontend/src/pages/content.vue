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
                                <pre v-highlightjs="sourcecode"><code class="javascript">{{ code }}</code></pre>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data() {
                return {
                    code: "\nfunction changeImage()\n" +
                        "{\n" +
                        "    element=document.getElementById('myimage')\n" +
                        "    if (element.src.match(\"bulbon\"))\n" +
                        "    {\n" +
                        "        element.src=\"/images/pic_bulboff.gif\";\n" +
                        "    }\n" +
                        "    else\n" +
                        "    {\n" +
                        "        element.src=\"/images/pic_bulbon.gif\";\n" +
                        "    }\n" +
                        "}\n"
                }
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