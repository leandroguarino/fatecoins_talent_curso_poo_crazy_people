import { Usuario } from "./Usuario"
import { Postagem } from "./Postagem"

export class Compartilhamento{
    private id: number
    private dataHora: Date
    private texto: string
    private usuario: Usuario
    private postagem: Postagem

    constructor(usuarioCompartilhou: Usuario, post: Postagem){
        this.id = 0
        this.dataHora = new Date()
        this.texto = ""
        this.usuario = usuarioCompartilhou
        this.postagem = post
    }
}