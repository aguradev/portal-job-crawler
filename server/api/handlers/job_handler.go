package handlers

import "net/http"

func GreetingJobHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello job page"))
}
