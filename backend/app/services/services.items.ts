import * as ItemRepository from "../db/repo.items.js";

export async function findAll() {
  return ItemRepository.findAll();
}

export async function findById(id: string) {
  return ItemRepository.findById(id);
}

export async function search(query: string) {
  return ItemRepository.search(query);
}
