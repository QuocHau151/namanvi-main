# Stage 1: Install dependencies and build the application
FROM node:20-alpine AS builder

ARG TEST

WORKDIR /app

# Clean up previous installations and build artifacts
RUN rm -rf node_modules .next

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Keep Next.js binaries available while preserving the base image PATH.
ENV PATH=/app/node_modules/.bin:${PATH}

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]