.PHONY: dev kill install build

dev:
	npm install && npm run dev

kill:
	pkill -f "next dev" || true
	pkill -f "node" || true

install:
	npm install

build:
	npm run build

start:
	npm start

lint:
	npm run lint

.DEFAULT_GOAL := dev
