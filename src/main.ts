import express from 'express'

const app = express()

app.get('/', (_, res) => res.send('wow'))

app.listen(3000, () => {
  console.log('listening')
})
