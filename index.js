const express = require('express')
const app =express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const courses = require('./data/course.json');

app.get('/',(req, res) => {
    res.send('News API Running')
});

app.get('/course',(req,res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;

    const singleCourse = courses.find(course=>course.id === id)
    res.send(singleCourse);
})


app.listen(port,()=>{
    console.log(`News Server runnig, '${port}`)
});