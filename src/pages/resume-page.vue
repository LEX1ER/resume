<template>
  <q-page>
    <div class="row">
      <div class="col col-4 bg-primary text-white">
        <div class="q-py-md">
          <div class="text-h4 text-bold text-center" v-html="json.name" />
          <div class="q-pa-md">
            <q-img :src="`/image/${json.image}`"></q-img>
          </div>
          <div class="text-h6 text-normal text-center" v-html="json.position" />
        </div>
        <div v-for="(detail, i) in json.details" :key="`detail${i}`">
          <div
            class="text-h5 text-bold bg-primary-5 q-pa-sm"
            v-html="detail.title"
          />
          <div class="q-pt-md q-pb-lg">
            <div
              class="q-pa-sm"
              v-for="(article, j) in detail.articles"
              :key="`article${j}`"
            >
              <strong v-html="article.label" />
              <div v-html="article.text" v-if="article.text" />
              <div class="text-right" v-else>
                <q-rating
                  readonly
                  v-model:model-value="article.rating"
                  :icon="[
                    'sentiment_very_dissatisfied',
                    'sentiment_dissatisfied',
                    'sentiment_neutral',
                    'sentiment_satisfied',
                    'sentiment_very_satisfied',
                  ]"
                  color="white"
                />
                <div v-html="ratings[article.rating - 1]"></div>
              </div>
            </div>
          </div>
        </div>

        <br v-for="i in 50" :key="`br${i}`" />
      </div>

      <div class="col col-8 q-pa-md">
        <div class="row q-col-gutter-md">
          <div v-html="json.bio?.description" class="col col-12"></div>
          <div
            v-for="(data, i) in json.bio?.data"
            :key="`data${i}`"
            class="col col-12"
          >
            <q-separator color="primary"></q-separator>
            <div class="text-h6 q-py-sm text-primary">{{ data.label }}</div>
            <q-separator color="primary"></q-separator>

            <div class="row q-col-gutter-sm q-pt-md">
              <div
                v-for="(detail, i) in data.details"
                :key="`bioDataDetail${i}`"
                class="col col-12"
              >
                <div class="row q-col-gutter-x-md">
                  <div class="col col-12 text-italic" v-html="detail.text" />
                  <div class="col col-3" v-html="detail.date" />
                  <div class="col col-9">
                    <div class="text-h7" v-html="detail.label" />
                    <div class="text-italic" v-html="detail.description" />
                    <div>
                      <ul>
                        <li
                          v-for="(message, j) in detail.messages"
                          :key="`message${j}`"
                          v-html="message"
                        ></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type data from './data';
type JSON = typeof data;

const id = useRouter().currentRoute.value.params.id;
const json = ref({} as JSON);

const ratings = [
  'Basic',
  'Average',
  'Good',
  'Very Good',
  'Excellent',
] as string[];

import('./' + id + '.json').then((module) => {
  json.value = module.default;
});
</script>

<style lang="scss" scoped>
.text-h7 {
  font-size: medium;
  font-weight: bold;
}
</style>
