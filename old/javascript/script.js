$(function () {



      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyD1B0-xMm3yUzrW50JmCc8UvRo2hjVUN2g",
        authDomain: "blog-3e66d.firebaseapp.com",
        databaseURL: "https://blog-3e66d.firebaseio.com",
        projectId: "blog-3e66d",
        storageBucket: "blog-3e66d.appspot.com",
        messagingSenderId: "135566866890"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    

    firebase.database().ref('/blog/entradas/').once('value').then(function(snapshot) {
        console.log(snapshot.val())
        var html,paginator;
        var count = 0;

        for(i in snapshot.val()){

            if(count<2){

                html =  `
                <div class="wrapper-blog">
                <div class="title-blog">
                <h1 class="title">` + snapshot.val()[i].titulo + `</h1>
                <div class="content-blog">
                <img class="image-blog" src="`+ snapshot.val()[i].url + `" alt="">
                <div class="text-blog">

                <p>`+ snapshot.val()[i].texto + `</p>

                <div class="butn">
                <a id="` + snapshot.val()[i].titulo +`" href="content.php?titulo=Bienvenido" class="button button-primary button-rounded button-large butn-leer">Leer Más</a>
                </div>


                </div>

                </div>
                </div>
                </div>

                `
                $('.contentParsing').append(html);

            }

            count++;

        }
        var numberofpages = Math.ceil(count/2);
        for(var j = 0;j<numberofpages;j++){
            paginator = `<button class="button button-primary button-box button-large pagination">`+  j +` </button>`;
                   $('.paginator').append(paginator);
        }
        
        
    });

  


	// a = document.getElementById("texto");
	// a.setAttribute("href", "content.php?titulo=" + a.value);

    $('nav a').click(function (e) {
        e.preventDefault();
        if($('.submenu').hasClass( "active" )){
        	$('.submenu').addClass("up");
        	$('.submenu').removeClass("active");
        }
        else{
        	$('.submenu').removeClass("up");
        	$('.submenu').addClass('active');
        }
        
    });

});