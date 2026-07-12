import * as CompanyRepository from "../db/repo.companies.js";

export async function findAll() {
  return CompanyRepository.findAll();
}

export async function findById(id: string) {
  return CompanyRepository.findById(id);
}

export async function search(query: string) {
  return CompanyRepository.search(query);
}
