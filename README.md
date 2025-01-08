Express API

Aplikacja API stworzona przy użyciu Node.js i Express.js, która służy jako podstawowa baza do budowy aplikacji backendowej. W projekcie wykorzystano bazę danych MongoDB do przechowywania danych, a aplikacja jest przygotowana do uruchomienia w kontenerach Docker.

Technologie

Node.js - silnik do uruchamiania JavaScriptu po stronie serwera.
Express.js - framework do tworzenia aplikacji webowych w Node.js.
MongoDB - NoSQL baza danych wykorzystywana do przechowywania danych aplikacji.
Docker - platforma do konteneryzacji aplikacji, która umożliwia uruchomienie aplikacji w różnych środowiskach bez potrzeby jej ponownej konfiguracji.
Docker Compose - narzędzie do zarządzania wieloma kontenerami Docker, które pozwala na uruchamianie aplikacji z wieloma usługami.
Instalacja

Sklonuj repozytorium na swoje lokalne środowisko:
git clone https://github.com/EddieCarbon/docker-expressjs.git
Zainstaluj zależności:
Przejdź do folderu app i zainstaluj zależności za pomocą npm:

cd app
npm install
Uruchom aplikację:
Po zainstalowaniu zależności możesz uruchomić aplikację lokalnie:

npm start
Docker

Aplikacja jest również przygotowana do uruchomienia w kontenerze Docker. W tym celu użyj poniższych komend:

Zbuduj kontener:
docker-compose build
Uruchom aplikację:
docker-compose up
Aplikacja będzie dostępna pod adresem http://localhost:3000.

Testowanie

Aplikacja nie zawiera jeszcze testów jednostkowych. Skrypt npm test jest obecnie ustawiony na generowanie komunikatu o błędzie, ale można go rozszerzyć o testy, takie jak np. testy API przy użyciu narzędzi takich jak Mocha czy Jest.

CI/CD

Aplikacja zawiera workflow CI w GitHub Actions, który automatycznie uruchamia proces budowania i weryfikacji kodu przy każdym pushu do gałęzi main.

Przyszłe plany

Dodanie pełnej obsługi testów jednostkowych.
Wprowadzenie lepszej obsługi błędów.
Ulepszenie konfiguracji Docker z dodatkowymi usługami (np. Redis, RabbitMQ).
Licencja

Ten projekt jest licencjonowany na zasadach MIT License.
