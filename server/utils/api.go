package utils

import (
	"net/http"
)

func JsonHeaderPack(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no cache, no-store, must-revalidate")
}
