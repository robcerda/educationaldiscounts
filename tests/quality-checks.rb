#!/usr/bin/env ruby
# frozen_string_literal: true

require 'json'

# Fetch created (but not renamed) files in entries/**
diff = `git diff --name-only --diff-filter=Ard origin/master...HEAD entries/`.split("\n")

diff&.each do |path|
  entry = JSON.parse(File.read(path)).values[0]
  next unless entry.key? 'tfa'

  # rubocop:disable Layout/LineLength
  puts "::notice file=#{path} title=Missing Documentation:: Since there is no documentation available, please could you provide us with a link to relevant discount documentation." unless entry['documentation']
  # rubocop:enable Layout/LineLength
end
