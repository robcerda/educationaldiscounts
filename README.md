# educationaldiscounts.org

A list of popular sites and services and whether or not they provided a teachers discount.

### 1. Docker

```BASH
docker pull rcerda/educationaldiscounts
```

## Building 

Docker (Windows/Linux/MacOS):

```BASH
docker run -p 4000:4000 -v $(pwd):/educationaldiscounts rcerda/educationaldiscounts
```

Manual:

```bash
# Create _data/all.json
ruby ./scripts/join-entries.rb > _data/all.json

# Building the site
bundle exec jekyll build

# Minify JS (Optional)
./scripts/minify-js.sh

To run the site on a minimal WEBrick webserver, do:

```BASH
bundle exec jekyll serve
```
To publish changes to the actual site and have them reflected, make sure to also commit _data/all.json

The website should now be accessible from `http://localhost:4000`.

## License

This code is distributed under the MIT license. For more info, read the
[LICENSE][license] file distributed with the source code.

