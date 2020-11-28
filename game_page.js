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