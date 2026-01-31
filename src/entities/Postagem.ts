class Postagem{
    private id: number
    private dataHora: Date
    private texto: string
    private midia: string
    private tipo: string
    private usuario: Usuario

    constructor(usuarioPost: Usuario){ //dependência
        this.id = 0
        this.dataHora = new Date()
        this.texto = ""
        this.midia = ""
        this.tipo = ""
        this.usuario = usuarioPost
    }
}