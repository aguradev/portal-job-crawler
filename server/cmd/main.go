package main

import (
	"github.com/aguradev/portal-job-crawler/config"
)

func main() {
	config.LoadEnv()
	setupBootstrapApp := config.SetEnvConfig()
	InitServer := config.CreateNewServer()
	config.NewDatabaseConnect(setupBootstrapApp.DBHost, setupBootstrapApp.DBPort, setupBootstrapApp.DBuser, setupBootstrapApp.DBpass, setupBootstrapApp.DBname)

	InitServer.Started()
}
