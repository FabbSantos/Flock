FROM debian

ENV DEBIAN_FRONTEND=noninteractive

# === INSTALL Node.js ===

# Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Upgrade to NPM7
RUN npm install -g npm@7

RUN apt-get update && apt-get install -y --no-install-recommends git ssh && \
    npm install -g yarn