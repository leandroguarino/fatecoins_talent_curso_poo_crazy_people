class Curtida{
    private id: number
    private dataHora: Date
    private tipo: EnumTipoCurtida
    private usuario: Usuario
    private postagem: Postagem

    constructor(usuarioCurtida: Usuario, post: Postagem){
        this.id = 0
        this.dataHora = new Date()
        this.tipo = EnumTipoCurtida.LOKO
        this.usuario = usuarioCurtida
        this.postagem = post
    }
}