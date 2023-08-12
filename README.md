# Update / Install guide

```
git pull origin master
yarn install
npm run docs:build
```

For local testing, use `npm run docs:dev` instead and go to 0.0.0.0:8080.

Built docs will be placed in sub-directory, point web server at that, done.

Nginx config:

```
server {
    listen 80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
        listen 443 default_server ssl;
        root /var/www/docs.wallpaperengine.io/docs/.vuepress/dist;
        server_name docs.wallpaperengine.io;
        index /wallpaper-engine-docs/index.html;

        ssl_certificate     /etc/letsencrypt/live/docs.wallpaperengine.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/docs.wallpaperengine.io/privkey.pem;

        location / {
                try_files $uri $uri/ /wallpaper-engine-docs/index.html /404.html;
        }
}
```