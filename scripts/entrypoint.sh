#!/bin/sh
cd /twofactorauth

if [ -z "${SKIP_DOS2UNIX}" ]; then
  echo "Converting scripts to Unix format:"
  dos2unix scripts/*
  dos2unix tests/*
fi

if [ -z "${SKIP_BUILD}" ]; then
  echo "Building site:"
  ruby ./scripts/join-entries.rb > _data/all.json
  bundle exec jekyll build
  if [ -z "${SKIP_REGIONS}" ]; then
    echo "Generating regions:"
    ruby ./scripts/regions.rb
  fi
fi

if [ -z "${SKIP_MINIFY}" ]; then
  echo "Minifying JavaScript files:"
  ./scripts/minify-js.sh
fi

bundle exec jekyll serve --skip-initial-build --host=0.0.0.0
