package data

import (
	"os"
	"fmt"
	"encoding/csv"
)

type Actress struct {
	Year  string
	Name  string
	Movie string
}

func GetActresses() []Actress {
	csvFile, err := os.Open("./academy_award_actresses.csv")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer csvFile.Close()
	reader := csv.NewReader(csvFile)
	reader.FieldsPerRecord = -1
	csvData, err := reader.ReadAll()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	var actress Actress
	var actresses []Actress
	for _, a := range csvData[1:] {
		actress.Year = a[0]
		actress.Name = a[1]
		actress.Movie = a[2]
		actresses = append(actresses, actress)
	}
	return actresses
}
