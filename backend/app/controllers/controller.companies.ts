import type { FastifyReply, FastifyRequest } from "fastify";
import { findAll, findById, search } from "../services/services.companies.js";

export async function getAllCompanies(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const companies = await findAll();

  return reply.send(companies);
}

export async function getCompanyById(
  request: FastifyRequest<{
    Params: {
      id: string;
    };
  }>,
  reply: FastifyReply,
) {
  const company = await findById(request.params.id);

  if (!company) {
    return reply.status(404).send({
      error: "Company not found",
    });
  }

  return reply.send(company);
}

export async function searchCompanies(
  request: FastifyRequest<{
    Querystring: {
      q?: string;
    };
  }>,
  reply: FastifyReply,
) {
  const companies = await search(request.query.q ?? "");

  return reply.send(companies);
}
