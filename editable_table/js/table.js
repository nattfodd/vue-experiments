// Vue.component('editable-row', {
//   props: [ 'rowdata' ],
//   template: `
//     <tr>
//       <td v-for="value, key, index in data">
//         <template v-if="isEditable">
//           <input class="form-control" type="text" v-model="value">
//         </template>
//         <template v-else>
//           {{ value }}
//         </template>
//       </td>
//       <td>
//         <button class="btn btn-danger" @click="toogleEdit">
//           {{ editButtonTitle }}
//         </button>
//       </td>
//     </tr>
//   `,
//   data() {
//     return {
//       data: [],
//       isEditable: false,
//       editButtonTitle: 'Edit'
//     }
//   },
//   created() {
//     this.data = this.rowdata;
//   },
//   methods: {
//     toogleEdit: function() {
//       if (this.isEditable) {
//         this.sendUpdate()
//         this.editButtonTitle = 'Edit'
//       } else {
//         this.editButtonTitle = 'Save'
//       }

//       this.isEditable = !this.isEditable
//     },
//     updateData: function(value, index) {
//       this.data[index] = value
//     },
//     sendUpdate: function() {
//       this.$emit('editCompleted', this.data)
//       // TODO: Save
//       // alert('POST request sent')
//     }
//   }
// })

new Vue({
  el: 'table#data_table',
  data: {
    rows: [
      {
        data: [{ value: '1', nonEditable: true }, { value: 'Data 2' }, { value: 'Data 3' }, { value: 'Data 4' }],
        isEditable: false,
        editButtonTitle: 'Edit'
      },
      {
        data: [{ value: '2', nonEditable: true }, { value: 'Data 5' }, { value: 'Data 6' }, { value: 'Data 7' }],
        isEditable: false,
        editButtonTitle: 'Edit'
      },
      {
        data: [{ value: '3', nonEditable: true }, { value: 'Data 8' }, { value: 'Data 9' }, { value: 'Data 10' }],
        isEditable: false,
        editButtonTitle: 'Edit'
      },
      {
        data: [{ value: '4', nonEditable: true }, { value: 'Data 11' }, { value: 'Data 12' }, { value: 'Data 13' }],
        isEditable: false,
        editButtonTitle: 'Edit'
      }
    ],
    editButtonTitle: 'Edit'
  },
  methods: {
    toogleEdit: function(row) {
      if (row.isEditable) {
        row.editButtonTitle = 'Edit'
      } else {
        row.editButtonTitle = 'Save'
      }

      row.isEditable = !row.isEditable
    }
  }
});
