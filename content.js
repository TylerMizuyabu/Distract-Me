goodSites=['youtube.com','reddit.com','facebook.com','tumblr.com','twitter.com','netflix.com','twitch.tv','i.ytimg.com/vi/s2Wd-1euBF8/maxresdefault.jpg','catfacts.co','sneakytime.com/rr/#.WEM87_krKMo','species-in-pieces.com'];
var redirect = true;
for (site in goodSites){
    if(((String)(window.location)).includes(goodSites[site])){
        redirect = false;
        break;
    }
}
if(redirect){
    alert("Nope");
    var index = parseInt(Math.random()*goodSites.length);
    window.location = 'http://'+goodSites[index];
}
