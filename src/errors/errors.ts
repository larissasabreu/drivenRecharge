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

// recharges

export function phone_NotFound() {
    return {
        type: "phone_NotFound",
        message: "Este telefone não está cadastrado"
    }
}