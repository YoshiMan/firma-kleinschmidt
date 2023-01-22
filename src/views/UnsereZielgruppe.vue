<template>
  <v-container>
    <AbschnittTitel titel="Unsere Zielgruppe" />
    <v-row
      justify="center"
    >
      <v-col
        cols="auto"
      >
        <v-img
          class="rounded"
          src="@/assets/images/zielgruppe.jpg"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        Unser Leistungsangebot ist auf den Bedarf im Maschinenbau in der Region ausgerichtet. Dabei arbeiten wir unter anderem für Kunden aus folgenden Bereichen der Wirtschaft:
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="6"
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
        cols="6"
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import AbschnittTitel from '@/components/AbschnittTitel.vue';
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
  components: { AbschnittTitel },
  data() {
    return {
      industriePartner,
      handwerkPartner,
    };
  },
});
</script>
