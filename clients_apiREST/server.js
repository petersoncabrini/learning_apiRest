const express = require ("express")
const res = require("express/lib/response")
const app = express()
const data = require ("./data.json")

// verbos http:

//Resource CLIENTS

// URL + URI
http://localhost:3000/clients

// get -> receber dados de um resource
app.get("/clients", (req, res) => {
    res.json(data)
})

app.get("/clients:id", (req,res) => {
    const {id} = req.params
    const client = data.find(client => client.id = id)
    
    // Status 204 - Nao tem conteudo
    if (!client) return res.status(204).json()
    
    res.json(client)
})

// post -> enviar dados ou informacoes para serem processadas por um resource
app.post("/clients", (req, res) => {
    const {name, email} = req.body
    
    //Salvar
    res.json({name, email})
})

// put -> atualizar os dados de um resource
app.put("/clients:id", (req, res) => {
    const {id} = req.params
    const client = data.find(client => client.id = id)

    // Status 204 - Nao tem conteudo
    if (!client) return res.status(204).json()

    const {name} = req.body

    client.name = name

    res.json(client)
})

// delete -> deletar um resource
app.delete("/clients:id", () => {
    const {id} = req.params
    const clientsFiltered = data.filter(client => client.id = id)
    res.json(clientsFiltered)
})

app.listen(3000, () => {
    console.log('Server is Running')
})