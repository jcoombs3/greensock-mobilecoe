// //controller.js
// var source   = $("#entry-template").html();
// var template = Handlebars.compile(source);

// var context = 
// {apps: [{
// 	"appName" : "A",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },

// {
// 	"appName" : "B",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },

// {
// 	"appName" : "C",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },

// {
// 	"appName" : "D",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "true"
// },


// {
// 	"appName" : "E",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "F",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "G",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "true",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },


// {
// 	"appName" : "H",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "I",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },


// {
// 	"appName" : "J",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "K",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },


// {
// 	"appName" : "L",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "M",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },


// {
// 	"appName" : "N",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "O",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "P",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },
// {
// 	"appName" : "Q",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "R",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "true"
// },
// {
// 	"appName" : "S",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },
// {
// 	"appName" : "T",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "true",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "U",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "false",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "V",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "true"
// },
// {
// 	"appName" : "W",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "X",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// },
// {
// 	"appName" : "Y",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "false",
// 	"data-ipad" : "true",
// 	"data-iphone" : "false",
// 	"data-kiosk" : "true"
// },
// {
// 	"appName" : "Z",
// 	"company" : "companyName",
// 	"description" : "This is a brief description of an app.  It'll cover basic functionality, maketing impact, awards won, among any other relevent information about the app.",
// 	"data-android" : "true",
// 	"data-ipad" : "false",
// 	"data-iphone" : "true",
// 	"data-kiosk" : "false"
// }]};


// Handlebars.registerHelper('list', function(items, options) {
//   var out = "<ul>";

//   for(var i=0, l=items.length; i<l; i++) {
//     out = out + "<li>" + options.fn(items[i]) + "</li>";
//   }

//   return out + "</ul>";
// });

// console.log(context);

// var html    = template(context);

// console.log("should have injected content");