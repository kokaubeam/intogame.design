# Into Game Design

A project to invite those with the desire to create interactive media into the
craft of game design.

Visit the site at https://intogame.design.

## Setup a Development Environment

- Install [Git](https://git-scm.com/)
- Install [Docker](https://www.docker.com/community-edition#/download)

```
git clone git@github.com:intogamedesign/intogame.design.git
cd intogame.design

docker-compose up -d
```

Navigate your browser to https://localhost:3000.

## Running Tests

```
docker-compose run website yarn test
```
