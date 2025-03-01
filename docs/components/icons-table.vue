<template>
  <div
    key="_bv-icons-table_"
    class="bv-icons-table notranslate"
    role="group"
    aria-labelledby="bv-icons-table-title"
  >
    <b-row align-v="start">
      <b-col md="5" lg="6">
        <div id="bv-icons-table-title" class="h3 text-muted mb-3 mb-md-0">
          Обзор иконок
        </div>
      </b-col>
      <b-col md="7" lg="6">
        <b-form @submit.prevent>
          <b-form-group
            label="Поиск иконок"
            label-for="bv-icons-table-search"
            label-cols-sm="auto"
            label-align-sm="right"
            :description="`Показаны ${filteredIcons.length} из ${totalIcons} иконок`"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                id="bv-icons-table-search"
                key="_bv-icons-table-search_"
                v-model="iconFilter"
                type="search"
                debounce="250"
                autocomplete="off"
                aria-controls="bv-icons-table-result"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <div id="bv-icons-table-result">
      <transition-group
        tag="ul"
        name="flip-icon-list"
        class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 row-cols-xxl-10 list-unstyled"
      >
        <b-col
          v-for="icon in filteredIcons"
          :key="`_icon_${icon.name}`"
          tag="li"
          class="flip-icon-list-icon d-inline-flex flex-column mb-4 text-center"
        >
          <b-card bg-variant="light" class="px-3 py-4 border-0" no-body>
            <b-icon :icon="icon.name" class="mx-auto"></b-icon>
          </b-card>
          <b-form-text class="mt-2 text-break" :title="icon.name">{{ icon.name }}</b-form-text>
        </b-col>
      </transition-group>
      <div aria-live="polite" aria-atomic="true">
        <b-alert
          :show="filteredIcons.length === 0"
          :role="null"
          :aria-live="null"
          :aria-atomic="null"
          fade
          variant="light"
          class="text-center mt-4 d-flex align-items-center justify-content-center"
        >
          <b-icon icon="alert-triangle-fill" aria-hidden="true"></b-icon>
          <span>Подходящие иконки не найдены. Попробуйте поискать еще раз.</span>
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import { iconNames } from '~/../src/icons'

const icons = iconNames
  .filter(name => name !== 'BIcon')
  .sort()
  .map(fullName => {
    return {
      component: fullName,
      name: fullName
        .replace(/^BIcon/, '')
        .replace(/\B([A-Z])/g, '-$1')
        .toLowerCase()
    }
  })

export default {
  name: 'BVIconsTable',
  data() {
    return {
      iconFilter: '',
      totalIcons: icons.length
    }
  },
  computed: {
    filteredIcons() {
      const terms = this.iconFilter
        .trim()
        .toLowerCase()
        .split(/\s+/)
      if (terms.length === 0) {
        return icons.slice()
      }
      return icons.filter(icon => terms.every(term => icon.name.indexOf(term) !== -1))
    }
  }
}
</script>

<style lang="scss" scoped>
.bv-icons-table {
  position: relative;
}

#bv-icons-table-result >>> .bi {
  font-size: 1.5rem;
}

.form-group >>> .form-text {
  text-align: right;
}

// Icon zoom on hover
.flip-icon-list-icon >>> .card {
  .bi {
    transition: transform 0.15s;
  }

  &:hover .bi {
    transform: scale(1.75);
  }
}

// Transion group classes
.flip-icon-list-icon {
  transition: all 0.15s;
}

.flip-icon-list-move {
  transition: transform 0.3s;
  transition-delay: 0.15s;
}

.flip-icon-list-enter,
.flip-icon-list-leave-to {
  opacity: 0;
  transform: scale(0.75);
}

.flip-icon-list-enter-active {
  transition-delay: 0.3s;
}

.flip-icon-list-leave-active {
  position: absolute;
}

@media (min-width: 1200px) {
  .row-cols-xl-8 > * {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }
}

@media (min-width: 1400px) {
  .row-cols-xxl-10 > * {
    flex: 0 0 10%;
    max-width: 10%;
  }
}
</style>
