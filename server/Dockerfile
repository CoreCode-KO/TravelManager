FROM ruby:3.0.2-alpine

ENV BUILD_PACKAGES="curl-dev ruby-dev build-base bash" \
    DEV_PACKAGES="zlib-dev libxml2-dev libxslt-dev tzdata yaml-dev postgresql-dev imagemagick" \
    RUBY_PACKAGES="ruby-json yaml nodejs"

RUN apk update && \
    apk upgrade && \
    apk add --update\
    $BUILD_PACKAGES \
    $DEV_PACKAGES \
    $RUBY_PACKAGES && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3000
RUN bundle config build.nokogiri --use-system-libraries && \
    bundle install

CMD ["/usr/src/app/bin/rails", "server", "-b", "0.0.0.0"]