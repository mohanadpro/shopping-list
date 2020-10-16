<template>
      <div>
<FormModel>

            <div slot="form-header">
                  <h1>Form header</h1>
            </div>
            <div slot="form-fields">
                  <div class="form-group">
                         <input type="text" class="form-control text-center"/>
                  </div>
                  <div class="form-group">
                         <input type="number" class="form-control text-center"/>
                  </div>
                  <div class="form-group">
                         <input type="date" class="form-control text-center"/>
                  </div>
            </div>
            <div slot="form-controls">
                  <button class="btn btn-success float-left">Create</button>
                  <button class="btn btn-danger float-right">Edit</button>
            </div>
      </FormModel>
      </div>
      
</template>

<script>
import FormModel from '../Model/form-model'
export default {
      name:'CreateFrom',
      components:{FormModel}
}
</script>