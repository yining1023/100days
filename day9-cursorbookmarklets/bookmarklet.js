//use this website:http://chriszarate.github.io/bookmarkleter/ to generate bookmarklets
var rainToggle = false;

document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/9c/ec/9cecfe2a462fe3ddc4a415b65655fab6.png'), auto;"

var img = document.createElement("img");
    img.id = 'image0';
    img.src = 'http://emojipedia-us.s3.amazonaws.com/cache/5a/bc/5abc16f170f1182816f89b04fe1fbf9e.png';
    img.style.position = 'fixed';
    img.width = '70';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.zIndex = '100';
    document.body.appendChild(img);
    document.getElementById('image0').style.visibility = 'hidden';

var img1 = document.createElement("img");
    img1.id = 'image1';
    img1.src = 'http://emojipedia-us.s3.amazonaws.com/cache/5a/bc/5abc16f170f1182816f89b04fe1fbf9e.png';
    img1.style.position = 'fixed';
    img.width = '55';
    img1.style.top = '10%';
    img1.style.left = '30%';
    img1.style.zIndex = '100';
    document.body.appendChild(img1);
    document.getElementById('image1').style.visibility = 'hidden';

var img2 = document.createElement("img");
    img2.id = 'image2';
    img2.src = 'http://emojipedia-us.s3.amazonaws.com/cache/5a/bc/5abc16f170f1182816f89b04fe1fbf9e.png';
    img2.style.position = 'fixed';
    img.width = '50';
    img2.style.top = '80%';
    img2.style.left = '20%';
    img2.style.zIndex = '100';
    document.body.appendChild(img2);
    document.getElementById('image2').style.visibility = 'hidden';

var img3 = document.createElement("img");
    img3.id = 'image3';
    img3.src = 'http://emojipedia-us.s3.amazonaws.com/cache/cc/93/cc937cda4d376ba6b5021c6d795b2d16.png';
    img3.style.position = 'fixed';
    img3.width = '100';
    img3.style.top = '80%';
    img3.style.left = '70%';
    img3.style.zIndex = '100';
    document.body.appendChild(img3);
    document.getElementById('image3').style.visibility = 'hidden';

var img4 = document.createElement("img");
    img4.id = 'image4';
    img4.src = 'http://emojipedia-us.s3.amazonaws.com/cache/cc/93/cc937cda4d376ba6b5021c6d795b2d16.png';
    img4.style.position = 'fixed';
    img4.width = '85';
    img4.style.top = '50%';
    img4.style.left = '20%';
    img4.style.zIndex = '100';
    document.body.appendChild(img4);
    document.getElementById('image4').style.visibility = 'hidden';

var img5 = document.createElement("img");
    img5.id = 'image5';
    img5.src = 'http://emojipedia-us.s3.amazonaws.com/cache/e5/9e/e59ea2385d96fdd080f9ebf561190160.png';
    img5.style.position = 'fixed';
    img5.width = '90';
    img5.style.top = '15%';
    img5.style.left = '75%';
    img5.style.zIndex = '100';
    document.body.appendChild(img5);
    document.getElementById('image5').style.visibility = 'hidden';

var img6 = document.createElement("img");
    img6.id = 'image6';
    img6.src = 'http://emojipedia-us.s3.amazonaws.com/cache/90/db/90db849196f4397c216c7fcb60eb8215.png';
    img6.style.position = 'fixed';
    img6.width = '65';
    img6.style.top = '7%';
    img6.style.left = '5%';
    img6.style.zIndex = '100';
    document.body.appendChild(img6);
    document.getElementById('image6').style.visibility = 'hidden';

var img7 = document.createElement("img");
    img7.id = 'image7';
    img7.src = 'http://emojipedia-us.s3.amazonaws.com/cache/78/46/78461211fc7ce432b6f5ee5118f5ce15.png';
    img7.style.position = 'fixed';
    img7.width = '125';
    img7.style.top = '80%';
    img7.style.left = '85%';
    img7.style.zIndex = '100';
    document.body.appendChild(img7);
    document.getElementById('image7').style.visibility = 'hidden';

var img8 = document.createElement("img");
    img8.id = 'image8';
    img8.src = 'http://emojipedia-us.s3.amazonaws.com/cache/1c/cd/1ccdf632e6f98bb4f08fcf56b8b12619.png';
    img8.style.position = 'fixed';
    img8.width = '115';
    img8.style.top = '77%';
    img8.style.left = '5%';
    img8.style.zIndex = '100';
    document.body.appendChild(img8);
    document.getElementById('image8').style.visibility = 'hidden';

document.getElementsByTagName('body')[0].onclick = function(){
  if (rainToggle == false){
    document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/da/d2/dad2db0c2cf044ef7ac590b92a540bca.png'), auto;"
  rainToggle = true;
  document.getElementById('image0').style.visibility = 'visible';
  document.getElementById('image1').style.visibility = 'visible';
  document.getElementById('image2').style.visibility = 'visible';
  document.getElementById('image3').style.visibility = 'visible';
  document.getElementById('image4').style.visibility = 'visible';
  document.getElementById('image5').style.visibility = 'visible';
  document.getElementById('image6').style.visibility = 'visible';
  document.getElementById('image7').style.visibility = 'visible';
  document.getElementById('image8').style.visibility = 'visible';
  }
else{
    document.getElementsByTagName('body')[0].style = "cursor: url('http://emojipedia-us.s3.amazonaws.com/cache/9c/ec/9cecfe2a462fe3ddc4a415b65655fab6.png'), auto;"
  rainToggle = false;
  document.getElementById('image0').style.visibility = 'hidden';
  document.getElementById('image1').style.visibility = 'hidden';
  document.getElementById('image2').style.visibility = 'hidden';
  document.getElementById('image3').style.visibility = 'hidden';
  document.getElementById('image4').style.visibility = 'hidden';
  document.getElementById('image5').style.visibility = 'hidden';
  document.getElementById('image6').style.visibility = 'hidden';
  document.getElementById('image7').style.visibility = 'visible'; 
  document.getElementById('image8').style.visibility = 'hidden';
 }
}


