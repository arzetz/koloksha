package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Инициализация роутера Gin
	router := gin.Default()

	// Определение маршрута GET для главной страницы
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, World!",
		})
	})

	// Запуск сервера на порту 3000
	router.Run(":3000")
}
