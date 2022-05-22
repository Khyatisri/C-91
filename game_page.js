 player1_name= localStorage.getItem("player1_name");
 player2_name= localStorage.getItem("player2_name");
 player1_score=0;
 player2_score=0;
 document.getElementById("player1_name").innerHTML=player1_name;
 document.getElementById("player2_name").innerHTML=player2_name;
 document.getElementById("player1_score").innerHTML=player1_score;
 document.getElementById("player2_score").innerHTML=player2_score;

 function Send(){
     get_word=document.getElementById("word").value;
     word=get_word.toLowerCase();
     c1=word.charAt(1);
     halflength=Math.floor(word.length/2);
     c2=word.charAt(halflength);
     lastlength=word.length-1;
     c3=word.charAt(lastlength);
    rc1=word.replace(c1,"_");
    rc2=rc1.replace(c2,"_");
    rc3=rc2.replace(c3,"_");
    question_word="<h4 id='word_display'>Q."+rc3+" </h4>";
    inputbox="<br> answer:<input id='inputcheckbox'> ";
    checkbutton="<br> <button class='btn btn-info'onclick='check()'> Check </button>";
    row=question_word+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
 }