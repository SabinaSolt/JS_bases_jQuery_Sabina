


@extends('layout.layout')

@section('content')

    <header class="hero_slogan " >
        <div class="container ">
            <h2 class ="container slogan_bordo mb-0" style="font-size:200%;">Moins</h2>
            <h2 class ="container mb-0"  style="font-size:130%;">c'est</h2>
            <h2 class ="container slogan_bordo "  style="font-size:300%;margin-top:-1.5vh;">mieux </h2>
        </div>
    </header>
    <div class="jumbotron pitch  my-lg-15">
        <p class="text_description text-lg-center "> D.N pour Droujba Narodov, signifie littéralement en russe  “L’amitié des peuples”. </p>

        <p class="text_description text-lg-center "> Renouez avec les plus belles heures du communisme et ses notions de partage,
            d’égalité et du bien commun.
        </p>
    </div>

{{--Partie "La box"--}}
    <div class ="container col-lg-12 labox my-lg-5 text-lg-center">
        <div class ="text-white text_titles " id="laboxmobile">LA BOX</div>
        <table class="table laboxtable">
            <tr class ="row">

                <td class ="col-lg-8">
                    <div ><img class ="img-fluid container-fluid" src ="{{ asset("pictures/box.jpg") }}" alt ="labox"></div>
                </td>

                <td class ="col-lg-3 text-center ">
                    <div class ="text-white text_titles text-center" id="laboxdesktop">LA BOX</div>
                    <div class ="text-white"><p class="text_description ">Découvrez nos boxes mensuelles, proposées à un tarif éthique et responsable.
                            Vous y trouverez des goodies, affiches exclusives et des épices
                            qui vous rappelleront les plus grandes périodes de disettes du monde moderne.
                        </p>
                    </div>
                    <div class="btn btn-light savoir_plus">En Savoir Plus</div>
                </td>

            </tr>
        </table>
    </div>

{{--Partie "Collections"--}}
    <div class="container text-center collections py-5">
        <div class="text_titles2 pb-5">COLLECTIONS</div>
        <div><p class="text_description">Retrouvez nos collections,
                inspirées des époques marquantes de l’histoire du communisme.
            </p>
        </div>


    </div>

{{--Creer un caroussel pour les collections--}}
<div id="carouselCaptions" class="carousel slide container" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselCaptions" data-slide-to="1"></li>

    </ol>
    <div class="carousel-inner d-flex ">
        <div class="carousel-item active row">
            <div class="col-lg-6"><img src="{{ asset("pictures/chapka.jpg") }}"  style="height:500px;width:auto;" alt="chapka"></div>
            <div class="carousel-caption col-lg-4">
                <h5 class ="text_titles2 text-dark ">ColdWear</h5>
                <p  class="text_description text-dark ">Retrouvez notre collection “Cold Wear”, tournée vers le meilleur
                    de la mode avant 1991 et succombez ainsi
                    aux textiles d’époque et à une douceur incomparable...</p>
            </div>
        </div>
        <div class="carousel-item row">
            <div class="col-lg-6 "><img src="{{ asset("pictures/veste.jpg") }}" class="d-block" style="height:500px; " alt="veste"></div>
            <div class="carousel-caption col-lg-4">
                <h5  class ="text_titles2 text-dark">Perestroika</h5>
                <p  class="text_description text-dark">Plus tourné vers le côté moderne ? Laissez vous tenter par la collection Perestroïka
                    symbolisant trois axes prioritaires : “L'accélération, la démocratisation et la transparence !” :
                    Des designs minimalistes, des prix accessibles et des lignes épurées !</p>
            </div>
        </div>

    </div>
    <a class="carousel-control-prev " href="#carouselCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next " href="#carouselCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>


</div>



{{--Partie tirage photo "Histoire en images"--}}
    <div class ="container text-center photo_histoire p-10">
        <div  class="text_titles2 py-5">L'HISTORE EN IMAGES</div>
        <div><p class="text_description pb-3">Vous souhaitez apporter un côté rétro dans vos lieux de vie et de collaboration commune?

                Une large bibliothèque de tirages photo où vous aurez la possibilité d’obtenir,
                en qualité d’époque, des cartes postales et posters témoins de l’histoire.
            </p>
        </div>
        <img class ="img-fluid container-fluid" src ="{{ asset("pictures/nounours.jpg") }}" alt ="piscine_abandonnee">

    </div>

{{--    Container "plus d'articles"--}}
    <div class="container plus_articles p-10">
        <div class=" text_titles2 py-5 text-center col-12">Plus d'articles</div>
        <div class="row ">
            <div class="col-6">
                <div  class="text_description pour_elle">Pour elle</div>
                <img class ="img-fluid container-fluid " src ="{{ asset("pictures/chemise_large.jpg") }}" alt ="pour_elle">
            </div>
            <div class="col-6">
                <div  class="text_description pour_elle text-light">Pour lui</div>
                <img class ="img-fluid container-fluid " src ="{{ asset("pictures/manteau.jpg") }}" alt ="pour_lui">
            </div>
        </div>

    </div>


@endsection

