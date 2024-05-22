package dto

import (
	"encoding/json"
	"log"
)

type BaseResponse struct {
	Message string      `json:"status,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}

func HandleResponse(message string, datas interface{}) []byte {
	res := BaseResponse{
		Message: message,
		Data:    datas,
	}

	resJSON, err := json.Marshal(res)

	if err != nil {
		log.Fatal(err.Error())
		return nil
	}

	return resJSON
}
