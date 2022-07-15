function focused() {
    let sectors = Array.from(document.querySelectorAll("input"))
        .forEach(e => {
            e.addEventListener("focus", onFocus);
            e.addEventListener("blur", onBlurred);
        });

    function onFocus(ev){
        ev.target.parentElement.className = 'focused'
    }
    
    function onBlurred(ev){
        ev.target.parentElement.className = ''
    }
}
