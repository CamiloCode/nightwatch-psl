# nightwatch-psl

first you need to install node.js in your machine

after that you will need to install nightwatch using npm

npm install -g nightwatch

after installing nightwatch , just cd into the root dir of this repo and run

for chrome testing:

nightwatch --env psl-chrome --test .\tests\test.js```

for firefox testing:

nightwatch --env psl-firefox --test .\tests\test.js
