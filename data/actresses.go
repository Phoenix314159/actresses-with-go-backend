package data

import "database/sql"

type Actress struct {
	Year    string
	Actress string
	Movie   string
}

func GetActresses(db *sql.DB) []Actress {
	rows, err := db.Query("SELECT year, actress, movie FROM actresses")
	if err != nil {
		panic(err)
	}
	var a []Actress
	for rows.Next() {
		var year, actress, movie string
		err = rows.Scan(&year, &actress, &movie)
		a = append(a, Actress{Year: year, Actress: actress, Movie: movie})
		if err != nil {
			panic(err)
		}
	}
	return a
}
