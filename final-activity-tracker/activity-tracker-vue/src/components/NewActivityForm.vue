<template>

    <h2 class="card-header">Add Records</h2>
    <div class="card-body">

      <div class="alert alert-danger"
           v-show="errors.length > 0">
        <ul>
          <li v-for="error in errors"
              v-bind:key="error"> {{error}}</li>
        </ul>
      </div>

      <div class="form-group">
        <label class="form-label" for="date">What date did you Practice? </label>
        <input id="date"
               class="form-control"
               type="date"
               v-model="dateString">
        <small id="date-help" class="form-text text-muted">
          Date must be today or in the past.
        </small>
      </div>

      <div class="form-group">
        <label class="form-label" for="hours">How many hours did you practice for?</label>
        <input id="hours"
               class="form-control"
               type="number"
               v-model.number="hours"
               min="0" max="24">
        <small id="hours-help" class="form-text text-muted">
          Enter a number of hours, more than 0, up to a maximum of 24
        </small>
      </div>

      <div class="form-group">
        <label class="form-label" for="actType">What type?</label>
        <select class="form-control"
                v-model="type">
          <option v-for="actType in types" id="actType">{{actType}}</option>
        </select>
      </div>

      <div class="form-label pb-2">
        What media?
      </div>
      <!--When working with radio buttons in vue, v-model all the radio buttons to what the buttons will choose-->
      <!-- and then bind the individual buttons to what ever data type they're representing in vue-->
      <div class="form-check-inline">
        <input id="media1"
               class="form-check-input"
               type="radio"
               v-bind:value="media.digital"
               v-model="medium">
        <label class="form-check-label" for="media1"> {{media.digital}}  </label>
      </div>

      <div class="form-check-inline">
        <input id="media2"
               class="form-check-input"
               type="radio"
               v-bind:value="media.traditional"
               v-model="medium">
        <label class="form-check-label" for="media2"> {{media.traditional}} </label>
      </div>

      <div class="form-group ">
        <input id="complete"
               type="checkbox"
               v-model="complete" >
        <label class="form-check-label" for="complete">Complete?</label>
      </div>

      <div class="form-group">
        <label class="form-label"  for="notes" >Notes:</label>
        <textarea class="form-control"
                  id="notes"
                  rows="3"
                  size="small"
                  placeholder="Records will only display first 40 characters. Don't worry all your notes will be saved."
                  v-model="notes">
                    </textarea>
      </div>

      <div>
        <button class="btn btn-primary mt-2"
                type="button"
                v-on:click="submit">Add record</button>
      </div>

    </div>
</template>

<script>
export default {
  name: 'NewActivityForm',
  props:{
      media: Object

  },
  data(){
    return {
      dateString: '',
      hours: '',
      type: '',
      medium: '',
      complete: false,
      notes: '',
      errors: []
    }
  },
  methods: {
    submit() {

      this.errors = []

      let date = new Date(this.dateString)

      if (!this.dateString || this.dateString === 'Invalid Date' || date > new Date()){
        this.errors.push('Please enter a valid date')
      }
      if (!this.hours || this.hours > 24 || this.hours <= 0){
        this.errors.push('Please enter hours practiced')
      }
      if (!this.type){
        this.errors.push('Please select what activity you practiced')
      }
      if (!this.medium){
        this.errors.push('Please select a medium')
      }

      if (this.errors.length == 0){
        let record = {
          date: date,
          hours: this.hours,
          type: this.type,
          medium: this.medium,
          complete: this.complete ? 'In progress' : 'Complete',
          notes: this.notes,
        }
        this.$emit('record-added',record)
      }
    }
  }
}

</script>

<style>

</style>