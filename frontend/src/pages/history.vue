<template>
    <v-content>
        <v-container fluid>
            <v-layout align-center>
                <v-flex>
                    <v-card class="elevation-5">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>History</v-toolbar-title>
                        </v-toolbar>

                        <v-data-table :headers="headers" :items="pastes" :rows-per-page-items="page_control">
                            <template slot="items" slot-scope="props">
                        <router-link tag="tr" :to="'/' + props.item.id">
                            <td>{{ props.item.id }}</td>
                            <td>{{ props.item.title }}</td>
                            <td>{{ props.item.author }}</td>
                            <td>{{ props.item.time }}</td>
                        </router-link>
</template>
</v-data-table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "History",
        data() {
            return {
                headers: [
                    { text: 'ID', value: 'id'},
                    { text: 'Title', value: 'title'},
                    { text: 'Author', value: 'author'},
                    { text: 'Time', value: 'time'}
                ],

                pastes: [
                    { id: 1, title: 'Hydrogen', author: 'H', time: new Date("2019/1/24 21:00") },
                    { id: 2, title: 'Helium', author: 'He', time: new Date("2019/1/24 21:01") },
                    { id: 3, title: 'Lithium', author: 'Li', time: new Date("2019/1/24 21:02") },
                    { id: 4, title: 'Beryllium', author: 'Be', time: new Date("2019/1/24 21:03") },
                    { id: 5, title: 'Boron', author: 'B', time: new Date("2019/1/24 21:04") }
                ],

                page_control: [10,15,25]

            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>