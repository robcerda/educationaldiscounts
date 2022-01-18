# educationaldiscounts.org

A list of popular sites and services and whether or not they provided a teachers discount.

## The Goal :goal_net:

The goal of this project is to build a website ([educationaldiscounts.org][site_url]) with a curated list of popular sites and services that provide a teachers discount. Created this for my wife who's a teacher.

My hope is to help teachers with one site that points them to where they can find any services or websites that offer a discount.

## Installing dependencies :hammer_and_wrench:

### 1. Installation

This is the most difficult option and recommended for environments where Docker or Snap can't be used.

GNU/Linux and WSL:

```bash
sudo apt install build-essential ruby-bundler ruby-dev make gcc g++ zlib1g-dev npm
npm i babel-minify
bundle config set path './vendor/cache'
bundle install
```

MacOS (_Requires Xcode_):

```bash
# Install homebrew
xcode-select --install
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh

# Install ruby & nodejs(npm)
brew install ruby
brew install nodejs
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

# Install Bundler and dependencies
gem install bundler
bundle config set path './vendor/cache'
bundle install
npm i babel-minify
```

## Building :running:
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

## License :balance_scale:

This code is distributed under the MIT license. For more info, read the
[LICENSE][license] file distributed with the source code.

