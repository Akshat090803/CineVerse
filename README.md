# Cineverse - React Frontend Project

Cineverse is a dynamic and responsive web application built with React.js, designed to provide users with an immersive experience for exploring movies and TV shows. It features comprehensive listings, detailed information, and seamless navigation, powered by data from The Movie Database (TMDb) API.

## Features

* **Movie and TV Show Listings:**
    * Dedicated tabs for Movies and TV Shows.
    * Categorized listings:
        * Latest Releases
        * Trending Shows/Movies
        * Now Streaming
        * Top Rated TV Shows/Movies
* **Infinite Scrolling:** Smooth and continuous loading of content as the user scrolls.
* **Search Functionality:** Robust search feature to quickly find specific movies or shows.
* **Detailed Information Pages:**
    * Comprehensive details for each movie or show, including:
        * Overview/Synopsis
        * Star Cast
        * Ratings
        * Other relevant details.
* **Trailer Playback:** Integrated trailer playback functionality.
* **Responsive Design:** Ensures optimal viewing experience across various devices.
* **Data Source:** Utilizes the [The Movie Database (TMDb) API](https://www.themoviedb.org/) for movie and TV show data.

## Tech Stack

* **React.js:** For building the user interface.
* **Redux:** For state management.
* **Axios:** For making API requests to fetch movie and TV show data.
* **Tailwind CSS:** For styling and responsiveness.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Cineverse
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Obtain a TMDb API Key:**
    * Go to [The Movie Database (TMDb)](https://www.themoviedb.org/) and create an account.
    * Generate an API key from your account settings.

5.  **Configure API Key:**
    * Create a `.env.local` file in the root of your project.
    * Add your TMDb API key to the `.env.local` file:
        ```
        REACT_APP_TMDB_API_KEY=your_api_key_here
        ```

6.  **Start the development server:**

    ```bash
    npm run dev
    ```

7.  **Open your browser and navigate to `http://localhost:5173`**

## API Usage

This project utilizes the [The Movie Database (TMDb) API](https://www.themoviedb.org/) to fetch movie and TV show data. The API key is configured using environment variables.

## Future Enhancements

* User authentication and personalized recommendations.
* User reviews and ratings.
* Adding more filter and sorting options.
* Implement lazy loading for images.
* Improve test coverage.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open a pull request or submit an issue.
