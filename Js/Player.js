class Player{                         
    constructor(){

    }   
    getCount(){
        var dbref = database.ref("playerCount")
        dbref.on("value", function(data) {
            playerCount = data.val()
        })

    }       
    updateCount(count){
        database.ref("/").set({playerCount:count})
    }
    update(plyrName)
    {
        var playerIndex = "player"+ playerCount
        database.ref(playerIndex).set({name:plyrName})
    }
}    