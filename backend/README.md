# Corpowars Backend

This repository contains the Corpowars backend server built with Fastify, TypeScript, and Supabase.

## Overview

The backend provides REST endpoints for:
- Company data
- Item data
- Player profile management
- Health checks

It uses a clean layering structure:
- `app.ts` initializes Fastify, CORS, Swagger, and route registration
- `routes/*` defines endpoint groups
- `controllers/*` handle request validation and response formatting
- `services/*` implement application logic
- `db/*` perform Supabase queries

## Environment

The backend reads configuration from environment variables via `zod` validation in `backend/app/config.ts`.

Required variables:
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_KEY` — Supabase service role key

Optional:
- `PORT` — server port (defaults to `3000`)

Example `.env.example`:

```env
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
```

## Running the Backend

Install dependencies from `backend/` and run the server:

```bash
cd backend
pnpm install
pnpm dev
```

For production build:

```bash
pnpm build
pnpm start
```

## Swagger API Docs

The backend registers Swagger UI at:

- `http://localhost:3000/docs`

That documentation is configured in `backend/app/plugins/swagger.ts`.

## API Endpoints

### Health

`GET /health/`
- Response: `200`
- Body:
  ```json
  { "status": "ok" }
  ```

### Companies

`GET /companies/`
- Returns all companies ordered by `name`.

`GET /companies/search?q=<term>`
- Searches companies by `name`, `ticker`, or `sector`.
- Query is case-insensitive and partial.

`GET /companies/:id`
- Returns a single company by its `id`.
- If not found, returns `404` with:
  ```json
  { "error": "Company not found" }
  ```

### Items

`GET /items/`
- Returns all items ordered by `name`.

`GET /items/search?q=<term>`
- Searches items by `name` or `category`.
- Query is case-insensitive and partial.

`GET /items/:id`
- Returns a single item by its `id`.
- If not found, returns `404` with:
  ```json
  { "error": "Item not found" }
  ```

### Player

Player routes require authentication via the `Authorization` header.
The backend expects a Bearer token and validates it with Supabase auth.

Example header:

```http
Authorization: Bearer <token>
```

#### `GET /player/me`
- Returns the authenticated player's profile.
- On success, returns `200` with the profile record.

#### `PATCH /player/me`
- Updates the authenticated player's profile.
- Supported fields in request body:
  - `username` (optional)
  - `avatar_url` (optional)
- Returns `200` with the updated profile.

#### Not implemented endpoints

The following placeholders exist in `backend/app/routes/routes.player.ts` but currently return a `Not implemented` message:
- `GET /player/companies`
- `GET /player/team`
- `PUT /player/team`
- `GET /player/history`
- `GET /player/stats`

## Authentication Flow

Authentication is handled in `backend/app/middleware/auth.ts`:
- Validates presence of `Authorization: Bearer <token>`
- Calls `supabase.auth.getUser(token)`
- Returns `401` if authentication fails
- Attaches `request.user` with `id` and `email`

Controllers use `backend/app/utils/requireUser.ts` to ensure the user is available.

## Database Access

The Supabase client is created in `backend/app/db/supabase.client.ts` and shared via `app.decorate("supabase", supabase)`.

Repository functions in `backend/app/db/*.ts` perform all table queries. Key tables used:
- `companies`
- `items`
- `profiles`

## Error Handling

Controllers return:
- `404` for missing company/item resources
- `401` for missing or invalid auth tokens
- `500` for unexpected server errors when profile requests fail

## Notes

- Keep the service role key secret and do not commit it to source control.
- CORS is configured to allow `http://localhost:3000`.
- The backend uses Supabase and expects the `profiles` table to contain authenticated player profiles.
