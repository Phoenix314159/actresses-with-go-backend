package data

import "database/sql"

func GetPictures(db *sql.DB) []string {
	rows, err := db.Query("SELECT * FROM pictures")
	if err != nil {
		panic(err)
	}
	var p []string
	for rows.Next() {
		var id int
		var url string
		var name string
		err = rows.Scan(&id, &url, &name)
		if err != nil {
			panic(err)
		}
		p = append(p, url)
	}
	return p

}
