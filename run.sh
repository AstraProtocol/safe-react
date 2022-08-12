nginx -s stop && \
rm -r /usr/share/nginx/html && \
mkdir -p /usr/share/nginx/html && \
cp -a build/ /usr/share/nginx/html/app && \
cp  build/index.html /usr/share/nginx/html && \
cop docker/nginx.conf /etc/nginx/conf.d/default.conf && \
nginx -g daemon off