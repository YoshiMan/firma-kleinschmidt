<template>
  <v-container>
    <v-row
      justify="center"
    >
      <v-col
        cols="auto"
      >
        <v-img
          class="rounded"
          src="http://www.kleinschmidt-maschinenbau.de/bilder/headlines/zielgruppe.jpg"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Unser Leistungsangebot ist auf den Bedarf im Maschinenbau in der Region ausgerichtet. Dabei arbeiten wir unter anderem für Kunden aus folgenden Bereichen der Wirtschaft:
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>
            Industrie
          </v-card-title>
          <v-card-text>
            <v-list-item
              v-for="(item, index) in industriePartner"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <p>Außerdem unterstützen wir mit unserem technischen Knowhow Hochschulen bei Entwicklungs- und Forschungsprojekten.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>
            Handwerk
          </v-card-title>
          <v-card-text>
            <v-list-item
              v-for="(item, index) in handwerkPartner"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-img
          class="rounded"
          src="http://www.kleinschmidt-maschinenbau.de/bilder/einzelbilder/zielgruppe.jpg"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
const industriePartner = [
  'Automobilindustrie',
  'Kunststoffindustrie',
  'Papierindustrie',
  'Lebensmittelindustrie',
  'Bauindustrie',
  'Wehrtechnik',
  'Logistik',
];

const handwerkPartner = [
  'Maschinenbau',
  'Schlosserei',
  'Druckerei',
  'Steinmetz',
  'Schreinerei',
];

export default Vue.extend({
  data() {
    return {
      industriePartner,
      handwerkPartner,
    };
  },

});
</script>
