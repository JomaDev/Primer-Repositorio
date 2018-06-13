function Suma() {
  var d = document.getElementById('textb1').value;
  var w = document.getElementById('textb2').value;
  if(d == "" || w == "")
  {
    alert("No falles");
    alert("Ingrese corectamente los números");
  }
  else
  {
    var s;
    s = parseInt(w)+parseInt(d);
    alert("La suma es de: "+ s+" unidades");
  }
}
