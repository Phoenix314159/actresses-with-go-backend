package routes

import (
	"database/sql"
	"net/http"
	"encoding/json"
	"../controller"
)

func Actresses(db *sql.DB) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		actresses := controller.GetActresses(db)
		json.NewEncoder(w).Encode(actresses)
	}
	return http.HandlerFunc(fn)
}

func Pictures(db *sql.DB) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		pictures := controller.GetPictures(db)
		json.NewEncoder(w).Encode(pictures)
	}
	return http.HandlerFunc(fn)
}