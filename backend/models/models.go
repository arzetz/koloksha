package models

import "gorm.io/gorm"

type Order struct {
	gorm.Model
	User_Name    string `json:"user name" gorm:"varchar(13);not null;default:null"`
	Phone_Number string `json:"phone number" gorm:"text;not null;default:null"`
}
