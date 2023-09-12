# Rick and Morty

[![Build][docker-build-badge]][docker-build-link]
[![code style][code-style-icon]][code-style-link]
[![npm][license-icon]][license-link]

## What is this?

This is an Angular project that consumes the [Rick and Morty REST API][api-link]

## Running

Clone the project and go to the project path.

### Docker

Run as a Docker Image:

```zsh
docker build --pull --rm -f "Dockerfile" -t rickandmorty:latest "."
```

### Traditional

Requisites: Node, Angular and a package manager.

[Npm][npm-link] is used here but you can use other options as [yarn][yarn-link] or [pnpm][pnpm-link](recommended).

Install it's dependencies and run with:

```shell
npm install && ng serve
```

To see it working go to your browser on:

```browser
localhost:4200
```

Enjoy 😉

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
[code-style-icon]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[code-style-link]: https://standardjs.com
[license-icon]: https://flat.badgen.net/npm/license/cc-md
[license-link]: https://github.com/idleberg/Creative-Commons-Markdown/blob/main/4.0/zero.markdown
[api-link]: https://rickandmortyapi.com/
[npm-link]: https://www.npmjs.com/
[yarn-link]: https://yarnpkg.com/
[pnpm-link]: https://pnpm.io/
[dark-desktop-screenshot]: ./screenshots/desktop-dark.png
[theming-desktop-screenshot]: ./screenshots/theming.png
