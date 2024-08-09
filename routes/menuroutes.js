const express = require('express');
const router = express.Router();

const menu = require('./../models/menu.js');

router.post('/', async (req, res) => {
    try {
        const data1 = req.body;

        const newmenu = new menu(data1);
        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
//comment added
    catch (err) {
        console.log(err);
        res.status(500).json({ errror: 'Internal server error.' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errror: 'Internal server error.' });
    }
})

router.get('/:tastetype',async(req,res)=>{
    try{
        const tastetype = req.params.tastetype;
        if(tastetype=="sweet" || tastetype=="sour" || tastetype=="spicy"){
            const data =await menu.find({taste:tastetype});
            console.log('data fetched.');
            res.status(200).json(data);
        }
        else{
            res.status(500).json('Invalid taste');
        }
    }

    catch(err){
        console.log(err);
        res.status(500).json({ errror: 'Internal server error.' });
    }
})

router.put('/:id',async(req,res)=>{
    try{
      const menuId = req.params.id;
      const updatedPersonData = req.body;

      const response = await menu.findByIdAndUpdate(menuId,updatedPersonData,{
        new:true,//return the updated document
        runValidators:true//run mongoose validation
      });

      if(!response){
        return res.status(404).json({error:'Menu not found'});
      }
      console.log('data updated');
      res.status(200).json(response);

    }
    catch(err){
      console.log(err);
      res.status(500).json({errror:'Internal server error.'});
    }
  })


  router.delete('/:id',async(req,res)=>{
    try{
      const menuId = req.params.id;

      const response = await menu.findByIdAndDelete(menuId);
      if(!response){
        return res.status(404).json({error:'Menu not found'});
      }
      console.log('menu data deleted successfully');
      res.status(200).json({message: 'menu deleted successfully'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({errror:'Internal server error.'});
    }
  })


module.exports = router;
