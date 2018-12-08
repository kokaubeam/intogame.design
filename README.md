# Into Game Design

A project to invite those with the desire to create interactive media into the craft of game design.

## Setup a Development Environment

- Install [Git](https://git-scm.com/)
- Install [Docker](https://www.docker.com/community-edition#/download)

Clone the repository:

```
git clone git@github.com:kokaubeam/intogame.design.git intogame.design
cd intogame.design
```

Run the development docker compose:

```
docker-compose up
```

### Testing

```
docker-compose run --rm ui yarn test
```
