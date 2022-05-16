const express = require('express')
const mysql = require('mysql')
const fs = require('fs');

const bodyParser = require('body-parser')

const test_data =require('./test_data.json')

const app = express()
app.use(express.json())

var connection=mysql.createConnection(
    {
        host:"oceanhackers.mysql.database.azure.com",
        user:"oceanhackerAEADA", password:"Exception_Elongated_Native_Slashed_Barbell_Capsize",
        database:"webpage_1",
        port:3306,
        ssl: {
            ca:fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
        }
    }
);

connection.connect(error=>{
    if(error) throw error;
    console.log("Database server running!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
 console.log(`Server listening on PORT ${PORT}`)
})

// Test API is working
// app.get('/', (req, res) => {
//     console.log(`Api States GET ALL request ${new Date()}`)
//     const states=[];
//     test_data.missions.forEach(mission => {
//         states.push(mission)
//     });
//     console.log(states);
//     res.status(200).json(states)
// })

// CALL TO ADD TEST DATA 
app.post("/test", (req, res)=>{
    const images=test_data.images;
    const missions=test_data.missions;
    const challenges=test_data.challenges;
    const challenges_images=test_data.challenges_images;
    const users=test_data.users;
    const resources=test_data.resources

    var it=0
    var object={}
    images.forEach(image => {
        const sql=`INSERT INTO images SET ?`
        console.log(image)
        connection.query(sql, image, error=>{
            if(error) throw error;
            console.log(it+" - upload image complete!")
            it++
        })
    });
    const sql=`SELECT * FROM images`
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length>0){
            res.status(200).json(results)
        }else{
            res.status(400).json(null);
        }
    })

    it=0
    missions.forEach(mission => {
        const sql=`INSERT INTO missions SET ?`
        console.log(mission)
        connection.query(sql, mission, error=>{
            if(error) throw error;
            console.log(it+" - upload mission complete!")
        })
        it++
    });


    it=0
    challenges.forEach(challenge => {
        const sql=`INSERT INTO challenges SET ?`
        console.log(challenge)
        connection.query(sql, challenge, error=>{
            if(error) throw error;
            console.log(it+" - upload challenge complete!")
        })
        it++
    });

    it=0
    challenges_images.forEach(challenge_image => {
        const sql=`INSERT INTO challenges_images SET ?`
        console.log(challenge_image)
        connection.query(sql, challenge_image, error=>{
            if(error) throw error;
            console.log(it+" - upload challenge_image complete!")
        })
        it++
    });
    
    it=0
    users.forEach(user => {
        const sql=`INSERT INTO users SET ?`
        console.log(user)
        connection.query(sql, user, error=>{
            if(error) throw error;
            console.log(it+" - upload user complete!")
        })
        it++
    });
    
    it=0
    resources.forEach(resource => {
        const sql=`INSERT INTO resources SET ?`
        console.log(resource)
        connection.query(sql, resource, error=>{
            if(error) throw error;
            console.log(it+" - upload resource complete!")
        })
        it++
    });

})

app.get("/missions", (req,res)=>{
    const sql="SELECT * FROM missions"
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length>0){
            res.status(200).json(results)
        }else{
            res.status(400).json(null);
        }
    })
})

app.get("/users", (req,res)=>{
    const sql="SELECT * FROM users"
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length>0){
            res.status(200).json(results)
        }else{
            res.status(400).json(null);
        }
    })
})
app.get("/missions/:id", (req,res)=>{
    const {id} = req.params;
    const sql=`SELECT * FROM missions WHERE id_mission = ${id} `
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length>0){
            res.status(200).json(result[0])
        }else{
            res.status(400).json(null);
        }
    })
})

app.get("/challenges/:id", (req,res)=>{
    const {id} = req.params;
    const sql=`SELECT * FROM challenges WHERE id_challenge = ${id} `
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length>0){
            // sql=`SELECT * FROM images WHERE id = 1 `
            res.status(200).json(result[0])
        }else{
            res.status(400).json(null);
        }
    })
})
app.get("/resources/:id", (req,res)=>{
    const {id} = req.params;
    const sql=`SELECT * FROM resources WHERE id_resource = ${id} `
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length>0){
            res.status(200).json(result[0])
        }else{
            res.status(400).json(null);
        }
    })
})
app.post("/login/", (req,res)=>{
    // console.log(req.body)
    var object_result;
    var email = req.body.email;
    email=email.replace("@","")
    var password = req.body.password;
    const sql=`SELECT * FROM users HAVING email = '${email}' `
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length>0){
            object_result = Object.values(JSON.parse(JSON.stringify(result)));
            // console.log(object_result[0].PASSWORD, password)
            if(object_result[0].PASSWORD!=password){
                res.status(400).json(false);
            }else{
                console.log(true)
                res.status(200).json(true)
            }
        }else{
            res.status(400).json(null);
        }
    })
})
/* 
app.post("/missions/add", (req,res)=>{
    const {id} = req.params;
    
    const sql=`INSERT INTO missions SET ?`
    const tag={
        name: req.body.name,
        value: req.body.value,
    }
    const imgObject={
        url: req.body.url,
        description: req.body.description,
    }
    const missionObject={
        coord_x: req.body.coord_x,
        coord_y: req.body.coord_y,
        tilte: req.body.title,
    }

    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(400).json(null);
        }
    })
}) */