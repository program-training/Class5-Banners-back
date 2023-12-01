# Class5-Banners-back

To Run The Server you must have the following in environment variables or .env file:

* GMAIL_USERNAME
* GMAIL_APP_PASSWORD
* MONGODB_URI
* POSTGRESQL_CONNECTION_STRING
* PORT

## API

Test if server is up:

* GET /test-server-up
  response "server is up"

Users:

* POST /users/sign-up
  body: user: { email: string, password: string, username: string, isAdmin: boolean }

Banners

* POST /banners/new
  body: banner: { productID: string,  ?}
  header: ?
