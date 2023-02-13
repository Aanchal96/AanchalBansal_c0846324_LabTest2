const express = require('express');
const bodyParser = require('express');
const viewRoutes = require("./src/view-routes");
const apiRoutes = require("./src/api");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/api/v1/', apiRoutes);
app.use('', viewRoutes);

app.listen(3000, '0.0.0.0',() => {
    console.log('Server is running on http://localhost:3000')
});
