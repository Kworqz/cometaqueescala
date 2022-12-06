class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  
    question.hide();
    background('yellow');
    textSize(28);
    fill('black');
    text("Resultado do Questionário:",275,60);

    Contestant.getPlayerInfo();

 
    if(allContestants!== undefined){
      var displayAns = 230
      fill('Blue');
      textSize(20);
      text("Jogador que respondeu corretamente em verde",130,230);
      for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("green");
        else
      fill("red");
      displayAns = displayAns+30
      text(allContestants[plr].name+":"+ allContestants[plr].answer, 250,displayAns)
     }
    }
   


    }
    }
    
    
  


