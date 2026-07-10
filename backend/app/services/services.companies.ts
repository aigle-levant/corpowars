import {
 findAllCompanies,
  findCompanyById,
searchCompanies,
} from "../db/repo.companies.js";

export async function findAll() {
  return findAllCompanies();
}

export async function findById(id: string) {
  return findCompanyById(id);
}

export async function search(query: string) {
  return searchCompanies(query);
}
