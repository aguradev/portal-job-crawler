package main

import (
	"github.com/aguradev/portal-job-crawler/config"
)

func main() {
	InitServer := config.CreateNewServer()

	InitServer.Started()
}
