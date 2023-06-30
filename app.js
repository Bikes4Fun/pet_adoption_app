//making changes
Vue.createApp({
    data() {
        return {
            pets: [], 
            search: "",
            filteredPets: [],
            newPet: {
                name: "", 
                species: "", 
                breed: "", 
                age: "", 
                gender: "",
            },
        } //return close

    },//data close

    methods : {
        //makes a GET request to the server for all pet listings
        getListings: function(){
            fetch("https.pet...")
            .then(response => response.json())
            .then(data => {
                this.pets = data;
                console.log(this.pets);
            });
        },

        //makes a POST request to the server from a "create listing" form
        createListing: function(){

        },

        //makes a DELETE request to the server based on the ID number of the pet being deleted
        deleteListing: function(listingId){

        },

        searchListing: function() {
            //not tested 
            fetch(`http.pet ${this.search}`) //need http
            .then(response => response.json())
            .then(data => {
                this.pets = data;
                console.log(this.pets);
            });
        },

        //makes a GET request for all adoption applications
        getApplications: function(){

        },

        //makes a POST request to the server from a "new adoption" application form
        createApplication: function(){

        },

        //goes to a different "page" - a.k.a. changes a page data property that hides and shows specific sections
        changePage: function(page){

        },

    },//methods close

    created : function() {
    }, //created close

    watch: {
    },//watch close

    computed: {
    },//computed close

}).mount("#app");
