var app = new Vue({
    el: '#app',
    data: {
        fecha: '',
        ufImp: '',
        valor: '',
        fc: '',
        datos: []

    },
    methods: {
        uf: function() {
            var fec = this.fecha.split('-');
            var url = 'https://mindicador.cl/api/uf/';
            this.ufImp = url + fec[2] + "-" + fec[1] + "-" + fec[0];
            this.valor = '';
            axios.get(this.ufImp).then(response => {
                this.datos = response.data;
                this.fc = fec[2] + "-" + fec[1] + "-" + fec[0];
                this.valor = response.data.serie[0].valor;
                //alert(this.valor);
                //console.log(response.data);
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
});