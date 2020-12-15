<template>
  <div class="card">
    <h2 class="card-header">Activity Records</h2>

    <div class="card-body">

<!--      <h3> {{totalRecords}}</h3>-->

      <div id="records">
        <table class="table table-hover">
          <tr>
            <th>Date</th>
            <th>How many hours?</th>
            <th>Type</th>
            <th>Media</th>
            <th>Completed?</th>
            <th>Notes</th>
          </tr>
          <ActivityTableRow
              v-for="record in activities"
              v-bind:record="record" v-bind:key="record.date">
          </ActivityTableRow>

        </table>
      </div>
    </div>
  </div>
</template>

<script>

import ActivityTableRow from "@/components/ActivityTableRow.vue";

export default {
  name: 'ActivityTable',
  components: { ActivityTableRow },
  props: {
    activities: Array
  }
}

</script>

<style>

</style>