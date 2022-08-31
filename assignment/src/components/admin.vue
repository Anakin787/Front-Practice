<template>
  <div class="grid-box">
    <h1 style="margin-top: 50px">AdminPage</h1>
    <ag-grid-vue
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import acJson from "/src/assets/account.json";

export default {
  name: "ag-grid",
  data() {
    return {
      columnDefs: [
        { field: "seq", sortable: true ,checkboxSelection:true},
        { field: "id" },
        { field: "pw" },
        { field: "name", sortable: true },
        { field: "email" },
        { field: "hp" },
        { field: "role" },
        { field: "state" },
        { field: "description" },
      ],
      rowData: acJson,
    };
  },
  components: {
    AgGridVue,
  },
};
</script>

<style>
.ag-theme-alpine {
  width: 80%;
  height: 700px;
  margin: auto;
}
</style>