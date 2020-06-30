export const isNewSessionRequired = (httpMethod, url) => {
  for (let routeObj of newSessionRoutes) {
    if (routeObj.method === httpMethod && routeObj.path === url) {
      return true
    }
  }
  return false
}

export const isAuthRequired = (httpMethod, url) => {
  for (let routeObj of authRoutes) {
    if (routeObj.method === httpMethod && routeObj.path === url) {
      return true
    }
  }
  return false
}