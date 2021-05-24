<template>
    <v-container>
        <!-- Filto -->
        <v-row no-gutters>
            <v-col
                cols="12"
                sm="12"
            >
                <v-card class="pa-12" >
                    <h2 class="text-center">Filtros</h2>
                    <v-row>
                        <v-col cols="6">
                             <v-select
                                :items="people"
                                label="De"
                                v-model="from"
                            ></v-select>
                        </v-col>  
                        <v-col cols="6">
                             <v-select
                                :items="people"
                                label="Para"
                                v-model="target_id"
                            ></v-select>
                        </v-col>                        
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="message"
                                label="Mensagem"
                            ></v-text-field>
                        </v-col>                     
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                           <v-btn
                                block
                                color="primary"
                                elevation="2"
                                large
                                v-on:click="get({
                                    from: from,
                                    target_id: target_id,
                                    message: message
                                })"
                            >Pesquisar</v-btn>
                        </v-col>                     
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <!-- Table -->
        <v-row v-if="list">
            <v-col
                cols="12"
                sm="12"
            >
                <v-card class="pa-12" >
                     <h2 class="text-center">Lista de mensagens</h2>
                    <v-simple-table
                        fixed-header
                        height="300px"
                    >
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">
                                        Mensagem
                                    </th>
                                    <th class="text-center">
                                        Data/Hora
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="item in list"
                                :key="item.id"
                                >
                                    <td class="text-center">{{ item.message }}</td>
                                    <td class="text-center">{{ moment(item.createdAt).format('DD/MM/YYYY HH:mm:ss') }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MessageService from "../services/MessageService";
    import moment from 'moment';

    export default {
        name: "ListMessages",
        data () {
            return {
                people: MessageService.people,
                from: 0,
                target_id: 0,
                message: '',
                list: null,
                moment: moment,
                get: (data) => {
                    MessageService.list(data)
                        .then(response => {
                            if (!response.error) {
                                this.list = response.data.data;
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }
    }
</script>
