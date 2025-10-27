export class Exemplar {
    private isbn:number;
    private titulo: string;
    private cdd: string;
    private quantidadeExemplares: number

    constructor(isbn:number, titulo: string, cdd: string, quantidadeExemplares: number){
        this.isbn = isbn
        this.titulo = titulo
        this.cdd = cdd
        this.quantidadeExemplares = quantidadeExemplares
    }
    setIsbn(isbn: number){
        this.isbn = isbn
    }
    getIsbn() : number {
        return this.isbn
    }
    
    setTitulo(titulo: string){
        this.titulo = titulo
    }
    getTitulo(): string{
        return this.titulo
    }

    setCdd(cdd: string){
        this.cdd = cdd
    }
    getCdd(): string{
        return this.cdd 
    }

    setQuantidadeExemplares(quantidadeExemplares: number){
        this.quantidadeExemplares = quantidadeExemplares
    }
    getQuantidadeExemplares(): number{
        return this.quantidadeExemplares
    }
}