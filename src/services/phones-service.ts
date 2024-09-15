import { GetPhonesByDocRepository, GetPhonesRepository, PostPhonesRepository } from "../repositories/phones-repository";
import { Phone } from "protocols/types";

export async function GetPhonesService(): Promise<Phone[]> {
    const GetPhones = await GetPhonesRepository();
    return GetPhones
}

export async function GetPhonesByDocService(cpf: string): Promise<Phone[]> {
    const GetPhones = await GetPhonesByDocRepository(cpf);
    return GetPhones
}

export async function PostPhonesService(PhonesReq: Phone) {
    const GetPhones = await PostPhonesRepository(PhonesReq);
    return GetPhones
}