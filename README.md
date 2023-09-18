# Rick and Morty

[![Build][docker-build-badge]][docker-build-link]
[![npm][license-icon]][license-link]

## What is this?

This is an Angular project that consumes the [Rick and Morty REST API][api-link]

## Running

Clone the project and go to the project path.

### Docker

Build:
```zsh
DOCKER_BUILDKIT=1 docker build --pull -f "Dockerfile" -t rickandmorty:latest "."
```

Run:
```zsh
docker run -p 8080:80 rickandmorty
```

To see it working go to your browser on:

```browser
localhost:8080
```

### Traditional

Requisites: Node, Angular and a package manager.

[Npm][npm-link] is used here but you can use other options as [yarn][yarn-link], [pnpm][pnpm-link] or [bun][bun-link].

Install it's dependencies and run with:

```shell
npm install && ng serve
```

To see it working go to your browser on:

```browser
localhost:4200
```

## Screenshots

On Desktop:

![desktop-dark][dark-desktop-screenshot]

On Mobile:

<img src="./screenshots/mobile-dark.png" style="width:400px; height:auto"/>

Theming:

![theming][theming-desktop-screenshot]

## Copyright

Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.

This application is open source and uses a [Creative Commons CC0 1.0 Universal license][license-link].

[docker-build-link]: https://github.com/vitormmatos/vitormmatos.github.io/actions/workflows/build.yml
[docker-build-badge]: https://github.com/vitormmatos/vitormmatos.github.io/actions/workflows/build.yml/badge.svg?branch=main
[license-icon]: https://flat.badgen.net/npm/license/cc-md
[license-link]: https://github.com/idleberg/Creative-Commons-Markdown/blob/main/4.0/zero.markdown
[api-link]: https://rickandmortyapi.com/
[npm-link]: https://www.npmjs.com/
[yarn-link]: https://yarnpkg.com/
[pnpm-link]: https://pnpm.io/
[bun-link]: https://bun.sh/
[dark-desktop-screenshot]: ./screenshots/desktop-dark.png
[theming-desktop-screenshot]: ./screenshots/theming.png
