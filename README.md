# dot-com

Personal website for Rob Erekson, viewable at [https://roberekson.com](https://roberekson.com).

## Development

A Docker container running nginx is available for running the site locally.

### Start Dev Server

Builds the site assets and stars the server container, making the site available at http://localhost:8080 or http://127.0.0.1:8080.

```sh
$ npm start
```

### Stop Dev Server

Stops the dev server container, but don't remove it

```sh
$ npm stop
```

### Clean Up Dev Server

This command shuts down and cleans up the nginx container

```sh
$ npm run destroy
```

### Build Site

Does any processing of source assets and populates directory used by nginx to view the site.

```sh
$ npm run build
```

### Watch

Watches the `src` directory for changes and re-builds the assets for the public site.

**NOTE:** The `build` command needs to be run once before starting the `watch` process.

```sh
$ npm run watch
```

## TODOs

No project is ever finished, right? And what better place to keep toying around then a personal site? Below is a list of things I'll get to adding and/or updating eventually. I promise!

* Page navigation
* Sticky header
* Unit testing for any eventually-added JavaScript
* Publishing pipeline using Github's Travis or a Jenkins container
* 2000s era web counter?
* Blog posts (someday...right!?)

