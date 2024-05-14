package api

import (
	"net/http"

	"github.com/aguradev/portal-job-crawler/api/handlers"
	"github.com/go-chi/chi/v5"
)

func Router(r *chi.Mux) {
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello go chi"))
	})

	r.Group(func(r chi.Router) {
		r.Get("/job", handlers.GreetingJobHandler)
	})

}
