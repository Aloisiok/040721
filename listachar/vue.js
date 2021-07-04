    
    const api = new Vue({
        el: "#api", 
        data () {
            return {
                characters: [],
                personagem: [],
                img: '',
                mostrar: false,
                load: false
            }
        },
        mounted () {
            axios
            .get('https://www.breakingbadapi.com/api/characters/')
            .then(response => (this.characters = response))
            this.load = true;
            document.getElementById('api').style.display = 'block';
        },
        methods: {
            mostrarselecionado: function (id){ 
                var busca = this.characters.data.find(busca => busca.char_id === id); 
                this.personagem = busca  
                this.img = this.personagem.img 
                this.mostrar = true  
            },
            
        },   
    })