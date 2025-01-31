FROM node:16

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json .

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 8000

# Start the application
CMD ["node", "app.js"]