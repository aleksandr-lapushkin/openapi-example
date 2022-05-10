//This code hasn't been compiled!
import { PetsApi } from "../generated/ts-node/api/apis"
import express from "express"
import { listPets } from "../generated/express/controllers/PetsController"

//Let's use our generated code to call a downstream
const client = new PetsApi("http://our-api.com")
const fivePets = await client.listPets(5)
const firstPet = fivePets.body[0]
//Pet type is available here
console.log(firstPet.name)


//We can also have an express server generated like so. The only caveat is that it's not type-safe.
const app = express();
app.get('/pets', listPets)


