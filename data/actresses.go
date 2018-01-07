package data

import "database/sql"

type Actress struct {
	Year    string
	Actress string
	Movie   string
}

func GetActresses(db *sql.DB) []Actress {
	rows, err := db.Query("SELECT * FROM actresses")
	if err != nil {
		panic(err)
	}
	var a []Actress
	for rows.Next() {
		var id, year, actress, movie string
		err = rows.Scan(&id, &year, &actress, &movie)
		if err != nil {
			panic(err)
		}
		a = append(a, Actress{Year: year, Actress: actress, Movie: movie})
	}
	return a
}
