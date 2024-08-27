FROM ubuntu:latest
# Commentaire
# INSTRUCTION arguments

# installation de node version 20
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

WORKDIR /var/www/

#copie du ficher 'hello-world.js' dans le dossier '/var/www' du container
# COPY ./hello-world.js /var/www/
COPY ./hello-world.js .

COPY ./test.txt ./test/
# ADD ./hello-world.js /var/www/

# CMD ["node", "hello-world.js"]
# ENTRYPOINT ["node", "hello-world.js"]

ENTRYPOINT [ "node" ]
CMD [ "hello-world.js" ]