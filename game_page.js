 player1Name = localStorage.getItem("player1_name");
 player2Name = localStorage.getItem("player2_name");
 document.getElementById("player1_name").innerHTML = player1Name + " : ";
 document.getElementById("player2_name").innerHTML = player2Name + " : ";

 player1Score = 0;
 player2Score = 0;
 document.getElementById("player1_score").innerHTML = player1Score;
 document.getElementById("player2_score").innerHTML = player2Score;

 document.getElementById("question_turn").innerHTML = "Question Turn : " + player1Name;
 document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2Name;

 function send() {
     num1 = document.getElementById("num1_input").value;
     num2 = document.getElementById("num2_input").value;
    actual_ans = parseInt(num1) * parseInt(num2);

    question= "<h4>" + num1 + " X "+ num2 + "</h4>";
    input = "<br> Answer : <input id='answer_input' class='form-control' type = 'text'>";
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input + button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("num1_input").value = "";
    document.getElementById("num2_input").value = "";
 }

 question_turn = "player1";
 answer_turn = "player2";

 function check() {
     get_answer = document.getElementById("answer_input").value;
     if (get_answer == actual_ans) {
         if (answer_turn == "player1") {
             update_player1Score = player1Score + 1;
             document.getElementById("player1_score").innerHTML = update_player1Score;
         }
         else {
            update_player2Score = player2Score + 1;
            document.getElementById("player2_score").innerHTML = update_player2Score;  
         }
     }

     if (question_turn == "player1") {
         question_turn = "player2"
         document.getElementById("question_turn").innerHTML = "Question Turn - " + player2Name;
     }
     else {
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player1Name;
     }
     if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2Name;
    }
    else {
       answer_turn = "player1"
       document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1Name;
    }
    document.getElementById("output").innerHTML="";
 }