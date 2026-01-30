# Static Site Deployment
FROM nginx:alpine

# Copy public assets (images, icons)
COPY public/ /usr/share/nginx/html/

# Copy the static HTML file and rename it to index.html
COPY index_static.html /usr/share/nginx/html/index.html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
