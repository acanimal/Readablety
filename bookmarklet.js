javascript:(function(){
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://127.0.0.1:8080/readablety/readable.js?rnd='+Math.random();
    document.body.appendChild(script);
})();