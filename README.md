# AppPoken

AppPoken es una aplicación desarrollada con Angular que consume la [API de Pokémon](https://pokeapi.co/) para mostrar información sobre diferentes Pokémon. Permite a los usuarios explorar y aprender sobre los Pokémon de una manera interactiva y divertida.

## Tecnologías Utilizadas

- **Angular CLI**: Utilizado para generar y administrar el proyecto Angular.
- **Node.js**: Plataforma de tiempo de ejecución de JavaScript utilizada para ejecutar la aplicación.
- **Angular Material**: Biblioteca de componentes de diseño de Material para Angular, utilizada para una interfaz de usuario atractiva y consistente.
- **RxJS**: Biblioteca para programación reactiva utilizada para gestionar la asincronía en la aplicación.
- **Jest**: Framework de pruebas unitarias para JavaScript, utilizado para escribir y ejecutar pruebas en la aplicación.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **`src/`**: Directorio principal de la aplicación.
  - **`app/`**: Contiene los componentes, servicios y otros elementos de la aplicación.
    - **`shared/`**: Contiene componentes, servicios y otros elementos compartidos entre diferentes partes de la aplicación.
    - **`pokemon/`**: Contiene componentes y servicios relacionados con la visualización y gestión de información de Pokémon.
  - **`assets/`**: Contiene archivos estáticos como imágenes y fuentes.
  - **`environments/`**: Contiene archivos de configuración para diferentes entornos (por ejemplo, desarrollo y producción).

## Patrones de Diseño Utilizados

- **Component-Based Architecture**: La aplicación está diseñada utilizando el patrón de arquitectura basada en componentes de Angular, donde cada funcionalidad se encapsula en un componente reutilizable.
- **Service Pattern**: Se utiliza el patrón de servicios para encapsular la lógica de negocio y compartir datos entre diferentes partes de la aplicación.
- **Observables Pattern**: Se utilizan observables de RxJS para manejar la asincronía en la aplicación, especialmente para las llamadas a la API.

## Ejecución del Proyecto

Para ejecutar la aplicación en un servidor de desarrollo, sigue estos pasos:

1. Clona el repositorio utilizando ```git clone```.
2. Instala las dependencias utilizando ```npm install```.
3. Inicia la aplicación utilizando ```npm start```.
4. Navega a ```http://localhost:4200/``` en tu navegador para ver la aplicación en funcionamiento.

## Ejecución de Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza el comando ```ng test```. Jest se encargará de ejecutar las pruebas y mostrar los resultados.
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 # AppPoken

AppPoken is an application developed with Angular that consumes the [Pokémon API](https://pokeapi.co/) to display information about different Pokémon. It allows users to explore and learn about Pokémon in an interactive and fun way.

## Technologies Used

- **Angular CLI**: Used to generate and manage the Angular project.
- **Node.js**: JavaScript runtime platform used to run the application.
- **Angular Material**: Material design component library for Angular, used for an attractive and consistent user interface.
- **RxJS**: Reactive programming library used to manage asynchronous operations in the application.
- **Jest**: JavaScript testing framework used to write and execute tests in the application.

## Project Structure

The project is structured as follows:

- **`src/`**: Main directory of the application.
  - **`app/`**: Contains the components, services, and other elements of the application.
    - **`shared/`**: Contains shared components, services, and other elements used across different parts of the application.
    - **`pokemon/`**: Contains components and services related to displaying and managing Pokémon information.
  - **`assets/`**: Contains static files such as images and fonts.
  - **`environments/`**: Contains configuration files for different environments (e.g., development and production).

## Design Patterns Used

- **Component-Based Architecture**: The application is designed using the component-based architecture pattern of Angular, where each functionality is encapsulated in a reusable component.
- **Service Pattern**: The service pattern is used to encapsulate business logic and share data between different parts of the application.
- **Observables Pattern**: RxJS observables are used to handle asynchrony in the application, especially for API calls.

## Running the Project

To run the application on a development server, follow these steps:

1. Clone the repository using ```git clone```.
2. Install dependencies using ```npm install```.
3. Start the application using ```npm start```.
4. Navigate to ```http://localhost:4200/``` in your browser to see the application in action.

## Running Unit Tests

To run unit tests, use the command ``` ng test ```. Jest will execute the tests and display the results.

---

Thank you for using AppPoken! If you have any questions or suggestions, feel free to contact us!


