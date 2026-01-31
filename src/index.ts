import { Usuario } from "./entities/Usuario"
import { Seguidor } from "./entities/Seguidor"

//Criar 3 usuários: Zé, Maria, Jão
const ze = new Usuario()
ze.setNome("Zé")

const maria = new Usuario()
maria.setNome("Maria")

const jao = new Usuario()
jao.setNome("Jão")

//Zé segue a Maria
const seguidorZeMaria = new Seguidor(ze, maria)
console.log(seguidorZeMaria)
