# Użyj oficjalnego obrazu Node.js jako bazowego
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności projektu
RUN npm install

# Skopiuj pozostałe pliki projektu do kontenera
COPY . .

# Ustaw zmienną środowiskową na domyślny port Express.js
ENV PORT=3000

# Otwórz port aplikacji
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "start"]
