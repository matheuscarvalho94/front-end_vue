var vm = new Vue({
    el: '#app',
    data: {
        destaques: [],
        brasil: [],
        mundo: [],
        urlImg: 'assets/media/',
    },
    mounted() {
        axios.get('./data.json')
            .then(function (response){
                vm.destaques=response.data.section[0].data
                vm.brasil=response.data.section[1].data
                vm.mundo=response.data.section[2].data
                console.log(vm.destaques)
                console.log(vm.brasil)
        })
    },
})