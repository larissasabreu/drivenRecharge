// phones
export function same_CPF() {
    return {
        type: "same_CPF", 
        message: "Este CPF já está cadastrado"
    }
}

export function same_PhoneNumber() {
    return {
        type: "same_PhoneNumber", 
        message: "Este telefone já está cadastrado"
    }
}
