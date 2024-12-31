const express=require('express');
const {createEvent, getAllEvents,updateEvent,deleteEvent}=require('../controllers/eventController');

const router=express.Router();

router.post('/events',createEvent);
router.get('/events',getAllEvents);        
router.put('/events/:id',updateEvent);     
router.delete('/events/:id',deleteEvent); 

module.exports=router;