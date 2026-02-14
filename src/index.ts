import { Usuario } from "./entities/Usuario"
import { SeguidorService } from "./services/SeguidorService"

//Criar 3 usuários: Zé, Maria, Jão
const ze = new Usuario()
ze.setNome("Zé")

const maria = new Usuario()
maria.setNome("Maria")

const jao = new Usuario()
jao.setNome("Jão")

SeguidorService.adicionarSeguidor(ze, maria)
SeguidorService.adicionarSeguidor(jao, maria)

console.log( SeguidorService.listarSeguidores() )
