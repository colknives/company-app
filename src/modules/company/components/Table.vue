 <template>
  <div style="width:100%">
    <div class="mb-10">
        <v-alert type="success" dismissible v-if="hasSuccess">{{ successMessage }}</v-alert>
        <v-alert type="error" dismissible v-if="hasErrors">{{ errorMessage }}</v-alert>
    </div>
    <div>
        <v-data-table
                :headers="headers"
                :items="list"
                sort-by="description"
                class="elevation-1"
                style="width:100%"
            >
                <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Companies</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        @click="addItem()"
                        >New Company</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
                </template>
            </v-data-table>
  </div>
</div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Table',
  computed: mapState("company", [
      "hasErrors",
      "errorMessage",
      "hasSuccess",
      "successMessage",
      "list"
  ]),
  data: () => ({
    formTitle: '',
    dialog: false,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      description: '',
    },
    defaultItem: {
      name: '',
      description: '',
    },
  }),

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize();
  },

  methods: {
    initialize () {
      this.$store.dispatch("company/getCompany");
    },

    addItem() {
      this.formTitle = 'New Company';
    },

    editItem (item) {
      this.editedIndex = item.uuid
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.formTitle = 'Edit Company';
    },

    deleteItem (item) {
        this.editedIndex = item.uuid;

        if( confirm('Are you sure you want to delete this item?') ){
            this.$store.commit('company/setUuid', this.editedIndex);
            this.$store.dispatch('company/deleteCompany');
        }
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex == -1) {
        this.$store.commit('company/setForm', this.editedItem);
        this.$store.dispatch('company/addCompany');
      } else {
        this.$store.commit('company/setUuid', this.editedIndex);
        this.$store.commit('company/setForm', this.editedItem);
        this.$store.dispatch('company/updateCompany');
      }
      this.close()
    },
  }
}
</script>