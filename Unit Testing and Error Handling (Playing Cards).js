function cardObject(face, color){
    let cards = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if (faces.indexOf(face) == -1){
        throw new Error('Invalid face: ' + face);
    }
    
    let result = {
        face,
        color: cards[color],
        toString(){
            return this.face + this.color;
        }
    };
    return result;
}
