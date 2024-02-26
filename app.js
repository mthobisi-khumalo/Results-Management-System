const express = require('express');
const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*app.use(session({
    secret: 'rms',
    resave: true,
    saveUninitialized: true
}));*/

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating engine
app.engine('html', exphbs.engine({ defaultLayout: 'main', extname: '.html' }));
app.set('views', './views');
app.set('view engine', 'html');

//Login and Teacher-Index
const loginRoutes = require('./routes/login');
const teacherRoutes = require('./routes/teacher-index');
const studentRoutes = require('./routes/student-index');

app.use('/', loginRoutes);
app.use('/teacher-index', teacherRoutes);
app.use('/student-index', studentRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));