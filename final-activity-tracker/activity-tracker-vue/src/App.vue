<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    use components to get all information related to new practice record-->
    <NewActivityForm v-on:record-added="newRecordAdded"></NewActivityForm>
<!--    display a table containing all records added to table-->
    <ActivityTable v-bind:activities="activities"></ActivityTable>
<!--    display a summary, including a chart of all activities from table-->
    <ActivitySummary></ActivitySummary>
  </div>
</template>

<script>
import NewActivityForm from './components/NewActivityForm.vue'
import ActivityTable from './components/ActivityTable.vue'
import ActivitySummary from './components/ActivitySummary'

export default {
  name: 'App',
  components: {
    NewActivityForm,
    ActivityTable,
    ActivitySummary
  },
  data(){
    return{
      activities: []
    }
  },
  methods: {
    newRecordAdded(record){
      this.activities.push(record)
      this.activities.sort(function (r1,r2){
        return r1.date.getTime() - r2.date.getTime() ? 1:-1
      })
    }

  }
}
</script>

<style>

</style>
