package handlers

import (
	"net/http"
)

func GreetingJobHandler(w http.ResponseWriter, r *http.Request) {
	category := r.URL.Query().Get("category")

	if category == "" {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Hello job"))
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(category))
}
