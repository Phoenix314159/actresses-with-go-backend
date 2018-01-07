package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"database/sql"
	_ "github.com/lib/pq"
	"./models"
	"./data"
)

func main() {
	db := models.InitDB()
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/api/get_actresses_data", Actresses(db))
	router.HandleFunc("/api/get_pictures", Pictures(db))
	log.Fatal(http.ListenAndServe(":3066", router))
}

func Actresses(db *sql.DB) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		actresses := data.GetActresses(db)
		json.NewEncoder(w).Encode(actresses)
	}
	return http.HandlerFunc(fn)
}

func Pictures(db *sql.DB) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		pictures := data.GetPictures(db)
		json.NewEncoder(w).Encode(pictures)
	}
	return http.HandlerFunc(fn)
}
