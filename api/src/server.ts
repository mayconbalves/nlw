import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({message: 'Hello my friend'})
})

app.post('/', (request, respose) => {
  return respose.json({message: 'Dados salvos com sucesso'})
})

app.listen(3001, () => console.log('Server start...'))