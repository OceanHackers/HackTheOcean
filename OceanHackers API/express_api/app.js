const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get('/v1/states', (req, res) => {
    console.log(`Api States GET ALL request ${new Date()}`)
    const state1 = {id: 1, name: "Baja California",
    beach: "Playa Hermosa",
    species: "Extensiones marinas, pantanos y turberas (superficies cubiertas de agua ya sea natural o artificial)",
    problems: "Limite maximo de enterococos (microorganismos infecciosos producidos, entre otros por heces fecales)"}

    const state2 = {id: 2, name: "Sonora",
    beach: "San Carlos, Guaymas, Empalme",
    species: "Ballena (Menor, Gris, Azul, Jorobada), Delfín, Orca, Caracol",
    problems: "Presencia de enterococos y estreptococos por aguas negras"}

    const state3 = {id: 3, name: "Sinaloa",
    beach: "Las Glorias",
    species: "Ballenas, Delfines, Lobos marinos, Foca, Morsa, Nutria, Manatíes",
    problems: "Tiene 149 partículas de Enterococos feacalis por cada 100 mililitros de agua"}

    const state4 = {id: 4, name: "Nayarit",
    beach: "Sayulita",
    species: "Tecolotes, Armadillos, Jabilies, Pumas, Jaguares, Pez dorado, Atun, Sierra, Marlin, Camaron, Pez vela",
    problems: "Niveles superiores a los 200 enterococos (microorganismos infecciosos producidos, entre otros por heces fecales)"}
    
    const state5 = {id: 5, name: "Jalisco",
    beach: "Los Muertos, Cuale",
    species: "Ballenas, Delfines, Zifios",
    problems: "Residuos orgánicos, Aguas residuales"}
    
    const state6 = {id: 6, name: "Colima",
    beach: " Boca Pascuales, Pascuales, Tecomán, Playa Tecuanillo, El Real",
    species: "Agujón, Dorado, Tiburón, Mantarraya, Delfín, Ballena jorobada, Lapa",
    problems: "Residuos orgánicos"}
    
    const state7 = {id: 7, name: "Michoacan",
    beach: "Maruata",
    species: "Gaviotas, Garzas, Pelicanos, Cormoranes, Flamencos, Tortugas marinas, Golfina, Laud Negra",
    problems: "Niveles de Dinophysis Caudata superiores permitidos, No aptos para el consumo de mariscos"}
    
    const state8 = {id: 8, name: "Guerrero",
    beach: "Acapulco",
    species: "Bosque de coniferas, Tecolotito, Jaguar, Ocelote, Oso hormiguero, Tigrillo",
    problems: "Derrames de aguas negras, Residuos solidos urbanos"}
    
    const state9 = {id: 9, name: "Oaxaca",
    beach: "Puerto Angelito",
    species: "Tursiops truncatus, Stenella attenuata, Stenella longirostris, Feresa attenuata, Pseudorca crassidens, Grampus griseus, Globicephala macrorhynchus, Megaptera novaeangliae",
    problems: "Residuos"}

    const state10 = {id: 10, name: "Chiapas",
    beach: "Puerto Mader",
    species: "Mojarra del Petén, Cacomixtle, Ballena jorobada",
    problems: "Residuos urbanos"}
    
    const state11 = {id: 11, name: "Quintana Roo",
    beach: "Na",
    species: "Cangrejo ermitaño, Coral, Camaroncillo, Langostino, Delfín",
    problems: "Basura"}

    const state12 = {id: 12, name: "Yucatan", 
    area: "Golfo de Mexico",
    species: "Tortugas marinas (4 en PE: Lora, Carey, Verde, Laud), Ballenas, Delfines, Arrecifes de coral, Humedales, Manglares",
    problems: "Derrames de petroleo"}
    
    const state13 = {id: 13, name: "Campache",
    area: "Golfo de Mexico",
    species: "Tortugas marinas (4 en PE: Lora, Carey, Verde, Laud), Ballenas, Delfines, Arrecifes de coral, Humedales, Manglares",
    problems: "Derrames de petroleo"}
    
    const state14 = {id: 14, name: "Tabasco",
    area: "Golfo de Mexico",
    species: "Tortugas marinas (4 en PE: Lora, Carey, Verde, Laud), Ballenas, Delfines, Arrecifes de coral, Humedales, Manglares",
    problems: "Derrames de petroleo"}
    
    const state15 = {id: 15, name: "Veracruz",
    area: "Golfo de Mexico",
    species: "Tortugas marinas (4 en PE: Lora, Carey, Verde, Laud), Ballenas, Delfines, Arrecifes de coral, Humedales, Manglares",
    problems: "Derrames de petroleo"}
    
    const state16 = {id: 16, name: "Tamaulipas",
    area: "Golfo de Mexico",
    species: "Tortugas marinas (4 en PE: Lora, Carey, Verde, Laud), Ballenas, Delfines, Arrecifes de coral, Humedales, Manglares",
    problems: "Derrames de petroleo"}
    
    const states = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11, state12, state13, state14, state15, state16]
    res.status(200).json(states)
})