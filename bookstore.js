var app = new Vue({
    el: '#app',
    data: {
        books: [],
        bookbutton: "",
        booktitle: [],
        allbook: [],

    },

    created: function () {
        this.calljson();
    },

    methods: {

        calljson: function () {
            {
                fetch("https://api.myjson.com/bins/zyv02", {
                    method: "GET",

                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }

                }).then(function (json) {
                    app.books = json.books;
                    console.log(app.books);

                }).catch(function (error) {
                    console.log("Request failed: + error.message");
                });
            }
        },

        callinput: function () {
            var flag = false;
            this.bookbutton = document.getElementById("booksearch").value;
            this.booktitle = Array.from(document.getElementsByTagName("h3"));
            this.bookfilter = Array.from(document.getElementsByClassName("booksquare"));
            var contador= 0;

            for (var b = 0; b < this.bookfilter.length; b++) {
                if (this.bookfilter[b].innerHTML.toUpperCase().includes(this.bookbutton.toUpperCase())) {
                    this.bookfilter[b].style.display = "block";
                    flag = true;
                    
                } else {
                    this.bookfilter[b].style.display = "none";
                    contador = contador +1;
                    
                } if (contador === this.bookfilter.length) {
                    alert("no books found by search criteria");
                }
            }


        }

    }
})
