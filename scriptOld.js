// Your JS goes here

var div = document.getElementsByTagName("div");
var pallete = "padding-bottom:2%; margin: 0; width: 2%; float: left; border: 1px solid #666;bottom:1px;";
var cssColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var color;


function createBoard(end) {
   for (var i = 0; i < end; i++) {
      var newDIV = document.createElement("div");
      document.body.appendChild(newDIV);
      div[i].style.cssText = pallete;
      div[i].style.backgroundColor = cssColors[i];
   }
}

function fill() {
   for (var i = 146; i < div.length; i++) {
      div[i].addEventListener("click", function () {
         this.style.backgroundColor = color;
      });
   }
}

function option() {
   for (var i = 0; i < 146; i++) {
      div[i].addEventListener("click", function() {
         color = this.style.backgroundColor; 
      });
   }
}
window.onload = function () {
   createBoard(2024);
   fill();
   option();
};



// var pixelGrid = document.getElementById("pixelGrid");

// for (var i=0; i<1000; i++) {
// 	var gridDiv = document.createElement("div");
// 	gridDiv.style.width = "2%";
// 	gridDiv.style.paddingBottom = "2%";
// 	gridDiv.style.paddingBottom.color = "grey";
// 	gridDiv.style.float = "left";
// 	gridDiv.style.border = "1px solid grey";
// 	gridDiv.style.backgroundColor = "white";
// 	document.body.appendChild(gridDiv);
// };

// var body = document.getElementsByTagName('body')[0];
// var newDiv;
// var color = "white";

// for(var i = 0; i < 500; i++){
//     newDiv = document.createElement('DIV');
//     body.appendChild(newDiv);
//     newDiv.style.backgroundColor = color;
//     newDiv.style.width = "1%";
//     newDiv.style.float = "left";
//     newDiv.style.border = "1px solid black";
//     newDiv.style.paddingBottom = "1%";
//     newDiv.addEventListener("click", function(){
//         this.style.backgroundColor = color;
//     })
// }

// var colors = ["red", "orange", "yellow", "green", "blue"];
// colors.forEach(function(anything){
//     var div = document.createElement("DIV");
//     body.appendChild(div);
//     div.style.width = "200px";
//     div.style.border = "1px solid black";
//     div.style.backgroundColor = anything;
//     div.style.paddingBottom = "10%"

//     div.addEventListener("click", function(){
//         color = this.style.backgroundColor;
//     });
// })


