const express = require('express');
const router  = express.Router();
const mysqlConnection = require('../database');

//Create router
router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employees', (err, rows,fields)=>{
        if(!err){
            res.json(rows);
            console.log('devolvi magia');
        }else{
            console.log(err);
        }
        
    })
});

router.get('/:id',(req,res) =>{
    const {id} = req.params; 
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?',[id] , (err,rows,fields)=>{
        if(!err) {
            res.json(rows);
        }else{
            console.log('error baby');  
        }
    })
});

router.post('/' , (req,res) =>{
    const {id, name, salary} = req.body;
    const query = 'CALL employeeAddOrEdit2(?, ?, ?);';

    mysqlConnection.query(query,[id,name,salary],(err,rows,fields)=>{
        if(!err){
            res.json({Status:"Employeed saved"});

        }else{
            console.log(err);
        }
    })
});

module.exports = router; 