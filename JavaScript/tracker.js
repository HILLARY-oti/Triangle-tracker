function Hillary(){
    var adjacent= parseInt(document.getElementById('First Number').value);
    var hypotenuse= parseInt(document.getElementById('Second Number').value);
    var opposite =parseInt(document.getElementById('Third Number').value);
    if (adjacent===hypotenuse&&hypotenuse===opposite){
      alert("EQUILATERAL TRIANGLE");
    }
    else if(adjacent===opposite||opposite===hypotenuse||hypotenuse===adjacent){
      alert("ISOSCELES TRIANGLE");
    }
    else if (adjacent+hypotenuse<=opposite||hpotenuse +opposite<=adjacent||adjacent+opposite<=hypotenuse){
      alert("SCALENE TRIANGLE");
    }
    else{
    alert(scalene);    
    }
}