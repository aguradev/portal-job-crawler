package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Bootstrap struct {
	Port   string
	DBHost string
	DBPort int
	DBuser string
	DBpass string
	DBname string
}

func SetEnvConfig() *Bootstrap {
	DBPort, _ := strconv.Atoi(getEnv("DB_PORT", "5432"))
	return &Bootstrap{
		Port:   getEnv("PORT", ":8080"),
		DBHost: getEnv("DB_HOST", "localhost"),
		DBPort: DBPort,
		DBuser: getEnv("DB_USER", "postgre"),
		DBpass: getEnv("DB_PASS", ""),
		DBname: getEnv("DB_NAME", "db_name"),
	}
}

func LoadEnv() {
	err := godotenv.Load()

	if err != nil {
		log.Fatalf("Error load env \n")
	}
}

func getEnv(key string, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}

	return fallback
}
