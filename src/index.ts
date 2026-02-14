import { Usuario } from "./entities/Usuario"
import { SeguidorService } from "./services/SeguidorService"
import { UsuarioService } from "./services/UsuarioService"

//Criar 3 usuários: Zé, Maria, Jão
const ze = new Usuario()
ze.setNome("Zé")
UsuarioService.adicionarUsuario(ze)

const maria = new Usuario()
maria.setNome("Maria")
UsuarioService.adicionarUsuario(maria)

const jao = new Usuario()
jao.setNome("Jão")
UsuarioService.adicionarUsuario(jao)

SeguidorService.adicionarSeguidor(ze, maria)
SeguidorService.adicionarSeguidor(jao, maria)

console.log("------------- Usuários --------------------")
console.log(UsuarioService.listarUsuarios())

console.log("------------- Seguidores ------------------")
console.log( SeguidorService.listarSeguidores() )
