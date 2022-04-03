const SERVER_URL = "http://127.0.0.1:8000/";
Vue.use(Toasted);
new Vue ({ 
    el:"#app",
    data:() => ({
        User: {
            Nombre:"",
            Direccion:"",
            Telefono:"",
            Edad:"",
        },
    }),

    methods: {
        async save(){
         if (!this.User.Nombre){
             return this.$toasted.show("Porfavor escribe un nombre",
             {
                 position:"top-left",
                 duration:1000,
             });
        }
        if (!this.User.Direccion){
            return this.$toasted.show("Porfavor escribe una Dirrecion",
            {
                position:"top-left",
                duration:1000,
            });
       }
       if (!this.User.Telefono){
        return this.$toasted.show("Porfavor escribe un Telefono",
        {
            position:"top-left",
            duration:1000,
        });
   }
   if (!this.User.Edad){
    return this.$toasted.show("Porfavor escribe una Edad",
    {
        position:"top-left",
        duration:1000,
    });
}
    const payload = JSON.stringify(this.User);
    const url =SERVER_URL +"paciente/insertar";
    const r = await fetch(url,
        {
            method:"POST",
            body:payload,
            headers:{
                "Content-type":"application/json"
            }
        });
        const response = await r.json();
        if (response)
        {
            this.$toasted.show("saved",
            {
                position:"top-left",
                duration:1000,
 
            });
            this.User =
            {
                Nombre:"",
                Direccion:"",
                Telefono:"",
                Edad:"", 
            }
            
            
        }

        else{
            this.$toasted.show("Intenta de nuevo",
        {
            position:"top-left",
            duration:1000,
        } );
        }
        

    }
}
});