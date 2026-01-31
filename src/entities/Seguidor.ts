class Seguidor{
    private id: number
    private status: EnumStatusSeguidor
    private seguidor: Usuario
    private seguido: Usuario

    constructor(seguidor: Usuario, seguido: Usuario){
        this.id = 0
        this.status = EnumStatusSeguidor.SOLICITADA
        this.seguidor = seguidor
        this.seguido = seguido
    }
}