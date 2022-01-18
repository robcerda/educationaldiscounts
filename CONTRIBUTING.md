# Contributing to educationaldiscounts.org

All the data is managed through a series of [JSON][json] files so it may be
useful to read up on the JSON syntax.

To add a new site, go to the [data files][entries] and get familiar with how it
is set up. There is one file per entry named after the domain, located in the
subdirectory starting with the first letter of the domain. Site icons
are stored in folders corresponding to each of those entries in their own
[folder][img].

## Guidelines

1. **Don't break the build**: We have a simple continuous integration system
   setup with GitHub Actions. If your pull request doesn't pass, it won't be
   merged. GH Actions will only check your changes after you submit a pull request.
   If you want to test locally, instructions are listed below. Keep reading!
2. **Use a Nice Icon**: SVG is the preferred format. If possible, please also run the image 
   through an optimizing utility such as [svgo][svgo] to reduce the file size.
   If an SVG icon is not available, the icon should be a PNG with a resolution of 32x32, 64x64 or 128x128.
   If possible, please also run the image through an optimizing
   utility such as [TinyPNG][tinypng] before committing it to the repo and keep
   the file to be under 2.5 kB.
3. **HTTPS links**: All sites that support HTTPS should also be linked with an
   HTTPS address.
4. **Alexa top 200K**: A new site that is not already listed has to be within the
   Alexa top 200,000 ranking. You can check the ranking of a site [here][alexa].

## Running Locally

There are detailed instructions on installing dependencies and running locally available in the [README][README].

#### Testing with Bundler

There are a number of tests that are run automatically for a GitHub pull request.
They are listed in `.github/workflows/repository.yml` in the [`tests:` block][tests].
You can run these manually as well, e.g to test your JSON changes:

```bash
$ bundle exec ruby ./tests/validate-json.rb
```

## Site Criteria

The following section contains rough criteria and explanations regarding
what websites should be listed on educationaldiscounts.org. If one of the following
criteria is met, it belongs on educationaldiscounts.org:

1. **Personal Info/Image**: Any site that deals with personal info or a person's
   image. An example of a site with **Personal Info** would be their Amazon
   account and a site regarding **Personal Image** would be one like Twitter.
2. **Data**: This criteria relates to data that is either important or sensitive.
   Websites detailed in criteria 1 also fit this criteria.
3. **Money**: Any site that deals with money.
4. **Control**: This criteria is more general, in that it includes sites that
   give access to things that may infringe upon criteria 1, 2, or 3. An example
   of this is a website that allows remote access to a device.

If you have any questions regarding whether or not a site matches one of the
criteria, simply open an issue and we'll take a look.

## New Sites

First and foremost, make sure the new site meets our [definition
requirements][definitions] of two factor authentication.

If you are adding multiple sites to the TwoFactorAuth list, please create a new
git branch for each website, and submit a separate pull request for each branch.
More information regarding how to create new git branches can be found on
[GitHub's Help Page][github-tutorial]
or [DigitalOcean's Tutorial][do-tutorial].

Adding a new website should be pretty straight-forward. Create a JSON file in
the corresponding [subdirectory][entries] as shown in the following example:

```JSON
{
  "Site Name": {
    "domain": "site.com",
    "img": "site.com.png",
    "tfa": [
      "teachers",
      "students"
    ],
    "documentation": "<link to site documentation>",
    "keywords": [
      "keyword1",
      "keyword2"
    ]
  }
}
```
- Keywords must be selected from the values listed in [`categories.json`][categories].
- The default value for the icon is `<domain>.svg`, but can be overridden by an `img`
field.

## New Categories

To add a new category, modify the [categories file][categories] and follow the
template below:

```JSON
  {
    "name" : "category-id",
    "title": "Category Title",
    "icon": "icon-class"
  },
```

The `icon-class` value needs to be chosen from [Font Awesome][font-awesome].

Then you can use the `category-id` as a keyword in the JSON file of your entry.


### Pro Tips

- See Guideline #2 about icons. The SVG file should go in the corresponding
  `img/` folder.

- For the sake of organization and readability, it is appreciated if your site chunk
  follows the same order as the example earlier in the document.

