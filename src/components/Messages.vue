<template>
    <v-container>
        <v-alert
            outlined
            prominent
            type="warning"
            v-if="alertMessage"
        >{{alertMessage}}</v-alert>
         <v-row no-gutters>
            <v-col
                cols="12"
                sm="12"
            >
                <v-card class="pa-12" >
                    <h2 class="text-center">Nova mensagem</h2>
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
                            <p>Imagem, documento, áudio, etc</p>
                            <v-radio-group v-model="media" row>
                                <v-radio
                                    label="Não"
                                    value="0"
                                ></v-radio>
                                <v-radio
                                    label="Sim"
                                    value="1"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>     
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="message"
                                label="Mensagem"
                                maxlength=255
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                           <v-btn
                                block
                                color="primary"
                                elevation="2"
                                large
                                v-on:click="create()"
                            >Enviar</v-btn>
                        </v-col>                     
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MessageService from "../services/MessageService";   
    export default {
        name: "Messages",
        data () {
            return {
                people: MessageService.people,
                from: 0,
                target_id: 0,
                message: '',
                media: null,
                alertMessage: ''
            }
        },
        methods: {
            create() {                
                this.alertMessage = "";
                if (!this.from) {
                    this.alertMessage = "Favor preencher quem sera o responsável pelo envio!";
                    return;
                }
                if (!this.target_id) {
                    this.alertMessage = "Favor preencher quem ira receber!";
                    return;
                }
                MessageService.create({
                    from: this.from,
                    target_id: this.target_id,
                    message: this.message,
                    media: this.media
                })
                .then(response => {
                    if (response.data.data.error) {
                        this.alertMessage = response.data.data.message;
                        return;
                    }
                    location.reload();
                })
                .catch(error => {
                    this.alertMessage = error.response.status == 400 ? error.response.data.message : 'Erro interno ;(';
                });
            }    
        }
    }
</script>
