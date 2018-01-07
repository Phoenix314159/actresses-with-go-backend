package data

import "database/sql"

func GetPictures(db *sql.DB) []string {
	rows, err := db.Query("SELECT url FROM pictures")
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
