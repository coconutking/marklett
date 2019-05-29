script = document.createElement("script");
script.src = "//www.gstatic.com/firebasejs/3.7.8/firebase.js";
script.onload = so_init;
document.body.appendChild(script);

/********
 *
javascript:prefFile='';
void(z=document.body.appendChild(document.createElement('script')));
void(z.language='javascript');void(z.type='text/javascript');
void(z.src='http://www.memoryfab.com/js/bookmarklet.js');
void(z.id='modi');

javascript:(function(){
var s=document.createElement('script');
s.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
if(typeof jQuery!='undefined'){}else{document.getElementsByTagName('head')[0].appendChild(s);}
var t=document.createElement('script');
t.setAttribute('src','http://www.memoryfab.com/js/bookmarklet.js');
})();

********/
// prevent IE from making tons of requests to background images
if (document.execCommand && document.all && !window.opera)
  document.execCommand("BackgroundImageCache", false, true);

function so_init() {
  var config = {
    apiKey: "AIzaSyA9laziDlYhJ4AMeJ8DOhj7UvqZRILrF3w",
    authDomain: "autos-42b9f.firebaseapp.com",
    databaseURL: "https://autos-42b9f.firebaseio.com",
    projectId: "autos-42b9f",
    storageBucket: "autos-42b9f.appspot.com",
    messagingSenderId: "26837382404"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
  var Ai7Mg6P = '<div id="scimg">';
  var imgarra = [];
  var imgarrb = {}; //obj['a'] = 'foo';
  for (i7M1bQz = 0; i7M1bQz < document.images.length; i7M1bQz++) {
    if (
      document.images[i7M1bQz].clientWidth >=
      document.images[i7M1bQz].clientHeight
    ) {
      if (
        document.images[i7M1bQz].clientWidth > 380 &&
        document.images[i7M1bQz].clientHeight > 200
      ) {
        if (!imgarrb[document.images[i7M1bQz].src]) {
          Ai7Mg6P +=
            '<div class=containerMg6P><input type="hidden" name="imagess[]" value="' +
            document.images[i7M1bQz].src +
            '"><img src=' +
            document.images[i7M1bQz].src +
            " class=imageMg6P style='width:100%'><button class=middle onclick='javascript:this.parentNode.remove();'>Remove</button></div>";
          imgarra.push(document.images[i7M1bQz].src);
          imgarrb[document.images[i7M1bQz].src] = document.images[i7M1bQz].src;
          console.log("Image added");
        }
      } else if (document.images[i7M1bQz].parentNode.tagName === "A") {
        if (
          document.images[i7M1bQz].parentNode.href.match(
            /\.(jpeg|jpg|gif|png)$/
          ) != null
        ) {
          if (!imgarrb[document.images[i7M1bQz].parentNode.href]) {
            Ai7Mg6P +=
              '<div class=containerMg6P><input type="hidden" name="imagess[]" value="' +
              document.images[i7M1bQz].parentNode.href +
              '"><img src=' +
              document.images[i7M1bQz].parentNode.href +
              " class=imageMg6P style='width:100%'><button class=middle onclick='javascript:this.parentNode.remove();'>Remove</button></div>";
            imgarra.push(document.images[i7M1bQz].parentNode.href);
            imgarrb[document.images[i7M1bQz].parentNode.href] =
              document.images[i7M1bQz].parentNode.href;
            console.log("Anchor of Image added");
          }
        }
      }
    }
  }
  // iterate through all links
  for (i7M1bQz = 0; i7M1bQz < document.links.length; i7M1bQz++) {
    if (document.links[i7M1bQz].getElementsByTagName("img")[0]) {
      var imageComp = document.links[i7M1bQz].getElementsByTagName("img")[0];
      if (imageComp.clientWidth >= imageComp.clientHeight) {
        if (imageComp.clientWidth > 380 && imageComp.clientHeight > 200) {
          if (!imgarrb[imageComp.src]) {
            Ai7Mg6P +=
              '<div class=containerMg6P><input type="hidden" name="imagess[]" value="' +
              imageComp.src +
              '"><img src=' +
              imageComp.src +
              " class=imageMg6P style='width:100%'><button class=middle onclick='javascript:this.parentNode.remove();'>Remove</button></div>";
            imgarra.push(imageComp.src);
            imgarrb[imageComp.src] = imageComp.src;
            console.log("Link Child Image Added");
          }
        }
      }
    }
  }
  // iterate through all divs instagram
  for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
    if (
      document.getElementsByTagName("div")[i].getElementsByTagName("img")[0]
    ) {
      var imageComp = document
        .getElementsByTagName("div")
        [i].getElementsByTagName("img")[0];
      if (imageComp.clientWidth >= imageComp.clientHeight) {
        if (imageComp.clientWidth > 380 && imageComp.clientHeight > 200) {
          if (!imgarrb[imageComp.src]) {
            console.log(imgarrb[imageComp.src]);
            Ai7Mg6P +=
              '<div class=containerMg6P><input type="hidden" name="imagess[]" value="' +
              imageComp.src +
              '"><img src=' +
              imageComp.src +
              " class=imageMg6P style='width:100%'><button class=middle onclick='javascript:this.parentNode.remove();'>Remove</button></div>";
            imgarra.push(imageComp.src);
            imgarrb[imageComp.src] = imageComp.src;
            console.log("Div Child Image Added");
          }
        }
      }
    }
  }

  var el =
    '<style>.containerMg6P{position:relative;width:100%;margin:5px}.imageMg6P{opacity:1;display:block;width:100%;height:auto;backface-visibility:hidden;}.middle{position:absolute;top:2%;left:1%;background-color:#4CAF50;color:white;font-size:13px;padding:6px 8px;}</style><div id="bookmarkl33t" style="position:fixed;color:#b8b8b8;font-family:arial,Verdana;background:#000;border:1px #000 solid;left:50px;bottom:50px;z-index:1000;width:350px;height:40%;padding:10px 10px 10px 0px;overflow-x:hidden;overflow-y:scroll;"><center><b style="background:#000;text-align:center;position:relative;display:block;padding:5px;font-size:12px;">▓▒░ Fitmentking ░▒</b><form target="_blank" action="http://104.236.179.232/welcome/testgetimages/' +
    md5(document.url) +
    '" method="post"><input type="hidden" name="url" value="' +
    document.url +
    '"><div id="asdf">' +
    Ai7Mg6P +
    '</div> <select name="dia"><option>DIA</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option></select><select name="fwidth"><option>FWidth</option><option value="7.5">7.5</option><option value="8.0">8.0</option><option value="8.5">8.5</option><option value="9.0">9.0</option><option value="9.5">9.5</option><option value="10.0">10.0</option><option value="10.5">10.5</option><option value="11.0">11.0</option><option value="11.5">11.5</option><option value="12.0">12.0</option><option value="12.5">12.5</option><option value="13.0">13.0</option></select><input type="text" placeholder="F-ET" name="foff" size="2" /><select name="rwidth"><option>RWidth</option><option value="7.5">7.5</option><option value="8.0">8.0</option><option value="8.5">8.5</option><option value="9.0">9.0</option><option value="9.5">9.5</option><option value="10.0">10.0</option><option value="10.5">10.5</option><option value="11.0">11.0</option><option value="11.5">11.5</option><option value="12.0">12.0</option><option value="12.5">12.5</option><option value="13.0">13.0</option></select><input type="text" placeholder="R-ET" name="roff" size="2" /><button id="add">Submit</button></center></form></div>';
  document.body.innerHTML += el;

  document.getElementById("add").addEventListener("click", function() {
    /**xhr=new XMLHttpRequest();
		xhr.open("POST",encodeURI("http://104.236.179.232/welcome/testgetimages/"+accct));
		xhr.withCredentials=true;xhr.send(JSON.stringify({
		url: document.location.href,images: imgarra,tags: document.getElementById('tag-input').value}));**/
  });
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bitRotateLeft(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function binlMD5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;

    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2rstr(input) {
  var i;
  var output = "";
  var length32 = input.length * 32;
  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
  }
  return output;
}

/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }
  var length8 = input.length * 8;
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }
  return output;
}

/*
 * Calculate the MD5 of a raw string
 */
function rstrMD5(s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}

/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */
function rstrHMACMD5(key, data) {
  var i;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = undefined;
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input) {
  var hexTab = "0123456789abcdef";
  var output = "";
  var x;
  var i;
  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
  }
  return output;
}

/*
 * Encode a string as utf-8
 */
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}

/*
 * Take string arguments and return either raw or hex encoded strings
 */
function rawMD5(s) {
  return rstrMD5(str2rstrUTF8(s));
}
function hexMD5(s) {
  return rstr2hex(rawMD5(s));
}
function rawHMACMD5(k, d) {
  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
}
function hexHMACMD5(k, d) {
  return rstr2hex(rawHMACMD5(k, d));
}

function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }
    return rawMD5(string);
  }
  if (!raw) {
    return hexHMACMD5(key, string);
  }
  return rawHMACMD5(key, string);
}
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase
    .database()
    .ref()
    .child("posts")
    .push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return firebase
    .database()
    .ref()
    .update(updates);
}

//so_init();
