const fetchMissions = (missions) => {
    const url = `https://oceanhackersapi.herokuapp.com/missions`;
    fetch(url).then(
        (res) => {
            if (res.status != "200") {
                console.log("> NO SE ENCONTRARON MISIONES", res);
            }
            else {
                console.log("> RESULTADOS", res);
                return res.json();
            }
        }
    ).then(
        (data) => {
            if (data) {
                renderMissions(data);
            }
        }
    );
}
const fetchMission = (mission) => {
    const url = `https://oceanhackersapi.herokuapp.com/missions/${mission}`;
    fetch(url).then(
        (res) => {
            if (res.status != "200") {
                console.log("> NO EXISTE ESA MISION");
            }
            else {
                return res.json();
            }
        }
    ).then(
        (data) => {
            if (data) {
                goToMission(data);
            }
        }
    );
}

const renderMissions=(missions)=>{
    console.log("> Imprimir misiones:", missions)
}
const goToMission=(mission)=>{
    console.log("> Ir a la missión:", mission)
}

fetchMissions();