package main

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
	_ "github.com/lib/pq"
	"./models"
	"./routes"
)

func main() {
	port := ":3596"
	db := models.InitDB()
	r := mux.NewRouter().StrictSlash(true)
	a := r.PathPrefix("/api").Subrouter()
	a.HandleFunc("/get_actresses_data", routes.Actresses(db))
	a.HandleFunc("/get_pictures", routes.Pictures(db))
	log.Fatal(http.ListenAndServe(port, r))
}




