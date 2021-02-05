var people= [
    "1. Me and My Sister",
    "2. My Mom",
    "3. My Dad",
  ];
  var images= [
        "IMG_7201.JPG",
        "IMG_7055.jpg",
        "IMG_3442.JPG",
      ];
    
  var us=0; 
  function changeimage() {
    document.getElementById ("defaultimage").src= images [i];
      document.getElementById("reason1").innerHTML= people [i];
    us++; 
