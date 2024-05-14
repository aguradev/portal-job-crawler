package main

import (
	"fmt"
	"net/http"

	"github.com/aguradev/portal-job-crawler/api"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

const defaultPortAddr = ":32134"

func App() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:80", "http://localhost:5173"},
		AllowedMethods:   []string{"GET"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	return r
}

func main() {
	app := App()
	api.Router(app)

	fmt.Printf("server started http://localhost%s\n\n", defaultPortAddr)
	http.ListenAndServe(defaultPortAddr, app)
}
