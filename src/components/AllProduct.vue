<template>
    <div>
        <h2 class="text-center">Products List</h2>
 
        <table class="table table-dark table-striped table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.detail }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link>
                        <button style="margin-left:5px" class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        name: 'List',
        data: function() {
            return {}
        },
       computed: {
           products () {
               return this.$store.state.products;
           }
        },
        created: function () {
            this.$store.dispatch('fetch');
        },
        methods: {
            deleteProduct: function (id) {
                let result = confirm('Are you sure');

                if (!result) {
                    return;
                }

                this.$store.dispatch('deleteProduct', id);
            }
        }
    }
</script>