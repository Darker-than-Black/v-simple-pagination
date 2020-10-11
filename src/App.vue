<template>
  <div class="container">
    <v-simple-pagination
      :current="currentPage"
      :per-page="perPage"
      :total="total"
      @update-page="getData"
    >
      <template v-slot:prevPage>PREV</template>
      <template v-slot:nextPage>NEXT</template>
      <template v-slot:breakView>...</template>
    </v-simple-pagination>

    <ul class="list">
      <li v-for="img in photos" :key="img.id" class="list__item">
          <img :src="img.webformatURL" :alt="img.id" class="list__img" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    /**
     * @typedef ImageType
     * @param {number} id
     * @param {string} webformatURL
     */
    /**
     * @param {ImageType[]}
     */
    photos: [],
    /**
     * @param {number}
     */
    total: 0,
    /**
     * @param {number}
     */
    perPage: 19,
    /**
     * @param {number}
     */
    currentPage: 1,
  }),

  mounted() {
    this.getData(this.currentPage)
  },

  methods: {
    /**
     * @param {number} page
     * @returns {Promise<void>}
     */
    async getData(page) {
      try {
        const response = await fetch(this.getUrl(page))
        const data = await response.json()
        this.photos = data.hits
        this.total = data.totalHits
        this.currentPage = page
      } catch (err) {
        console.error(err)
      }
    },

    /**
     * @param {number} page
     * @returns {URL}
     */
    getUrl(page) {
      const url = new URL('https://pixabay.com/api/')
      const params = {
        key: '18632235-225bcc434ebaee33e53a4b891',
        image_type: 'photo',
        category: 'places',
        per_page: this.perPage,
        page,
      }

      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      )

      return url
    },
  },
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
}

.active {
  border: 2px solid red;
}

.list {
  margin: 1.5em auto;
  max-width: 768px;
  column-gap: 1.5em;
  list-style: none;
  padding: 1em;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.list__item {
  margin: 0 0 0.5em;
}

.list__img {
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  height: auto;
}

@media only screen and (min-width: 1024px) {
  .list {
    column-count: 4;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .list {
    column-count: 3;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .list {
    column-count: 2;
  }
}
</style>
