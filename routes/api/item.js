const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Item Model
const Item = require('../../models/Item');

// @route   GET API/items
// @desc    GET all items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
})

// @route   POST API/items
// @desc    create a Pizza
// @access  Public
router.post('/', auth, (req, res) => {
    const newItem = new Item( {
        name: req.body.name,
        hot: req.body.hot
    }); //new instance of object Item

    newItem.save().then(item => res.json(item));
})

// @route   DELETE API/items/:id
// @desc    delete a Pizza
// @access  Public
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success:true})))
    .catch( err => res.status(404).json({success: false}))
    
})

module.exports = router;