<template>
  <tr>
    <td>{{record.date}}</td>
    <td>{{record.hours}}</td>
    <td>{{record.type}}</td>
    <td>{{record.medium}}</td>
    <td>{{record.complete}}</td>
    <td>{{record.notes}}</td>
  </tr>

</template>

<script>
export default {
  name: 'ActivityTableRow',
  props: {
    activity: Object
  }
}

</script>

<style>

</style>