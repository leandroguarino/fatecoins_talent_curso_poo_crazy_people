import { Usuario } from "./Usuario"
import { EnumStatusSeguidor } from "../enums/EnumStatusSeguidor"
import { AutoIncremento } from "../shared/AutoIncremento"

export class Seguidor{
    private id: number
    private status: EnumStatusSeguidor
    private seguidor: Usuario
    private seguido: Usuario

    constructor(seguidor: Usuario, seguido: Usuario){
        this.id = AutoIncremento.incrementar()
        this.status = EnumStatusSeguidor.SOLICITADA
        this.seguidor = seguidor
        this.seguido = seguido
    }
}