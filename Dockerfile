FROM golang:1.23.2

WORKDIR /go/usr/src/app

COPY ./backend .

RUN go mod tidy