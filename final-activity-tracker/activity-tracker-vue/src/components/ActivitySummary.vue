<template>
  <div class="card">
    <h2 class="card-header">Summary</h2>

    <div class="card-body">

      <!-- computed property to calculate the total hours -->
      <p>You have practiced a total of {{totalHours}} hours</p>

      <!-- Challenge question! Display a list of the total hours for each type.  -->
      <div id="record-summary" v-show="activityRecords.length > 0">
        <p>Hours spent practicing per activity:</p>
        <p>{{recSum}}</p>
      </div>

<!--      <ActivitySummaryChart></ActivitySummaryChart>-->

    </div>
  </div>

</template>

<script>
// import ActivitySummaryChart from ''

export default{
  name: 'ActivitySummary',
  // components: {ActivitySummaryChart},

}

</script>

<style>

</style>