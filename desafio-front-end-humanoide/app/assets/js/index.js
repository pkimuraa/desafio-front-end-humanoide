var photosContainer;

document.addEventListener("DOMContentLoaded", function(){
    photosContainer=document.getElementById('photos-container');
    loadJSON(function(photosData) {
        if (window.innerWidth > 480) {
          buildPhoto(photosData.products[0]);
          buildPhoto(photosData.products[1]);
          buildPhoto(photosData.products[2]);
        }
        else {
          buildPhoto(photosData.products[0]);
          buildPhoto(photosData.products[1]);
          buildPhoto(photosData.products[2]);
          buildPhoto(photosData.products[0]);
        }
      });
      console.log("kas")
      if (document.getElementById("selectedPhoto")) {
        console.log("karpoaa")
        document.getElementById("selectedPhoto").src="../template/save.png";
      }
});

function populatePhotos(){
    
}
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../../server/data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }
var pos = 1;

  function buildPhoto(photoData){
     var price = photoData.price;
     var promocionalPrice = photoData.promotional_price;
     var photo = photoData.image;
     console.log(photoData);
      var div = document.createElement('div');

      div.className = 'p1';

      div.innerHTML= 
        '<div class="photo foto'+pos+'"></div><span class="text">De <s>R$'+price+'</s> Por<b> R$'+promocionalPrice+'</b></span><button onClick="changePage('+pos+')"  class="button">Mais Detalhes</button>'
      photosContainer.appendChild(div);
      pos++;
    }

    function changePage(pos) {
      localStorage.setItem("fotoSelecionada",pos);
      window.location.pathname = '/app/views/show.html'
    }