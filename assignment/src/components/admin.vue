<template>
  <div class="grid-box">
    <h1>AdminPage</h1>
    <ag-grid-vue
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import account from "./account";

export default {
  name: "ag-grid",
  data() {
    return {
      columnDefs: [
        { field: "seq" },
        { field: "id" },
        { field: "pw" },
        { field: "name" },
        { field: "email" },
        { field: "hp" },
        { field: "role" },
        { field: "state" },
        { field: "description" },
      ],
      rowData: [
        {
          seq: account[0].seq,
          id: account[0].id,
          pw: account[0].pw,
          name: account[0].name,
          email: account[0].email,
          hp: account[0].hp,
          role: account[0].role,
          state: account[0].state,
          description: account[0].description,
        },
      ],
    };
  },
  components: {
    AgGridVue,
  },
  methods: {
    }
};
</script>

<style>
.ag-theme-alpine {
  width: 800px;
  height: 500px;
  margin: auto;
}
</style>