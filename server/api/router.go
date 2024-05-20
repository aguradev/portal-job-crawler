package api

import (
	"net/http"

	dto "github.com/aguradev/portal-job-crawler/api/DTO"
	"github.com/aguradev/portal-job-crawler/api/handlers"
	"github.com/aguradev/portal-job-crawler/utils"
	"github.com/go-chi/chi/v5"
)

func Router(r *chi.Mux) {

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		utils.JsonHeaderPack(w, r)

		w.WriteHeader(http.StatusOK)
		w.Write(dto.HandleResponse("Success show greeting", nil))
	})

	r.Route("/job", func(r chi.Router) {
		r.Get("/", handlers.GreetingJobHandler)
	})

}
