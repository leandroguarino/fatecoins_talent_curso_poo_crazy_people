import { Usuario } from "./Usuario"
import { Postagem } from "./Postagem"

export class Comentario{
    private id: number
    private texto: string
    private dataHora: Date
    private usuario: Usuario
    private postagem: Postagem
    private comentarioPai: Comentario | null

    constructor(usuario: Usuario, postagem: Postagem){
        this.id = 0
        this.texto = ""
        this.dataHora = new Date()
        this.usuario = usuario
        this.postagem = postagem
        this.comentarioPai = null
    }
}