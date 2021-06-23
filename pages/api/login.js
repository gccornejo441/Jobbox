import auth0 from '../../lib/auth0/auth0'

export default async function login(req, res) {
    console.log(req)
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}