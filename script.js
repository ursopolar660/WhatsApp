function pegartexto(){
            

    let fix = document.getElementById("fixo").value;
    let ddd = document.getElementById("ddd").value;
    let msg = document.getElementById("msg").value;
    let num = Math.floor(Math.random() * 999999) + 000000; 

    let dados = "https://api.whatsapp.com/send/?phone=55" + ddd + "9" + fix + num + "&text=" + msg;
    document.getElementById("texto").value = dados;
}
function cop(){
    document.getElementById("texto").select();
    document.execCommand('copy');
}