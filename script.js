let valider1 = document.getElementById("valider1");
let valider2 = document.getElementById("valider2");
let Name = document.getElementById("name");
let password = document.getElementById("password");
let note = document.getElementById("note");
let score = document.getElementById("score");
let first = document.getElementById("first");
let second = document.getElementById("second");
let user = document.getElementById("user");
let easy = document.getElementById("easy");
let normal = document.getElementById("normal");
let hard = document.getElementById("hard");
let choice = document.getElementById("choice");
let choice2 = document.getElementById("choice2");
let nombre = document.getElementById("nombre");
let reset = document.getElementById("reset");
let five = document.getElementById("test_five");

const api = "https://reqres.in/api/login"

async function getData(){
    const response = await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: Name.value,
            password: password.value,
        })
    })
    const data = await response.json();
    console.log(data)
    if(data.token){
        NameVal();
    }else{
        alert(data.error)
    }
}

function NameVal(){
    if(Name.value == ""){
        note.innerHTML ="Enter Votre Name"
    }else{
        first.style.display = "none";
        second.style.display = "block";
        user.innerHTML = `
        <p id="user"><i class="bi bi-person-bounding-box"></i>${Name.value}</p>
        `
    }
}
let f = 0;
let x;
let z;
let y;
let i = 3;
let j = 5;
let k = 10;
easy.addEventListener('input', () => {
    if(easy.checked) {
        choice.innerHTML = "Entrez un nombre entier entre 1 et 10";
        choice2.innerHTML =`
        <h3>Pour chaque nombre valide vous gagnez 1 point</h3>
        <h3>Vous avez 3 Essais pour deviner</h3>`
    }
    x = 1 + Math.floor(Math.random() * 10); 
    console.log(x);
})

normal.addEventListener('input', () =>{
    if(normal.checked){
        choice.innerHTML = "Entrez un nombre entier entre 10 et 100";
        choice2.innerHTML =`
        <h3>Pour chaque nombre valide vous gagnez 3 point</h3>
        <h3>Vous avez 5 Essais pour deviner</h3>`
    }
    z = 10 + Math.floor(Math.random() * 100); 
    console.log(z);
})
hard.addEventListener('input', () =>{
    if(hard.checked){
        choice.innerHTML = "Entrez un nombre entier entre 100 et 1000";
        choice2.innerHTML =`
        <h3>Pour chaque nombre valide vous gagnez 5 point</h3>
        <h3>Vous avez 10 Essais pour deviner</h3>`
    }
    y = 100 + Math.floor(Math.random() * 1000); 
    console.log(y);
   
})

function test(){
    choice2.style.display = 'block';
    if(easy.checked){
        if(x == nombre.value){
            choice.style.display = 'none';
            choice2.innerHTML =`
            <h3 class="correct">Well Played You Did Great Jobe</h3>
            `
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            reset.style.display = 'block';
            score.innerHTML = ++f;
        }
        else if(x != nombre.value){
            choice2.innerHTML = `
            <h3 class="incorrect">Incorrect Try Again</h3>
            <h3 class="incorrect">still ${--i} chance</h3>
            `
            if(i == 0){
                choice2.innerHTML = `
                <h3>You Lose</h3>
            `
            reset.style.display = 'block';
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            }
            normal.disabled = true;
            hard.disabled = true;
        }
    }else if(normal.checked){
        if(z == nombre.value){
            choice.style.display = 'none';
            choice2.innerHTML =`
            <h3 class="correct">Well Played You Did Great Jobe</h3>
            `
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            reset.style.display = 'block';
            f += 3;
            score.innerHTML = f
        }
        else if(z != nombre.value){
            choice2.innerHTML = `
            <h3 class="incorrect">Incorrect Try Again</h3>
            <h3 class="incorrect">still ${--j} chance</h3>
            `
            if(j == 0){
                choice2.innerHTML = `
                <h3>You Lose</h3>
            `
            reset.style.display = 'block';
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            }
            easy.disabled = true;
            hard.disabled = true;
        }
    }else if(hard.checked){
        if(y == nombre.value){
            choice.style.display = 'none';
            choice2.innerHTML =`
            <h3 class="correct">Well Played You Did Great Jobe</h3>
            `
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            reset.style.display = 'block';
            f+= 5
            score.innerHTML = f
        }
        else if(y != nombre.value){
            choice2.innerHTML = `
            <h3 class="incorrect">Incorrect Try Again</h3>
            <h3 class="incorrect">still ${--k} chance</h3>
            `
            if(k == 0){
                choice2.innerHTML = `
                <h3>You Lose</h3>
            `
            reset.style.display = 'block';
            nombre.style.display = 'none';
            valider2.style.display = 'none';
            }
            easy.disabled = true;
            normal.disabled = true;
        }
    }
      
}
function res(){ 
    choice.style.display = 'block';
    choice2.style.display = 'none';
    nombre.style.display = 'inline-block';
    valider2.style.display = 'inline-block';
    reset.style.display = 'none';
    easy.checked = false;
    normal.checked = false;
    hard.checked = false;
    nombre.value = "";
    normal.disabled = false;
    hard.disabled = false;
}


