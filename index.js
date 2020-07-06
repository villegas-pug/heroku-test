import express from 'express'

/*-> Inicialización del servidor*/
const serve = express()

serve.get('/', (req, res) => {
   res.send('Hola desde heroku!')
})

serve.set('port', process.env.PORT || 3000)

serve.listen(serve.get('port'), () => {
   console.log(`Escuchando en el puerto ${serve.get('port')}`)
})