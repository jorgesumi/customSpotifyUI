const express = require('express')
const http = require('http')
const fs = require('fs')
const mysql = require('mysql')
const app = express()
const port = 3000

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

// Connect to MySQL
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('MySQL Connected');
});

// Create Database
app.get('/createDb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('Database Created');
    });
});

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.static(__dirname + 'public/js'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('app');
});

// Create Table
app.get('/createProj', (req, res) => {
    let sql = 'CREATE TABLE projects(id int AUTO_INCREMENT, project VARCHAR(60), artist VARCHAR(40), type VARCHAR(20), PRIMARY KEY(id))'
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Project Created');
    });
});

// Insert Project
app.get('/proj1', (req, res) => {
    let post = {project: 'Atrocity Exhibition', artist: 'Danny Brown', type: 'Album/LP'}
    let sql = 'INSERT INTO projects SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('Project added')
    })
})

// Select Project
app.get('/getProj', (req, res) => {
    let sql = 'SELECT * FROM projects'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Project details fetched')
    })
})

// Update Title
app.get('/updateTitle/:id', (req, res) => {
    let newTitle = 'Updated title'
    let sql = `UPDATE projects SET project = '${newTitle}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Project Updated')
    })
}) 

// Listen  on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
