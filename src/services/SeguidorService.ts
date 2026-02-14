import { Seguidor } from "../entities/Seguidor";
import { Usuario } from "../entities/Usuario";
import { SeguidorRepository } from "../repositories/SeguidorRepository";

export class SeguidorService {

    private static seguidores: Seguidor[] = []

    public static adicionarSeguidor(seguidor: Usuario, seguido: Usuario){
        const seguidorZeMaria = new Seguidor(seguidor, seguido)        
        this.seguidores.push(seguidorZeMaria)
        
        SeguidorRepository.salvar(this.seguidores)
    }
    
    public static listarSeguidores(){
        this.seguidores = SeguidorRepository.listar()
        return this.seguidores
    }
}