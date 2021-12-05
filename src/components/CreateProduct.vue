<template>
    <div>
        <h3 class="text-center">Create Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="add" class="row g-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model.trim="product.name">
                        <div class="errorValid">{{errorName}}</div>
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model.trim="product.detail">
                        <div class="errorValid">{{errorDetail}}</div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    .errorValid{
        color: red;
    }
</style>

<script>
    export default {
        data() {
            return {
                product: {},
                errorName:'',
                errorDetail:''
            }
        },
        methods: {
            add: function() {
                if(typeof this.product.name==='undefined' || this.product.name.length==0){
                    this.errorName='Please input name product';   
                    return;
                }else{
                    this.errorName='';
                }

                if(typeof this.product.detail==='undefined' || this.product.detail.length==0){
                    this.errorDetail='Please input detail product';   
                    return;
                }else{
                    this.errorDetail='';
                }
                
               this.$store.dispatch('addProduct',this.product).then(()=>{
                    this.$router.push({name: 'Home'});
                });
                
            }
        }
    }
</script>

