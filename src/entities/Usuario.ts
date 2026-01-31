import { AutoIncremento } from "../shared/AutoIncremento"

export class Usuario{
    private id: number
    private nome: string
    private email: string
    private senha: string
    private foto: string

    constructor(){
        this.id = AutoIncremento.incrementar()
        this.nome = ""
        this.email = ""
        this.senha = ""
        this.foto = ""
    }

    public setNome(nome: string): void{
        this.nome = nome
    }

    public getNome(): string{
        return this.nome
    }

    public getId(): number{
        return this.id
    }
}