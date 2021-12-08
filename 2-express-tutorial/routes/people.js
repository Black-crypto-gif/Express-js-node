const express = require('express');
const router = express.Router();

const {getPeople,
    creatPerson,
    creatPersonPostman,
    updatePerson,
    deletePerson } = require('../controller/people');
/* 
router.get(' /', getPeople)

router.post('/', creatPerson)

router.post('/postman', creatPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson) */

router.route('/').get(getPeople).post(creatPerson);
router.route('/postman').post(creatPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router
