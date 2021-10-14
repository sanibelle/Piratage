import authorization from './validateToken.js';
import express from 'express';
import * as db from './databaseOfTheFuture.js'
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';
import cors from 'cors'
 
const app = express();
app.use(cors()) 
app.use(cookieParser());


var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function () {
    res.status(200).json({ message: "l'api d'Antoine" });
});

router.get('/test', function () {
    res.json({ message: "l'api d'Antoine" });
});

router.post('/login', (req, res) => {
    if (req.body.user ==  process.env.ADMIN_NAME && req.body.pwd == process.env.ADMIN_PWD) 
    {   
        const token = jwt.sign({ id: 1, role: "admin" }, process.env.JWT_KEY, { expiresIn: '1h' });
        return res
        .cookie("access_token", token)
        .status(200)
        .json({ message: "Logged in successfully 😊 👌" });
    }
})

router.get('/message', authorization, function (req, res) {
    res.json({ message: db.readInDbOfTheFuture() });
});

router.put('/message', authorization, function (req, res) {
    if (req.body.message == null) {
        res.status(400).json({ erreur: 'Pas de message :(' });
        return;
    }
    db.saveIntoDbOfTheFuture(req.body.message)
    res.status(202).json({ message: req.body.message });

});
app.use('/api', router)
// Démarre le serveur
app.listen(port);
console.log('Serveur démarré sur le port ' + port);
