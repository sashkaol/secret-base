const mysql = require('mysql2');
const express = require('express');

const app = express();
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "SecretBase",
    password: "sashaoleneva1742"
}).promise();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})
//let people;
// con.query('select * from people;')
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.error(err))
// app.get('/people', (req, res) => {
//     res.send(people)
// })
con.query("select * from people;")
    .then(res => {
        for (let i = 0; i < res[0].length; i++) {
            let pers = res[0][i];
            let all = {
                fio: pers['fio'],
                date_born: pers['date_b'],
                address: pers['adr']
            };
            let id = pers['id']
            con.query(`select p.fio from relationship r, people p where (r.pers_1 = ${id} or r.pers_2 = ${id}) and (p.id != ${id} and (p.id = r.pers_1 or p.id = r.pers_2));`)
                .then(r => {
                    if (r[0][0] !== undefined) all.partner = r[0][0]['fio'];
                })
            con.query(`select p.fio from people p where p.id = ${pers['mom']}`)
                .then(r => {
                    if (r[0][0] !== undefined) all.mom = r[0][0]['fio']
                });
            con.query(`select p.fio from people p where p.id = ${pers['dad']}`)
                .then(r => {
                    if (r[0][0] !== undefined) all.dad = r[0][0]['fio'];
                    console.log(all)
                });
        }
        //let pers = res[0][0];
    })
    .catch(err => console.log(err))