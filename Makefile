KARMA=node_modules/karma/bin/karma

.PHONY: test

test:
	$(KARMA) start tests/config.js

