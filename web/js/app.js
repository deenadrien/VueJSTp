var app = new Vue({
    el: '#app',
    data:{
        total: 0,
        budgetMax: 100,
        budgetCheck: false,
        libelle: '',
        price: 0,
        checked: false,
        list: []
    },
    computed:{
        checkTotal: function(){
            if(this.total > this.budgetMax){
                return this.budgetCheck = true;
            }else{
                return this.budgetCheck = false;
            }
        }
    },
    methods:{
        addRowToList: function(){
            this.list.push({label: this.libelle});
            console.log(this.list)
        },
        calculTotal: function(){
            for(var i = 0;i < this.list.length; i++){
                this.total = this.total + this.list[i].prix;                
            }

            return this.total;
        },
        deleteProduct: function(index){
            this.list.splice(index);
        },
        addFieldToRow: function(index){
            console.log(this.list[index]);
        }
    }
})