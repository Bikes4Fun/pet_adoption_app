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
            applicants: [],
            newApplicant: {
                name: "", 
                phoneNumber: "",
                email: "",
                petId: "",
            }
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
            //question: I dont understand headers
/*             newPet: {
                name: "", 
                species: "", 
                breed: "", 
                age: "", 
                gender: "",
            }, */

            "name=" (this.newPet)

        },

        //makes a DELETE request to the server based on the ID number of the pet being deleted
        deleteListing: function(listingId){
            var delPet = this.pets[listingId]._id;
            var requestOptions = {
                method: "DELETE"
            };
            fetch(`http://host/pets/${delId}`, requestOptions)
                .then((response) => {
                    if (response.status === 204) {
                        console.log("pet was deleted");
                    } else {
                        alert("pet was not deleted")
                    }
                }
            )
        },//deleteListing close

        resetSearch: function() {
            this.search = ""
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
        this.getListings();
    }, //created close

    watch: {
        search(newSearch, oldSearch) {
            this.filteredPets = this.pets.filter((pet) => {
                return pet.name.toLowerCase().includes(newSearch.toLowerCase());
            });
        } //search close
    },//watch close

    computed: {
    },//computed close

}).mount("#app");
