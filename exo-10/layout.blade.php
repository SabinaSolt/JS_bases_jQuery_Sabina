<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--bootstrap + css -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{asset("/css/layoutstyle.css")}}">
    <link rel="stylesheet" type="text/css" href="{{ asset("css/homestyle.css") }}">
    <link rel="stylesheet" type="text/css" href="{{asset("/css/catalogstyles.css")}}">
    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap" rel="stylesheet">
    <title> @yield('title') </title>
</head>

<header class="sticky-top ">

    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class=" navbar-brand mr-4" href="{{route('home')}}"> <img src="{{ asset("images/logo.png") }} " alt="Logo"
                                                                     style="width:80px"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse my-auto d-flex d-inline-flex" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class=" mx-3 my-2 nav-item nav-link" href="/catalog">Catalogue</a>
                <a class="mx-3 my-2 nav-item nav-link" href="/tirages">Tirages</a>
                <a class="mx-3 my-2 nav-item nav-link" href="/box">Box</a>
                <a class="mx-3 my-2 nav-item nav-link" href="/cart">Panier</a>

                <form class="mx-3 my-2 d-lg-none form-inline d-flex ">
                    <input class="form-control mr-sm-2" type="search" placeholder="Recherche"
                           aria-label="Search">
                    <button class="btn search btn-default btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                </form>
            </div>
        </div>

        <form class="d-none d-lg-block d-xl-block form-inline my-auto ">
            <input class="form-control mr-sm-2" type="search" placeholder="Recherche"
                   aria-label="Search">
            <button class="btn btn-default btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
    </nav>


</header>


<body>

@yield('content')

</body>


<footer>

    <div class="jumbotron footer justify-content-center d-flex justify-content-around mt-4 flex-wrap">

        <div class="d-none d-md-block d-lg-block d-sm-block mt-4 justify-content-center flex-wrap text-align: center">
            <ul style="list-style-type:none;">
                <li>Confidentialité</li>
                <li>Mentions Légales</li>
                <li>CGV</li>
                <li>Codes Promos</li>
            </ul>
        </div>

        <div class="d-flex m-2 flex-fill w-auto flex-column align-items-center justify-content-around flex-wrap">
            <p>Partageons sur les réseaux sociaux </p>


            <div>
                <img class=" mr-2" src="{{asset('images/facebook.svg')}}" alt="facebook logo">
                <img class="ml-2 mr-2" src="{{asset('images/twitter.svg')}}" alt="twitter logo">
                <img class="ml-2 mr-2" src="{{asset('images/vk.svg')}}" alt="vk logo">
                <img class="ml-2 " src="{{asset('images/insta.svg')}}" alt="instagram logo">
            </div>
        </div>

        <div class="d-flex mt-5 align-items-center ">
            <p>No Copyright 2020 DN.com</p>
        </div>


    </div>


</footer>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</html>

