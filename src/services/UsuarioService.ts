import { Usuario } from "../entities/Usuario";
import { Repository } from "../repositories/Repository";

export class UsuarioService{

    private static usuarioRepository: Repository<Usuario> = new Repository<Usuario>(Usuario)

    public static adicionarUsuario(usuario: Usuario){
        this.usuarioRepository.salvar(usuario)
    }

    public static listarUsuarios(){
        return this.usuarioRepository.listar()
    }
}