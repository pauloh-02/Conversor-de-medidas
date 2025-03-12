let medida, medidaConvertida, escolha

medida = prompt("Digite a medida em metros: ")

while(true){
    escolha = prompt("Escolha a medida: " +
    "\nMilímetro (mm) " +
    "\nCentímetro (cm)" +
    "\nDecímetro (dm)" +
    "\ndecâmetro (dam)" +
    "\nhectômetro (hm)" +
    "\nQuilômetro (km)"
    )
    switch (escolha){
        case "mm":
            medidaConvertida = medida * 1000
            alert(medidaConvertida + " mm")
            break
        case "cm":
            medidaConvertida = medida * 100
            alert(medidaConvertida + " cm")
            break
        case "dm":
            medidaConvertida = medida * 10
            alert(medidaConvertida + " dm")
            break
        case "dam":
            medidaConvertida = medida / 10
            alert(medidaConvertida + " dam")
            break
        case "hm":
            medidaConvertida = medida / 100
            alert(medidaConvertida + " hm")
            break
        case "km":
            medidaConvertida = medida / 1000
            alert(medidaConvertida + " km")
            break
        default:
            alert("Medida inválida!")
            continue
    }
    break
}