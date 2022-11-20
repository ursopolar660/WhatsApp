function pegartexto(){
            

    let fix = document.getElementById("fixo").value;
    let ddd = document.getElementById("ddd").value;
    let msg = document.getElementById("msg").value;
    let num = Math.floor(Math.random() * 999999) + 000000; 

    let dados = "https://api.whatsapp.com/send/?phone=55" + ddd + "9" + fix + num + "&text=" + msg;
    document.getElementById("texto").value = dados;
    document.getElementById("texto").select();
    document.execCommand('copy');
}
function use(){
    alert("Coloque o DDD, o Pré-fixo e a mensagem que deseja enviar.                  Clique no botão GERAR e cole em outra aba do navegador.                  O próprio aplicativo gera os números e copia o link. ")
}