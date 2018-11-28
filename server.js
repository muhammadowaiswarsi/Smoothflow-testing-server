
var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app
.use(bodyParser.json())
.use(express.static('build'))



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})


app.listen(process.env.PORT || 4000,()=>{
    console.log('server is running on port 4000')
})

