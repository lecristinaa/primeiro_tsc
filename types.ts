export interface Pessoa {
    id: number
    name: string
    age: number
    consulta: 'clinico geral' | 'ortopedista' | 'cardiologista' 
}

export interface Triagem{
    fila: Pessoa[]
}