<template>
  <v-container>
    <AbschnittTitel titel="Unsere Qualifikationen" />

    <v-row
      justify="center"
    >
      <v-col
        cols="auto"
      >
        <v-img
          class="rounded"
          src="@/assets/images/qualifikationen.jpg"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>
            Unsere Qualifikationen
          </v-card-title>
          <v-card-text>
            <p>Um unseren Kunden eine möglichst optimale Betreuung im Maschinenbaubereich bieten zu können, ist neben der langjährigen Erfahrung auch ein entsprechender Ausbildungsstand erforderlich. Deshalb vereinen wir unter unserem Dach folgende Qualifikationen:</p>

            <p>Meister des Feinwerkmechanikerhandwerks, Staatl. gepr. Techniker Maschinentechnik Schwerpunkt allgemeiner Maschinenbau, Maschinenschlosser mit Weiterbildung CNC-Dreh- und Frästechnik, Industriemechaniker Maschinen- und Systemtechnik</p>

            <p>Damit die Zusammenarbeit in jedweder Hinsicht zu einem positiven Ergebnis führt, wird der Einsatz jedes Mitarbeiters in seinem gewünschten Arbeitsfeld angestrebt. Dies hat eine positive Wirkung auf jeden Mitarbeiter. Die Bereitschaft den Kollegen und seine Arbeit wert zu schätzen steigt und verbessert das Betriebsklima. Die größtmögliche Identifikation des Einzelnen mit seinem Arbeitsfeld kommt so letztendlich der Qualität zugute.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import AbschnittTitel from '@/components/AbschnittTitel.vue';
export default Vue.extend({
  components: { AbschnittTitel },
});
</script>
