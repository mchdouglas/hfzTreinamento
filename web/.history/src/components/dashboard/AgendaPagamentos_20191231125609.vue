<template>
  <DxScheduler
    :data-source="dataSource"
    :current-date="currentDate"
    :views="views"
    :height="600"
    :start-day-hour="9"
    current-view="week"
  />
</template>
<script>

import DxScheduler from 'devextreme-vue/scheduler'

export default {
  components: {
    DxScheduler
  },
  data () {
    return {
      views: ['week', 'month'],
      currentDate: new Date(2017, 4, 25),
      dataSource: data
    }
  }
}
</script>
