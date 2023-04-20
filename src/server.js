const express = require('express');
const session = require('express-session');
const configSessionMongo = require('./database/config/session-mongo');
const passport = require('passport');
const initializePassport = require('./services/authService');

const routerAuth = require('./routes/authRoutes');
const routerProducts = require('./routes/productRoutes');
const routerCart = require('./routes/cartRoutes');
const routerOrders = require('./routes/orderRoutes');
const routerUsers = require('./routes/userRoutes');

//Crear el Servidor
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(configSessionMongo));
initializePassport();
app.use(passport.initialize());
app.use(passport.session());
//Rutas de la Aplicacion
app.get('/', (req, res) => {
	res.send('Welcome');
});
app.use('/auth', routerAuth);
app.use('/products', routerProducts);
app.use('/carts', routerCart);
app.use('/orders', routerOrders);
app.use('/users', routerUsers);

app.listen(process.env.PORT, () => {
	console.log('Servidor Corriendo');
});
