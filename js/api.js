const missions_container=document.getElementById("missions-container-js")
const mission_example=document.getElementById("mission")
const title=document.getElementById("title")
const image=document.getElementById("image")
const spcecies=document.getElementById("spcecies")
const challenges=document.getElementById("challenges")

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
    var new_mission;
    console.log(mission_example)
    console.log("> Imprimir misiones:", missions)
    missions.forEach(mission => {
        console.log(mission)
        mission_example.setAttribute("id", "mission-"+mission.id_mission)
        mission_example.setAttribute("style", "left: "+mission.coord_x+"%; top: "+mission.coord_y+"%;")
        title.setAttribute("id", "title-"+mission.id_mission)
        title.innerText=mission.title
        console.log("IMAGEN", image)
        // image.setAttribute("id", "image-"+mission.id_mission)
        // image.src= mission.image
        new_mission=mission_example.cloneNode(true);
        missions_container.appendChild(new_mission)
    });
}
const goToMission=(mission)=>{
    console.log("> Ir a la missión:", mission)
}

fetchMissions();