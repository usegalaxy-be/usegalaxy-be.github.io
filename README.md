# Homepages for useGalaxy.be 

Pages are rendered using Jekyll based on the markdown files in the `main` branch.
These changes get rendered to HTML pages and deployed using GitHub Pages.


To change the url in the welcome page of usegalaxy.be, change: `/srv/galaxy/shared/src/static/welcome.html`

## Deploy locally using Jekyll

1. If not already present on your machine, install **ruby**. 

2. Install Jekyll

     If you have never installed or run a Jekyll site locally on your computer, follow these instructions to install Jekyll: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

    ```
    gem install jekyll
    ```

3. Install dependencies

    ```
    bundle install
    ```

4. Deploy website locally in development mode:

    ```
    bundle exec jekyll serve
    ```

    If you want to deploy the website locally in production mode, do:

    ```
    JEKYLL_ENV=production PAGES_REPO_NWO='USER_OR_ORGANISATION/REPO_NAME' bundle exec jekyll serve --baseurl ""
    ```

5. To preview your site, in your web browser, navigate to `http://localhost:4000`.
   
Additional information can be found at the following link: [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)


### Deploy locally using Docker

If not already installed on your machine, install Docker. From the root of the `usegalaxy-be.github.io` directory, run:

```sh
docker run -it --rm -p [::1]:4000:4000 -v $PWD:/srv/jekyll jekyll/jekyll:latest /bin/bash -c "chmod a+w /srv/jekyll/Gemfile.lock && chmod 777 /srv/jekyll && bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

This will start the docker container and serve the website locally. Make sure the `.\_site` is not yet created to avoid permission errors.
