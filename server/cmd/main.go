package main

import (
	"github.com/aguradev/portal-job-crawler/config"
)

func main() {
	// setup ENV
	config.LoadEnv()
	SetupBootstrapApp := config.SetEnvConfig()

	// setup server, routing
	InitServer := config.CreateNewServer()

	// setup database
	config.NewDatabaseConnect(SetupBootstrapApp.DBHost, SetupBootstrapApp.DBPort, SetupBootstrapApp.DBuser, SetupBootstrapApp.DBpass, SetupBootstrapApp.DBname)

	InitServer.Started(SetupBootstrapApp.Port)
}
