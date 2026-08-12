//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(el.checked && carArr.length>=2){
        alert("Tu só me pode marcar 2 carros ao mesmo tempo");
        el.checked = false;
        return;
    }

    if(el.checked){
        carArr.push(carClass);
    }else{
        const index = GetCarArrPosition(carArr,carClass);
        if(index!==-1){
            carArr.splice(index,1);
        }
    }
    
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    const compare0 = carArr[0];
    const compare1 = carArr[1];

    document.querySelector("#compare_image_0").innerHTML = <img src="${compare0.image}">;
    document.querySelector("#compare_image_1").innerHTML = <img src="${compare1.image}">;

    document.querySelector("#compare_modelo_0").innerHTML = compare0.nome;
    document.querySelector("#compare_modelo_1").innerHTML = compare1.nome;

}