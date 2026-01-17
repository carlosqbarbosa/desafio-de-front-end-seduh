# base
FROM node:20-alpine AS base
WORKDIR /app

# deps
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# builder
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG WEATHER_API_KEY
ENV WEATHER_API_KEY=$WEATHER_API_KEY

RUN yarn build

# runner
FROM base AS runner
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

EXPOSE 3000
CMD ["yarn", "start"]
