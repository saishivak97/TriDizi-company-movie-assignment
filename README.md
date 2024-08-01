# Movie App

This repository contains a full-stack movie application with a frontend built using React and a backend using Express. The app allows users to view a list of movies and get detailed information about each movie.

## Project Structure

```
your-repo/
│
├── backend/
│   ├── app.js
│   ├── .env
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.js
│   │   │   ├── MovieDetails.js
│   │   │   └── MoviesList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
```

## Backend (Express)

### Description

The backend is built with Express and provides endpoints to fetch movie data from The Movie Database (TMDb) API.

### Installation

1. Navigate to the `backend` directory:

    ```sh
    cd backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:

    ```env
    TMDB_API_KEY=your_tmdb_api_key
    ```

4. Start the server:

    ```sh
    nodemon app.js
    ```

### Endpoints

- `GET /` - Returns a "Hello World!" message.
- `GET /movies` - Fetches a list of movies. Supports pagination via the `page` query parameter.
- `GET /movie/:id` - Fetches details for a specific movie by its ID.

## Frontend (React)

### Description

The frontend is built with React and provides a user interface to view and interact with the movie data.

### Installation

1. Navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

### Components

- `MovieCard` - Displays a card for each movie in the list.
- `MovieDetails` - Shows detailed information about a specific movie.
- `MoviesList` - Fetches and displays a list of movies with pagination.
- `Navbar` - Provides navigation links.

### Routing

- `/home` or `/movies` - Displays the list of movies.
- `/movie/:id` - Displays details for the selected movie.



## Acknowledgments

- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for movie data.

