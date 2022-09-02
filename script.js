const start_btn = document.querySelector("button.start-btn");
const input_field = document.querySelector("div.input-field");
const submit_btn = document.querySelector("button.submit-btn");
const play_again = document.querySelector("div.gameover button.play-again");
start_btn.addEventListener("click",function(){
    let i = 1;
    start_btn.style = "display:none";
    input_field.style = "display:block";
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    submit_btn.addEventListener("click",function(){
        if(document.getElementById("number").value == num){
            input_field.style = "display:none";
            document.querySelector("div.gameover").style = "display:block";
            document.getElementById("msg").innerHTML = `You guessed it right! The number is ${num}`;
            document.querySelector("div.input-field input").value = "";
            play_again.addEventListener("click",function(){
                // document.querySelector("div.gameover").style = "display:none";
                // start_btn.style = "display:block";
                location.reload();
            })
        }else if(i == 3){
            input_field.style = "display:none";
            document.querySelector("div.gameover").style = "display:block";
            document.getElementById("msg").innerHTML = `You lost! The number is ${num}`;
            document.querySelector("div.input-field input").value = "";
            play_again.addEventListener("click",function(){
                // document.querySelector("div.gameover").style = "display:none";
                // start_btn.style = "display:block";
                location.reload();
            })
        }
        else if ((i != 3) && (document.getElementById("number").value != num)){
            let sign;
            if(document.getElementById("number").value < num){
                sign = 'greater';
            }else{
                sign = 'lesser';
            }
            document.getElementById("result").innerHTML = `Try again! The number is ${sign} than ${document.getElementById("number").value}`;
                i+=1;
                console.log(i);
        }
    })
})