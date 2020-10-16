# v-simple-paginate
[![NPM](https://nodei.co/npm/v-simple-paginate.png)](https://nodei.co/npm/v-simple-paginate/)

[![npm version](https://badge.fury.io/js/v-simple-paginate.svg)](https://badge.fury.io/js/v-simple-paginate)
[![Build Status](https://travis-ci.com/Darker-than-Black/v-simple-pagination.svg?branch=main)](https://travis-ci.com/Darker-than-Black/v-simple-pagination)

##### Vue.js (v2.x +) component for make pagination without default styles. This allows you to style the component as you wish.

## Installation

#### NPM
```js
$ npm i v-simple-paginate
```

#### YARN
```js
$ yarn add v-simple-paginate
```

#### CDN

```html
<!-- use the latest release -->
<script src="https://unpkg.com/v-simple-paginate@latest"></script>
<!-- or use the specify version -->
<script src="https://unpkg.com/v-simple-paginate@0.1.0"></script>
```

## Register the component

#### Global
- ES5
```js
var Vue = require('vue');
var Paginate = require('v-simple-paginate');
Vue.component('paginate', Paginate);
```

- ES6+
```js
import Vue from 'vue';
import Paginate from 'v-simple-paginate';
Vue.component('paginate', Paginate);
```

#### Local

```js
import Paginate from 'v-simple-paginate';

export default {
    components: { Paginate }
}
```

## Usage

**Basic Usage**

```html
<paginate
  :current="currentPage"
  :per-page="perPage"
  :total="total"
  @update-page="callback()"
/>
```

*Note*: In vue template, camelCase and kebab-case are both supported. For example, you can either use prop `page-count` or `pageCount`. They are leading to the same result.

So this is also available

```html
<paginate
  :current="currentPage"
  :perPage="perPage"
  :total="total"
  @updatePage="callback()"
/>
```

**Example**
```html
<template>
  <paginate
    :current="currentPage"
    :per-page="perPage"
    :total="total"
    @update-page="callback"
  />
</template>

<script>
export default {
  data: () => ({
    total: 500,
    perPage: 10,
    currentPage: 1,
  }),

  methods: {
    callback (pageNumber) => {
      console.log(pageNumber);
      ...
      this.currentPage = pageNumber;
    }
  }
}
</script>

<style lang="css">
.active {
    background-color: red;
}
</style>
```

## Props

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type | Required | Description |
| ----------------- | :--- | :--- | :--- |
| `current` | `Number` | **true** | Current page. |
| `perPage` | `Number` | **true** | Number of items per page. |
| `total` | `Number` | **true** | Total items. |
| `pageRange` | `Number` | false | The range of visible elements around the active page. **Default: 2** |
| `showPrevNext` | `Boolean` | false | Will the *previous* and *next* buttons be visible. **Default: true** |
| `activeClass` | `String` | false | CSS class name for active page element. **Default: 'active'** |
| `classes` | `Object` | false | An object with CSS classes to customization the component. |

##### **About props `classes`**

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Description |
| ----------------- | :--- |
| `wrapperClass` | CSS class name for wrapper the component. |
| `itemClass` | CSS class name for all items (buttons and break view). |
| `btnClass` | CSS class name for buttons class. |
| `breakViewClass` | CSS class name for break view.  |
| `prevNextClass` | CSS class name for *previous* and *next* buttons. |

Default:
```js
{
  wrapperClass: 'v-simple-pagination',
  itemClass: '',
  btnClass: '',
  breakViewClass: '',
  prevNextClass: '',
}
```

## Slots

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `prevContent` | Previous button |
| `nextContent` | Next button |
| `breakViewContent` | Break view indicator |

**Example**
```html
<paginate
  :current="currentPage"
  :perPage="perPage"
  :total="total"
  @updatePage="callback"
>
  <template v-slot:prevPage>PREV</template>

  <template v-slot:nextPage>NEXT</template>

  <template v-slot:breakView>...</template>
</paginate>
```

## Emit

**Emit:** `update-page` is a callback with the param `page number` to update the current page.

## License

[MIT](https://github.com/Darker-than-Black/v-simple-pagination/blob/main/LICENSE)
