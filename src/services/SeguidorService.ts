import { Seguidor } from "../entities/Seguidor";
import { Usuario } from "../entities/Usuario";
import { Repository } from "../repositories/Repository";

export class SeguidorService {

    private static seguidorRepository: Repository<Seguidor> = new Repository<Seguidor>(Seguidor)

    public static adicionarSeguidor(seguidor: Usuario, seguido: Usuario){
        const seguidorZeMaria = new Seguidor(seguidor, seguido)        
        this.seguidorRepository.salvar(seguidorZeMaria)
    }
    
    public static listarSeguidores(){
        return this.seguidorRepository.listar()
    }
}