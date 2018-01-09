package controller

import "database/sql"

const pictureQuery = "SELECT url FROM pictures"

func GetPictures(db *sql.DB) []string {
	rows, err := db.Query(pictureQuery)
	if err != nil {
		panic(err)
	}
	var p []string
	for rows.Next() {
		var url string
		err = rows.Scan(&url)
		if err != nil {
			panic(err)
		}
		p = append(p, url)
	}
	return p
}
