function createAssemblyLine(){
    return {
        hasClima: (myCar) =>{
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () =>{
                if(temp < tempSettings){
                    temp++;
                }
                else if(temp > tempSettings){
                    temp--;
                }
            }
        },
        hasAudio: (myCar) =>{
            myCar.currentTrack = {
                'name': null,
                'artitst': null
            }
            myCar.nowPlaying = () =>{
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
            }
            
        },
        hasParktronic: (myCar) =>{
            myCar.checkDistance = (distance) =>{
                if(distance < 0.1){
                    console.log("Beep! Beep! Beep!")
                }else if(0.1 <= distance < 0.25){
                    console.log("Beep! Beep!")
                }else if(0.25 <= distance < 0.5){
                    console.log("Beep!")
                }else{
                    console.log("")
                }
            }
        }
    }
}
