class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html('Racing Cars');
        title.position(130,0);
        
        var input = createInput("Name");
        input.position(130,100)

        var button = createButton("Play")
        button.position(250,100)

        button.mousePressed(function(){
            input.hide();
            button.hide()

            var name = input.value();

            var greeting = createElement('h3')
            greeting.html('Hello'+ name)
            greeting.position(130,100);

            playerCount +=1;
            player.updateCount(playerCount)
            player.update(name)
            
            
        })
    }

}