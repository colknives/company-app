 <template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <v-container
        fluid
      >

        <Table />

      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import Table from '../components/Table'

export default {
  name: 'Employee',
  components: {
    Header,
    Footer,
    Table
  }
}
</script>