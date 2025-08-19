//funkcija ddl-a
function dinamickiDdl(niz1, nizValue, selektor)
{
    for(var i = 0; niz1.length > i; i++)
    {
        var optioni = document.createElement("option");
        optioni.setAttribute("value", nizValue[i]);

        var optioniTekst = document.createTextNode(niz1[i]);
        optioni.appendChild(optioniTekst);
        selektor.appendChild(optioni);
    }
}
//buttonFooter
var footerButton = document.getElementById("pitanjeId");
footerButton.addEventListener("click", function()
{
  if(document.getElementById("reasonLista2").options[document.getElementById("reasonLista2").options.selectedIndex].value == 0)
    
    {
      
      document.getElementById("padajucaLista2").nextElementSibling.classList.add("prikazi");
       console.log(`korisnik je izabrao: ${document.getElementById("reasonLista2").options[document.getElementById("reasonLista2").options.selectedIndex].value}`);
       
    }  
  else{
        document.getElementById("prosledjeno2").classList.add("prikazi");
        if(document.getElementById("prosledjeno2").classList.contains("prikazi"))
          {
              document.getElementById("pitanjeId").classList.add("sakrij");
              document.getElementById("reasonLista2").classList.add("sakrij");
          }
        document.getElementById("padajucaLista2").nextElementSibling.classList.remove("prikazi");
        console.log(`korisnik je izabrao: ${document.getElementById("reasonLista2").options[document.getElementById("reasonLista2").options.selectedIndex].value}`);
        
      }
  
    
});
//ddl how often do you eat pancakes

var nizVremena = new Array("Daily", "Weekly", "Monthly", "Not Enough!");
var nizValueVremena = new Array("dnevno", "nedeljno", "mesecno", "nedovoljno");
var ddl2 = document.getElementById("padajucaLista2");
var selekt2 = document.createElement("select");
selekt2.setAttribute("id", "reasonLista2");
selekt2.setAttribute("class", "pointer")

var prviOption2 = document.createElement("option");
prviOption2.setAttribute("value", "0");

var prviOptionTekst2 = document.createTextNode("How often do you eat pancakes?");

prviOption2.appendChild(prviOptionTekst2);
selekt2.appendChild(prviOption2);

dinamickiDdl(nizVremena, nizValueVremena, selekt2);

ddl2.appendChild(selekt2);

//dinamicki navMeni
var nizMenija = new Array("Home", "What we Do", "Masterpieces", "Fun Facts", "Contact", "Author");
var nizMenijaPutanja = ["index.html#r", "index.html#about", "index.html#masterpieces", "index.html#fun-facts", "index.html#contact", "author.html"];


var meni = document.querySelector("nav");

  var lista = document.createElement("ul");
    lista.setAttribute("class", "nav nav-navbar listaNavigacija");

  for(var i = 0; nizMenija.length > i; i++)
    {
        var meniLi = document.createElement("li");

        var meniLiA = document.createElement("a");
        meniLiA.setAttribute("class", "scroll-link");
        meniLiA.setAttribute("href", nizMenijaPutanja[i]);
        meniLiA.textContent = nizMenija[i];

        meniLi.appendChild(meniLiA);
        lista.appendChild(meniLi);
        
    }
    meni.appendChild(lista);

const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    console.log(nav)
  });


//js za index.html
if(location.pathname == "/Meteor/index.html"){

  //dinamicki ispis fun-fact elemenata
  var tekstCountera = new Array("Subscribers", "Made Recipes", "Happy Clients", "Total Awards");
  var vrednostiCountera = new Array(45, 214, 118, 16);
  var divFunFact = document.getElementById("divWdo");
  for(var i = 0; tekstCountera.length > i;i++)
  {
  var divFunFactDiv = document.createElement("div");
  divFunFactDiv.classList.add("col-md-3");
  divFunFactDiv.classList.add("col-sm-6");
  divFunFactDiv.classList.add("col-xs-12");

  var divFunFactItem = document.createElement("div");
  divFunFactItem.classList.add("fact-item");

  var divCounter = document.createElement("div");
  divCounter.classList.add("counter");
  divCounter.setAttribute("data-count", vrednostiCountera[i]);

  var spanCountera = document.createElement("span");
  spanCountera.textContent = tekstCountera[i];

  divFunFactItem.appendChild(divCounter);
  divFunFactItem.appendChild(spanCountera);
  divFunFactDiv.appendChild(divFunFactItem);
  divFunFact.appendChild(divFunFactDiv);
  }


 //dinamicki ispis whatWeDo elemenata
  var naslovWdo = new Array("Delicious Recipes", "Creative Ideas", "Inspiration & Creativity", "Community & Culture");
  var naziviKlasaSlika = new Array("first", "second", "third", "fourth");
  var tekstoviWdo = new Array(
  "Recipes that are easy to make and delicious to eat. Whether you prefer there's something for you. Your perfect pancake breakfast starts here.",
  "Unleash your creativity by turning pancakes into edible masterpieces! Learn fun techniques for turning pancakes into edible masterpieces.",
  "Discover new pancake ideas, toppings, and trends that make every stack unique and exciting.",
  "Join a vibrant community of pancake enthusiasts sharing stories, tips, and pancake art from all around the world."
  );
  var divWwdo = document.getElementById("whatWeDo");
  for(var i = 0; naslovWdo.length > i;i++)
  {
  var divWwdoDiv = document.createElement("div");
  divWwdoDiv.classList.add("col-md-3");
  divWwdoDiv.classList.add("col-sm-6");
  divWwdoDiv.classList.add("col-xs-12");

  var divWdoDiv = document.createElement("div");
  divWdoDiv.classList.add("service-item");
  divWdoDiv.classList.add(naziviKlasaSlika[i]+"-service");

  var divIcon = document.createElement("div");
  divIcon.classList.add("icon");

  var divH4 = document.createElement("h4");
  divH4.textContent = naslovWdo[i];

  var divP = document.createElement("p");
  divP.textContent = tekstoviWdo[i];

  divWdoDiv.appendChild(divIcon);
  divWdoDiv.appendChild(divH4);
  divWdoDiv.appendChild(divP);
  divWwdoDiv.appendChild(divWdoDiv);
  divWwdo.appendChild(divWwdoDiv);
  }




      //ddl reason for contact
var nizSugestija = new Array("Suggestion", "Compliment", "Complaint", "Idea", "Help", "Just saying hi");
var nizValueSugestija = new Array("sugestija", "kompliment", "zalba", "ideja", "pomoc", "hi");
var ddl = document.getElementById("padajucaLista");
var selekt = document.createElement("select");
selekt.setAttribute("id", "reasonLista");
selekt.setAttribute("class", "pointer");
var prviOption = document.createElement("option");
prviOption.setAttribute("value", "0");

var prviOptionTekst = document.createTextNode("Reason for Contact*");

prviOption.appendChild(prviOptionTekst);
selekt.appendChild(prviOption);


dinamickiDdl(nizSugestija, nizValueSugestija, selekt);

ddl.appendChild(selekt);



// chbox
var termsAndConditions = document.getElementById("chbox");

var termsAndConditionsCh = document.createElement("input");
termsAndConditionsCh.setAttribute("type", "checkbox");
termsAndConditionsCh.setAttribute("value", "prihvatio");
termsAndConditionsCh.setAttribute("id", "l");


var labela = document.createElement("label");
labela.setAttribute("for", "l");
var labelaTekst = document.createTextNode("I agree to terms and conditions");

termsAndConditions.appendChild(termsAndConditionsCh);
labela.appendChild(labelaTekst);
termsAndConditions.appendChild(labela);




var blokForme = document.getElementById("contactForme");
var blokDugme = document.getElementById("form-submit");
var blokIme = document.getElementById("name");
var blokEmail = document.getElementById("email");
var blokDdl = document.getElementById("reasonLista");
var blokTextArea = document.getElementById("message");
var blokChbox = document.getElementById("l");
blokDugme.setAttribute("disabled", "true");



  //provera chboxa
blokChbox.addEventListener("click", proveriChBox);
function proveriChBox()
{
if(blokChbox.checked)
        {
            document.getElementById("chbox").nextElementSibling.classList.add("sakrij");
            document.getElementById("chbox").nextElementSibling.classList.remove("prikazi");
            blokDugme.removeAttribute("disabled", "false");
           
        }   
    else
        {
           document.getElementById("chbox").nextElementSibling.classList.remove("sakrij");
           document.getElementById("chbox").nextElementSibling.classList.add("prikazi");
          blokDugme.setAttribute("disabled", "true");
        } 
}

//provera forme
var brojac = 0;
blokDugme.addEventListener("click", provera);
function provera(e)
{
  e.preventDefault();
    //provera ddl
    if(blokDdl.options[blokDdl.options.selectedIndex].value == 0)
        {
           document.getElementById("padajucaLista").nextElementSibling.classList.add("prikazi");
           brojac++;
        }   
    else
        {
           document.getElementById("padajucaLista").nextElementSibling.classList.remove("prikazi");
           
        } 
    //provera email
    var proveraEmaila = /^[a-z0-9_-]+([\.][a-z0-9_-]+)*@[a-z0-9_-]+([\.][a-z0-9_-]+)*\.[a-z]{2,3}$/;
        if(!proveraEmaila.test(blokEmail.value))
    {
        blokEmail.nextElementSibling.classList.add("prikazi");
        brojac++;
    }
else
    {
        blokEmail.nextElementSibling.classList.remove("prikazi");
        
        
    }
    //provera ime
    var proveraImena = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,12}$/;
        if(!proveraImena.test(blokIme.value))
    {
        blokIme.nextElementSibling.classList.add("prikazi");
        
        brojac++;
    }
        else
    {
        blokIme.nextElementSibling.classList.remove("prikazi");
        
    }
    if(brojac == 0)
        {
            document.getElementById("prosledjeno").classList.add("prikazi");
            console.log(blokIme.value);
            console.log(blokEmail.value);
            console.log(blokDdl.options[blokDdl.options.selectedIndex].value);
            
            console.log(blokTextArea.value);
            console.log("Forma je proslednjena.");
            setTimeout(function()
            {
                blokForme.submit();
            }, 5000)
            if(document.getElementById("prosledjeno").classList.contains("prikazi"))
          {
              document.getElementById("form-submit").setAttribute("disabled", "true");
          }
          if(document.getElementById("l").checked)
          {
              document.getElementById("l").setAttribute("disabled", "true");
          }
          
          lockElementsForme(prosledi, blokIme);    
          lockElementsForme(prosledi, blokEmail);
          lockElementsForme(prosledi, blokTextArea);
          lockElementsForme(prosledi, blokDdl);
        }
    else
    {
            document.getElementById("prosledjeno").classList.remove("prikazi");
            console.log(brojac); 
            brojac = 0;
            return false;
            
    }
}
var prosledi = document.getElementById("prosledjeno");
function lockElementsForme(prosledjeno, toPolje)
{
    if(prosledjeno.classList.contains("prikazi"))
      {
          toPolje.setAttribute("disabled", "true");
      }
}

          
//textArea
var areaTextValue = blokTextArea.value;
var maxCharsInArea = 200; 
blokTextArea.addEventListener("input", function()
{
        var i = 200;
        i -= blokTextArea.value.length;
        document.getElementById("broj").innerHTML = i;
        
        if(blokTextArea.value.length >= maxCharsInArea || i == 0)
          {
            i = 0;
            blokTextArea.value = blokTextArea.value.substring(0, maxCharsInArea); 
          }
})







//counter
var klaseCountera = document.getElementsByClassName("counter");
var nizCountera = [2194, 114, 1772, 17];


for(var i = 0; klaseCountera.length > i; i++)
    {
        br(klaseCountera[i], nizCountera[i]);
    }

function br(redniBroj, vrednost){
var b = 0;

var interval = setInterval(function() {
  redniBroj.textContent = b;
  b++;
  
  if (b > vrednost) {
    clearInterval(interval);
  }
}, 50);
}


$(document).ready(function () {
  //nazad na vrh stranice
    var btn = $('#vrh');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });

  btn.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });


//read more
var tekst = $(".right-text");
var readMore = $(".b1");
var br1 = 0;
readMore.click(function(){
    
    if(br1 % 2)
        {   
            tekst.hide();
            readMore.val("Read More");
            br1++;
        }
        else
            {
                tekst.show();
                readMore.val("Show Less");
                br1++;
            }
});



//animacija navMenija
document.querySelector('#logo').addEventListener('click', function (e) {
var logo = document.getElementById("logo").getAttribute("href");
if(logo.startsWith("#") || logo.startsWith("index.html#"))
      {
          e.preventDefault();
        console.log("jel radis ti uopste")
      var destinacijaId = logo.replace("index.html", "");
      var destinacija = document.querySelector(destinacijaId);

      if (destinacija) {
        var y = destinacija.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
      }
    });

var headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('.scroll-link').forEach(function(elementiNavigacije) {
  elementiNavigacije.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href.startsWith("#") || href.startsWith("index.html#")) {
      e.preventDefault();

      var destinacijaId = href.replace("index.html", "");
      var destinacija = document.querySelector(destinacijaId);

      if (destinacija) {
        var y = destinacija.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }
  });
});
 

//slider
let slides = document.querySelectorAll('.slide');
let trenutniIndex = 0;

function showSlide(i) {
    slides.forEach(function(slide)
    { 
      slide.classList.remove('selected')
    });
    slides[i].classList.add('selected');
}

function nextSlide() {
    trenutniIndex = (trenutniIndex + 1) % slides.length;
    showSlide(trenutniIndex);
}
setInterval(nextSlide, 6000);
})
   
//sortiranje slika na masterpiece sekciji
var nizNaziva = ["All", "Choco", "Protein", "Classic"];
var nizSrcSlika = ["BananaBliss", "Hurro", "RedVelvet", "StrawberryCup", "ChocolatePyramid", "ClassicAmericanButterCake", "ProteinTower", "FruitWaffles", "DarkBomb", "BerryHoneyMountain"];
var nizRednihBrojevaUnizuNaziva = new Array(3, 1, 1, 2, 2, 3, 3, 2, 1, 3);
var receptZaSvakuSliku = 
[
"Ingredients (makes ~8 pancakes)<br/>1 cup all-purpose flour<br/>1 tbsp sugar (or honey)<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>1 cup buttermilk (or 1 cup milk + 1 tsp lemon juice, let sit 5 mins)<br/>1 large ripe banana (mashed)<br/>1 egg<br/>2 tbsp melted butter (plus more for cooking)<br/>1 tsp vanilla extract",
"Ingredients (makes ~6 pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk (any kind)<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract<br/>¼ cup caramel or dulce de leche (for batter swirl)",
"Ingredients (makes ~6 pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp cocoa powder<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup buttermilk (or ¾ cup milk + 1 tsp lemon juice, let sit 5 mins)<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract",
"Ingredients (makes ~12 mini pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk (any kind)<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract<br/>½ cup chopped fresh strawberries (or frozen, thawed)",
"Ingredients (makes ~6 mini pyramids)<br/>1 cup all-purpose flour<br/>3 tbsp cocoa powder<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>¾ cup milk<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract", 
"Ingredients (makes ~6–8 pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk (any kind)<br/>1 large egg<br/>3 tbsp unsalted butter, melted (plus extra for pan)<br/>1 tsp vanilla extract",
"Ingredients (makes ~6 pancakes)<br/>1 cup oat flour (or blend oats into flour)<br/>1 scoop vanilla or chocolate protein powder (~30g)<br/>1 tsp baking powder<br/>Pinch of salt<br/>1 tsp cinnamon (optional)<br/>1 cup milk (dairy or plant-based)<br/>2 large eggs<br/>1 tbsp melted coconut oil or butter (plus extra for pan)<br/>1 tsp vanilla extract",
"Ingredients (makes ~6 pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract<br/>½ cup mixed fresh or frozen fruit (berries, chopped apple, or banana)",
"Ingredients (makes ~6 pancakes)<br/>1 cup all-purpose flour<br/>3 tbsp cocoa powder<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk (any kind)<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract",
"Ingredients (makes ~6-8 pancakes)<br/>1 cup all-purpose flour<br/>2 tbsp sugar<br/>1 tsp baking powder<br/>½ tsp baking soda<br/>Pinch of salt<br/>¾ cup milk<br/>1 large egg<br/>2 tbsp melted butter (plus extra for pan)<br/>1 tsp vanilla extract"
];
//dinamicke slike
var slikoDrzac = document.querySelector(".galerija");

for(var i = 0; nizSrcSlika.length > i; i++)
  {
    var glavniDiv = document.createElement("div");
    glavniDiv.classList.add("item");
    glavniDiv.classList.add("col-md-8");
    glavniDiv.classList.add("col-lg-5");

      var sl = document.createElement("img");
      sl.setAttribute("src","img/" + nizSrcSlika[i] + ".jpg");
      sl.setAttribute("alt", nizSrcSlika[i]);
      sl.classList.add("img-fluid");

      var overlay = document.createElement("div");
      overlay.classList.add("overlej");
      overlay.classList.add("sakrij");

      var tekstUnutarOverlayDiva = document.createElement("h4");
      var tekstUnutarOverlayDivaH4 = document.createTextNode(nizSrcSlika[i]);

      var divOverlay = document.createElement("div");
      divOverlay.classList.add("action-area");
      
      var tekstUnutarDivOverlay = document.createElement("p");
      tekstUnutarDivOverlay.innerHTML = receptZaSvakuSliku[i];
      tekstUnutarDivOverlay.classList.add("pUnutarOverleja");
      
      divOverlay.appendChild(tekstUnutarDivOverlay);
      tekstUnutarOverlayDiva.appendChild(tekstUnutarOverlayDivaH4);
      overlay.appendChild(tekstUnutarOverlayDiva);
      overlay.appendChild(divOverlay);
      glavniDiv.appendChild(overlay);
      glavniDiv.appendChild(sl);
    slikoDrzac.appendChild(glavniDiv);
    }
    
    var divoviSlika = document.querySelectorAll(".item");
    
    for(var i = 0; divoviSlika.length > i; i++)
      {
          divoviSlika[i].setAttribute("data-name", nizNaziva[nizRednihBrojevaUnizuNaziva[i]]);
      }
    
    var buttoni = document.querySelector(".grupacija");
    for(var i = 0; nizNaziva.length > i; i++)
      {
        
        var spanLi = document.createElement("span");
        spanLi.classList.add("item-link");
        spanLi.setAttribute('data-name', nizNaziva[i]);
        var spanLiText = document.createTextNode(nizNaziva[i]);
        spanLi.appendChild(spanLiText);
        buttoni.appendChild(spanLi);
      }
      document.querySelectorAll(".item-link")[0].classList.add("menu-active");
      buttoni.addEventListener("click", function(selectedItem)
      {
        
      if(selectedItem.target.classList.contains("item-link")){
        document.querySelector(".menu-active").classList.remove("menu-active");
        selectedItem.target.classList.add("menu-active");
        let filterName = selectedItem.target.getAttribute("data-name");
        
        divoviSlika.forEach(function(image){
          
          let filterImages = image.getAttribute("data-name");
          
          if((filterImages == filterName) || filterName == "All")
            {
              image.style.display="block";
              
            }
            else
              {
                image.style.display="none";
               
              }
        })
      }
    })
    //hover na slikama
    var fluidSlike = document.getElementsByClassName("item");
    var divSaTekstom = document.getElementsByClassName("overlej");
    for(let i = 0; fluidSlike.length > i; i++)
       {
         fluidSlike[i].addEventListener("mouseover", function()
         { 
          divSaTekstom[i].classList.add("prikazi");
         }); 
         fluidSlike[i].addEventListener("mouseout", function()
         {
           divSaTekstom[i].classList.remove("prikazi"); 
          }); 
        }
        
}
else
  {
//animacija za imeAutora
var imeAuthora = document.querySelector("#autor");
var imeAuthoraText = imeAuthora.textContent;
var splitImeAuthora = imeAuthoraText.split("");
imeAuthora.textContent = "";
var brojacZaBoje = 0;
for (var i = 0; i < splitImeAuthora.length; i++) 
  {
    imeAuthora.innerHTML += "<span class='span'>" + splitImeAuthora[i] + "</span>";
  }
var karakter = 0;
var tajmer = setInterval(t, 50);
function t()
  {
var span = document.querySelectorAll('.span')[karakter];
if(brojacZaBoje % 2)
  {
    span.classList.add('animacija');
    span.classList.remove('animacija2');  
    
  }
else
  {
    span.classList.add("animacija2");
    span.classList.remove("animacija");
  
  }
karakter++;
if(karakter == splitImeAuthora.length)
    {
      karakter = 0;
      brojacZaBoje++;
   
    }
  }

}

