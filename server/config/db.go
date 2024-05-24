package config

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

type DatabaseStorage struct {
	db *sql.DB
}

func NewDatabaseConnect(host string, port int, user string, password string, dbname string) *DatabaseStorage {
	DBParams := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	dbConnect, err := sql.Open("postgres", DBParams)

	if err != nil {
		log.Fatalln("Error when connect to database")
		return nil
	}

	log.Printf("Success connect DB \n")

	return &DatabaseStorage{
		db: dbConnect,
	}
}
