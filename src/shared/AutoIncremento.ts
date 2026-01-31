export class AutoIncremento{
    private static contador: number = 0

    public static incrementar(){
        this.contador = this.contador + 1
        return this.contador
    }
}