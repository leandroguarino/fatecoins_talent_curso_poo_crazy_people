import { Usuario } from "./Usuario"
import { EnumRecuperacaoSenha } from "../enums/EnumRecuperacaoSenha"

export class RecuperacaoSenha{
    private id: number
    private hash: string
    private usado: string
    private usuario: Usuario

    constructor(usuario: Usuario){
        this.id = 0
        this.hash = ""
        this.usado = EnumRecuperacaoSenha.NAO_USADO
        this.usuario = usuario
    }
}