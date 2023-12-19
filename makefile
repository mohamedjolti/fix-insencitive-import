dc = docker-compose
dce = $(dc) exec 
sayHello:
	@echo "Hi, makefile is working , enjoy!"

firstinstall:
	$(dc) build fix-insencitive-import
	$(dc) up -d

recreateContainer:
	$(dc) up -d --no-deps --build  fix-insencitive-import
run:
	$(dce)  fix-insencitive-import npm run dev
startContainer:
	$(dc) start fix-insencitive-import

test:
	$(dce) fix-insencitive-import npm test

publish:
	$(dce) fix-insencitive-import npm publish


