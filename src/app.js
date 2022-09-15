import express, { json, urlencoded } from 'express'
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path'

import indexRoutes from './routes/index.routes';

const app = express()

//settings
app.set("views", path.join(__dirname, './views'))
app.set('view engine', 'hbs')


app.engine(".hbs", engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
}));

//middlewars
app.use(morgan('dev'))
app.use(urlencoded({ extended: false }))
app.use(json())

//routes
app.use(indexRoutes)

//public route
app.use(express.static(path.join(__dirname, "public")))

export default app