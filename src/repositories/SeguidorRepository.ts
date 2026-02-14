import { Seguidor } from "../entities/Seguidor"
import * as fs from 'fs'

export class SeguidorRepository{

    public static salvar(seguidores: Seguidor[]){
        let bdSeguidores = JSON.stringify(seguidores)
        fs.writeFileSync("./data/seguidores.json", bdSeguidores, "utf-8")
    }

    public static listar(){
        let bdSeguidores = fs.readFileSync("./data/seguidores.json", { encoding: "utf-8" })
        return JSON.parse(bdSeguidores)
    }
}