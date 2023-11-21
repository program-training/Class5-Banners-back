# Class5-Banners-back

To Run The Server you must have the following in environment variables:

* GMAIL_USERNAME
* GMAIL_APP_PASSWORD
* MONGODB_URI
* POSTGRESQL_CONNECTION_STRING
* PORT

## API

User:

* POST /api/users/sign-up
  body: user: { email: string, password: string, username: string, isAdmin: boolean }
* POST /api/banners/new
  body: banner: { productID: string,  ?}
  header: ?
