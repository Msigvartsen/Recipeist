<template>
  <nav class="base-filter">
    <div class="nes-field base-filter-options">
      <label class="base-filter-search-label" for="query_field">Søk</label>
      <label class="base-filter-checkbox-label">
        <input type="checkbox" class="nes-checkbox" v-model="showFilters" />
        <span>Vis filter</span>
      </label>
      <input type="text" id="query_field" class="nes-input" v-model="query" />
    </div>

    <transition name="fade">
      <div class="base-filter-button-list" v-if="showFilters">
        <button
          v-for="filter in filters"
          :key="filter._id"
          @click="toggleFilter(filter._id)"
          class="nes-btn"
          :class="{ 'is-primary': activeFilters.includes(filter._id) }"
        >
          {{ filter.name }}
        </button>
      </div>
    </transition>

    <div class="base-filter-results">
      {{ heading }}
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="(item, i) in filteredItems" :key="i">
            <router-link v-if="item.slug" :to="`/${path}/${item.slug.current}`">
              {{ item.title || item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: { items: Array, filters: Array, heading: "", path: "" },
  data() {
    return { activeFilters: [], showFilters: false, query: "" }
  },
  computed: {
    //TODO: Generalize this. Now depends on 'filter._ref', 'filter._id', 'filter.name' and 'item.title'
    filteredItems() {
      if (!this.items) return []

      let items = this.items

      if (this.activeFilters.length > 0) {
        items = items.filter(x =>
          this.activeFilters.some(y => x.groupId === y || (x.cuisines && x.cuisines.some(z => z._ref === y)))
        )
      }

      if (this.query) {
        items = items.filter(
          x => (x.title || x.name) && (x.title || x.name).toLowerCase().includes(this.query.toLowerCase())
        )
      }

      return items
    }
  },
  methods: {
    toggleFilter(filter) {
      this.$emit("filteredItems", filter)
      if (this.activeFilters.includes(filter)) {
        this.activeFilters = this.activeFilters.filter(x => x !== filter)
      } else {
        this.activeFilters.push(filter)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-filter {
  margin: 25px 0;

  &-results {
    margin-top: 20px;
  }

  &-search-label {
    display: inline-block;
  }

  &-checkbox-label {
    float: right;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
