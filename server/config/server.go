package config

import (
	"log"
	"net/http"

	"github.com/aguradev/portal-job-crawler/api"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

type Server struct {
	R *chi.Mux
}

func CreateNewServer() *Server {
	return &Server{
		chi.NewRouter(),
	}
}

func (server *Server) Router() {
	server.R.Use(middleware.Logger)
	server.R.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:80", "http://localhost:5173"},
		AllowedMethods:   []string{"GET"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	api.Router(server.R)
}

func (server *Server) Started(port string) {

	server.Router()

	log.Printf("server started http://localhost%s\n\n", port)
	http.ListenAndServe(port, server.R)
}
