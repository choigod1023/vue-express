var mysql = require('mysql');
const fs = require('fs');
var express = require('express')
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'choigod1023',
    password: 'jjang486',
    database: 'choigod1023',
    charset: 'utf8mb4'
});

connection.connect();
router.get('/', function (req, res) {
    connection.query('SELECT * FROM vlive order by id desc', function (err, rows) {
        var row = rows;
        for(var i=0;i<row.length;i++)
        {
            if(row[i].NAME.includes('720P'))
                row[i].quality = '720P'
            else if(row[i].NAME.includes('1080P'))
                row[i].quality = '1080P'
            else if(row[i].NAME.includes('360P'))
                row[i].quality = '720P'
        }
        res.json(JSON.parse(JSON.stringify(row)))
        console.log(JSON.parse(JSON.stringify(row)))
    })
})




module.exports = router;
