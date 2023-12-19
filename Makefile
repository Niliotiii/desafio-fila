.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down
	
.PHONY: logs
logs:
	docker compose logs -f app
	
.PHONY: bash
bash:
	docker compose exec app bash
	
.PHONY: build
build:
	npm run build

ps:
	docker compose ps