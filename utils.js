import { redirect } from "react-router-dom";


export function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    console.log(pathname)
    localStorage.setItem('pathname', pathname)
    return null

  }