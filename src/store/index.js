import { createStore } from 'vuex'
import axios from 'axios';
const API_URL='http://localhost/laravel-vue-crud/public/index.php/api'
export default createStore({
  state: {
        products: [],
        product: {},
    },
    mutations: {
        FETCH(state, products) {
            state.products = products;
        },
        FETCH_ONE(state, product) {
            state.product = product;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(`${API_URL}/list`)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${API_URL}/show/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        async deleteProduct(state,id) {
           await axios.get(`${API_URL}/delete/${id}`)
                .then(() => this.dispatch('fetch'))
                .catch();
        },
        async editProduct(state,product) {
            await axios.post(`${API_URL}/update/${product.id}`, {
                name: product.name,
                detail: product.detail,
            })
            .then();
        },
        async addProduct(state,product) {
            let axiosConfig = {
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "*",
                  "crossDomain": true,
                  "withCredentials": true
              }
            };
            await axios.post(`${API_URL}/add`, {
                name: product.name,
                detail: product.detail,
            },axiosConfig)
                .then();
        }
    }
})


/*actionFilter: function () {
                //console.log('from actionfilter()', this.actionFilterContent.page)

                axios.get(`http://localhost:8000/api/actions`, {
                    params: this.actionFilterContent
                })
                    .then(response => {
                        this.actionsList = response.data;
                        this.total = response.data.total;
                        this.last_page = response.data.last_page
                        console.log(response.data);
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

            }
*/