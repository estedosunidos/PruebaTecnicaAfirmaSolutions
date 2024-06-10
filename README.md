# AppPoken

AppPoken es una aplicación desarrollada con Angular que consume la [API de Pokémon](https://pokeapi.co/) para mostrar información sobre diferentes Pokémon. Permite a los usuarios explorar y aprender sobre los Pokémon de una manera interactiva y divertida.

## Tecnologías Utilizadas

- **Angular CLI**: Utilizado para generar y administrar el proyecto Angular.
- **Angular Material**: Biblioteca de componentes de diseño de Material para Angular, utilizada para una interfaz de usuario atractiva y consistente.
- **RxJS**: Biblioteca para programación reactiva utilizada para gestionar la asincronía en la aplicación.
- **Jest**: Framework de pruebas unitarias para JavaScript, utilizado para escribir y ejecutar pruebas en la aplicación.
- **CSS**: Se utiliza para hacer mas atractivo la app.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **`src/`**: Directorio principal de la aplicación.
  - **`app/`**: Contiene los componentes, servicios y otros elementos de la aplicación.
    - **`shared/`**: Contiene componentes.
         **`components/`**: Contiene los componentes que se va a utilizar en toda la plicacion que se puede reutulizar .
    - **`pokemon/`**: Contiene componentes y servicios relacionados con la visualización y gestión de información de Pokémon.
          **`Pages/`**: Contiene las paginas de la aplicacion de la pokedex.
        - **`Service/`**: Contiene los servicio que consulta ala api de poke .
        - **`Interfaces/`**: Contiene el modelo de la interface donde se va a almacenar los dato extraido de la api de pokemon  .
        - **`assets/`**: Contiene archivos estáticos como imágenes y fuentes.


## Patrones de Diseño Utilizados

- **Component-Based Architecture**: La aplicación está diseñada utilizando el patrón de arquitectura basada en componentes de Angular, donde cada funcionalidad se encapsula en un componente reutilizable.
- **Service Pattern**: Se utiliza el patrón de servicios para encapsular la lógica de negocio y compartir datos entre diferentes partes de la aplicación.
- **Observables Pattern**: Se utilizan observables de RxJS para manejar la asincronía en la aplicación, especialmente para las llamadas a la API.

## Ejecución del Proyecto

Para ejecutar la aplicación en un servidor de desarrollo, sigue estos pasos:

1. Clona el repositorio utilizando ```https://github.com/estedosunidos/PruebaTecnicaAfirmaSolutions.git```.
2. Instala las dependencias utilizando ```npm install```.
3. Inicia la aplicación utilizando ```npm start```.
4. Navega a ```http://localhost:4200/``` en tu navegador para ver la aplicación en funcionamiento.

## Ejecución de Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza el comando ```npm run test```. Jest se encargará de ejecutar las pruebas y mostrar los resultados.
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# AppPoken

AppPoken is an application developed with Angular that consumes the [Pokémon API](https://pokeapi.co/) to display information about various Pokémon. It allows users to explore and learn about Pokémon in an interactive and fun way.

## Technologies Used

- **Angular CLI**: Used to generate and manage the Angular project.
- **Angular Material**: A library of Material Design components for Angular, used for an attractive and consistent user interface.
- **RxJS**: A library for reactive programming used to manage asynchronous operations in the application.
- **Jest**: A testing framework for JavaScript, used to write and run tests in the application.
- **CSS**: Used to enhance the application's appearance.

## Project Structure

The project is structured as follows:

- **`src/`**: Main directory of the application.
  - **`app/`**: Contains components, services, and other application elements.
    - **`shared/`**: Contains shared components.
      - **`components/`**: Contains reusable components that will be used throughout the application.
    - **`pokemon/`**: Contains components and services related to displaying and managing Pokémon information.
      - **`pages/`**: Contains the application's pages for the Pokédex.
      - **`services/`**: Contains services that interact with the Pokémon API.
      - **`interfaces/`**: Contains interfaces that define the structure of data retrieved from the Pokémon API.
    - **`assets/`**: Contains static files such as images and fonts.

## Design Patterns Used

- **Component-Based Architecture**: The application is designed using Angular's component-based architecture pattern, where each functionality is encapsulated in a reusable component.
- **Service Pattern**: The service pattern is used to encapsulate business logic and share data between different parts of the application.
- **Observables Pattern**: RxJS observables are used to handle asynchronous operations in the application, especially for API calls.

## Running the Project

To run the application on a development server, follow these steps:

1. Clone the repository using `https://github.com/estedosunidos/PruebaTecnicaAfirmaSolutions.git`.
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.
4. Navigate to `http://localhost:4200/` in your browser to see the application in action.

## Running Unit Tests

To run the unit tests, use the command `npm run test`. Jest will execute the tests and display the results.
