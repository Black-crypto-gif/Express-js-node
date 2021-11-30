const EventsEmitter = require('events');    
const customEmitter = new EventsEmitter
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved : ${name} with the id : ${id}`)
})
customEmitter.on('response', ()=>{
    console.log(`some other logic`)
})


customEmitter.emit('response', 'mellal',34)