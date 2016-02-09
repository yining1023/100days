var s=document.createElement('link');
s.setAttribute('href','https://afeld.github.io/emoji-css/emoji.css');
s.setAttribute('rel','stylesheet');
s.setAttribute('type','text/css');
document.getElementsByTagName('head')[0].appendChild(s);
alert('Let us change words to emojis!');

var words0 = $("p").text().split(" ");
$("p").empty();
$.each(words0, function(i, v) {
    v = " "+ v + " ";
    $("p").append($(" <span> ").text(v));
});

var words1 = $("h1").text().split(" ");
$("h1").empty();
$.each(words1, function(i, v) {
    v = " "+ v + " ";
    $("h1").append($(" <span> ").text(v));
});

var words2 = $("h2").text().split(" ");
$("h2").empty();
$.each(words2, function(i, v) {
    v = " "+ v + " ";
    $("h2").append($(" <span> ").text(v));
});

var words3 = $("h3").text().split(" ");
$("h3").empty();
$.each(words3, function(i, v) {
    v = " "+ v + " ";
    $("h3").append($(" <span> ").text(v));
});
var words4 = $("div").text().split(" ");
$("div").empty();
$.each(words4, function(i, v) {
    v = " "+ v + " ";
    $("div").append($(" <span> ").text(v));
});
var words5 = $("a").text().split(" ");
$("a").empty();
$.each(words5, function(i, v) {
    v = " "+ v + " ";
    $("a").append($(" <span> ").text(v));
});

// gets all text nodes
function getTextNodes() {
  var nodes = [];
  var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, null);
  var node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

var textNodes = getTextNodes();

var emojis = ["--1","100","1234","8ball","ab","abc","abcd","accept","aerial_tramway","airplane","alarm_clock","alien","ambulance","anchor","angel","anger","angry","anguished","ant","apple","aquarius","aries","arrow_backward","arrow_double_down","arrow_double_up","arrow_down","arrow_down_small","arrow_forward","arrow_heading_down","arrow_heading_up","arrow_left","arrow_lower_left","arrow_lower_right","arrow_right","arrow_right_hook","arrow_up","balloon","ballot_box_with_check","bamboo","banana","bangbang","bank","bar_chart","barber","baseball","basketball","bath","bathtub","battery","bear","bee","beer","beers","beetle","beginner","bell","bento","bicyclist","bike","bikini","bird","birthday","black_circle","bullettrain_front","bullettrain_side","bus","busstop","bust_in_silhouette","busts_in_silhouette","cactus","cake","calendar","calling","camel","camera","cancer","candy","capital_abcd","capricorn","car","card_index","carousel_horse","cat","cat2","cd","chart","chart_with_downwards_trend","chart_with_upwards_trend","checkered_flag","cherries","cherry_blossom","chestnut","chicken","children_crossing","chocolate_bar","fearful","feelsgood","feet","ferris_wheel","file_folder","finnadie","fire","fire_engine","fireworks","first_quarter_moon","first_quarter_moon_with_face","fish","fish_cake","fishing_pole_and_fish","fist","five","flags","flashlight","floppy_disk","flower_playing_cards","flushed","foggy","football","fork_and_knife","fountain","four","four_leaf_clover","fr","free","fried_shrimp","fries","frog","frowning","fu","fuelpump","full_moon","full_moon_with_face","game_die","gb","gem","gemini","ghost","gift","gift_heart","girl","globe_with_meridians","goat","goberserk","laughing","leaves","nose","notebook","notebook_with_decorative_cover","notes","nut_and_bolt","ocean","octocat","octopus","oden","office","ok","ok_hand","ok_woman","older_man","older_woman","on","oncoming_automobile","ring","rocket","roller_coaster","rooster","rose","rotating_light","round_pushpin","rowboat","ru","rugby_football","runner","running","surfer","sushi","suspect","suspension_railway","sweat","sweat_drops","sweat_smile","sweet_potato","swimmer","symbols","syringe","tada","tanabata_tree","tangerine","taurus","taxi","tea","telephone","weary","wedding","whale","whale2","wheelchair","white_check_mark","white_circle","white_flower","white_large_square","white_medium_small_square","white_medium_square","white_small_square","white_square_button","wind_chime","wine_glass","wink","wolf","woman","womans_clothes","womans_hat","womens","worried","wrench","yello"];

textNodes.forEach(function(textNode) {
  var text = textNode.textContent;
  for(var j = 0; j < emojis.length; j++){
   if (text.indexOf(emojis[j]) !== -1) {
    var replacementNode = document.createElement('i');
    replacementNode.className = 'em em-' + emojis[j];
    textNode.parentNode.insertBefore(replacementNode, textNode);
    textNode.parentNode.removeChild(textNode);
   }
  }
});




//second version
var s=document.createElement('link');
s.setAttribute('href','https://afeld.github.io/emoji-css/emoji.css');
s.setAttribute('rel','stylesheet');
s.setAttribute('type','text/css');
document.getElementsByTagName('head')[0].appendChild(s);
alert('Let us change words to emojis!');

var words0 = $("p").text().split(" ");
$("p").empty();
$.each(words0, function(i, v) {
    v = v + " ";
    $("p").append($(" <span> ").text(v));
});

var words1 = $("h1").text().split(" ");
$("h1").empty();
$.each(words1, function(i, v) {
    v = v + " ";
    $("h1").append($(" <span> ").text(v));
});

var words2 = $("h2").text().split(" ");
$("h2").empty();
$.each(words2, function(i, v) {
    v = v + " ";
    $("h2").append($(" <span> ").text(v));
});

var words3 = $("h3").text().split(" ");
$("h3").empty();
$.each(words3, function(i, v) {
    v = v + " ";
    $("h3").append($(" <span> ").text(v));
});
var words4 = $("div").text().split(" ");
$("div").empty();
$.each(words4, function(i, v) {
    v = v + " ";
    $("div").append($(" <span> ").text(v));
});
var words5 = $("a").text().split(" ");
$("a").empty();
$.each(words5, function(i, v) {
    v = v + " ";
    $("a").append($(" <span> ").text(v));
});

// gets all text nodes
function getTextNodes() {
  var nodes = [];
  var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, null);
  var node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

var textNodes = getTextNodes();

var emojis = ["--1","100","1234","8ball","ab","abc","abcd","accept","aerial_tramway","airplane","alarm_clock","alien","ambulance","anchor","angel","anger","angry","anguished","ant","apple","aquarius","aries","arrow_backward","arrow_double_down","arrow_double_up","arrow_down","arrow_down_small","arrow_forward","arrow_heading_down","arrow_heading_up","arrow_left","arrow_lower_left","arrow_lower_right","arrow_right","arrow_right_hook","arrow_up","balloon","ballot_box_with_check","bamboo","banana","bangbang","bank","bar_chart","barber","baseball","basketball","bath","bathtub","battery","bear","bee","beer","beers","beetle","beginner","bell","bento","bicyclist","bike","bikini","bird","birthday","black_circle","bullettrain_front","bullettrain_side","bus","busstop","bust_in_silhouette","busts_in_silhouette","cactus","cake","calendar","calling","camel","camera","cancer","candy","capital_abcd","capricorn","car","card_index","carousel_horse","cat","cat2","cd","chart","chart_with_downwards_trend","chart_with_upwards_trend","checkered_flag","cherries","cherry_blossom","chestnut","chicken","children_crossing","chocolate_bar","fearful","feelsgood","feet","ferris_wheel","file_folder","finnadie","fire","fire_engine","fireworks","first_quarter_moon","first_quarter_moon_with_face","fish","fish_cake","fishing_pole_and_fish","fist","five","flags","flashlight","floppy_disk","flower_playing_cards","flushed","foggy","football","fork_and_knife","fountain","four","four_leaf_clover","fr","free","fried_shrimp","fries","frog","frowning","fu","fuelpump","full_moon","full_moon_with_face","game_die","gb","gem","gemini","ghost","gift","gift_heart","girl","globe_with_meridians","goat","goberserk","laughing","leaves","nose","notebook","notebook_with_decorative_cover","notes","nut_and_bolt","ocean","octocat","octopus","oden","office","ok","ok_hand","ok_woman","older_man","older_woman","on","oncoming_automobile","ring","rocket","roller_coaster","rooster","rose","rotating_light","round_pushpin","rowboat","ru","rugby_football","runner","running","surfer","sushi","suspect","suspension_railway","sweat","sweat_drops","sweat_smile","sweet_potato","swimmer","symbols","syringe","tada","tanabata_tree","tangerine","taurus","taxi","tea","telephone","weary","wedding","whale","whale2","wheelchair","white_check_mark","white_circle","white_flower","white_large_square","white_medium_small_square","white_medium_square","white_small_square","white_square_button","wind_chime","wine_glass","wink","wolf","woman","womans_clothes","womans_hat","womens","worried","wrench","yello"];

textNodes.forEach(function(textNode) {
  var text = textNode.textContent;
  for(var j = 0; j < emojis.length; j++){
   if (text.indexOf(emojis[j]) !== -1) {
    var replacementNode = document.createElement('i');
    replacementNode.className = 'em em-' + emojis[j];
    textNode.parentNode.insertBefore(replacementNode, textNode);
    textNode.parentNode.removeChild(textNode);
   }
  }
});
