import express, {Router} from "express"
import { clint_login, register } from "../../auth/auth.js"

const Clintroute = Router()

Clintroute.post("/api/clintRegister",register)
Clintroute.post("/api/clintLogin",clint_login)

export default Clintroute