const { response } = require("express");

Vue.createApp({
    data() {
        return {
            dog: "", //one dog
            dogs: [], //all dogs list
        }//return close

    },//data close

    methods : {
        //makes a GET request to the server for all pet listings
        getListings: function(){
            fetch("https.dog...")
            .then(response => response.json())
            .then(data => {
                this.dogs = data;
                console.log(this.dogs);
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
            fetch(`http.dog ${this.search}`) //need http
            .then(response => response.json())
            .then(data => {
                this.dogs = data;
                console.log(this.dogs);
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
