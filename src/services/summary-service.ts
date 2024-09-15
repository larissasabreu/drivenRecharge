import { GetSummaryRepository } from "../repositories/summary-repository";

export async function GetSummaryService(SummaryReq: string) {
    const GetSummary = await GetSummaryRepository(SummaryReq);
    return GetSummary;
}