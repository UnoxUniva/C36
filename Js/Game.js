class Game{
    constructor(){

    }

    getState(){
        var dbref = database.ref("gameState")
        dbref.on("value",function(data){
           gameState = data.val();
        })
    }
    update(state)
    {
        database.ref("/").update({gameState: state})
    }
    startGame(){
        if(gameState===0)
        {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

            

        }
    }
}