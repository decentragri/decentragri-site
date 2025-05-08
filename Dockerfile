# Use Bun's official base image
FROM oven/bun:latest

# Create a non-root user
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot

# Set working directory
WORKDIR /app

# Set permissions
RUN chown -R nonroot:nonroot /app

# Switch to non-root user
USER nonroot

# Copy package files first for better caching
COPY --chown=nonroot:nonroot decentragri/package.json decentragri/package-lock.json ./

# Install dependencies using Bun
RUN bun install

# Copy the full app
COPY --chown=nonroot:nonroot decentragri/ ./

# Build the app
RUN bun run build

# Disable telemetry, set env
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["bun", "start"]
