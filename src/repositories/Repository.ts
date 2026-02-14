import * as fs from 'fs'

export class Repository<TIPO>{

    private listaObjetos: TIPO[] = []
    private nomeClasse: string
    private referenciaClasse: { new(...args: any[]): TIPO}

    constructor(referenciaClasse: { new(...args: any[]): TIPO}){
        this.referenciaClasse = referenciaClasse
        this.nomeClasse = this.referenciaClasse.name
    }

    public salvar(novoObjeto: TIPO){
        this.carregarLista()
        this.listaObjetos.push(novoObjeto)
        let bdListaObjetos = JSON.stringify(this.listaObjetos)
        fs.writeFileSync(`./data/${this.nomeClasse}.json`, bdListaObjetos, "utf-8")
    }

    public listar(){
        this.carregarLista()
        return this.listaObjetos
    }

    public carregarLista(){
        const nomeArquivo = `./data/${this.nomeClasse}.json`
        if (fs.existsSync(nomeArquivo)){
            let bdListaObjetos = fs.readFileSync(nomeArquivo, { encoding: "utf-8" })
            this.listaObjetos = JSON.parse(bdListaObjetos)
        }else{
            this.listaObjetos = []
        }
    }
}