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
          src="http://www.kleinschmidt-maschinenbau.de/bilder/headlines/kontakt.jpg"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card>
          <v-card-title>
            Karl Kleinschmidt Maschinenbau e.K.
          </v-card-title>
          <v-card-text>
            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Mönchebergstraße 34 - 36</v-list-item-title>
                  <v-list-item-title>34125 Kassel</v-list-item-title>
                  <v-list-item-subtitle>Postanschrift</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item href="tel:+49561872666">
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-phone
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>0561 / 872666</v-list-item-title>
                  <v-list-item-subtitle>Tel:</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-fax
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>0561 / 8709296</v-list-item-title>
                  <v-list-item-subtitle>Fax:</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item href="mailto:info@kleinschmidt-maschinenbau.de">
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-email
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>info@kleinschmidt-maschinenbau.de</v-list-item-title>
                  <v-list-item-subtitle>E-Mail</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item href="http://www.kleinschmidt-maschinenbau.de">
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-web
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>www.kleinschmidt-maschinenbau.de</v-list-item-title>
                  <v-list-item-subtitle>Webseite</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset />

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title> Bürgistraße 23</v-list-item-title>
                  <v-list-item-title>34125 Kassel</v-list-item-title>
                  <v-list-item-subtitle>Lieferanschrift</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card>
          <v-card-title>
            Anfahrt
          </v-card-title>
          <v-card-text>
            <v-img
              src="http://maps.google.com/maps/api/staticmap?center=51.324250,9.510450&zoom=15&markers=51.324250,9.510450&size=460x360&sensor=false"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>
