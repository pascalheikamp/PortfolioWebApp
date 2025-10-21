import { useState, useEffect } from "react";

const useFetch = (url, parameter) => {
    //console.log(parameter.per_page)
const [projects, setProjects] = useState([])
  const retrieveProjects = async () => {
    //console.log(token)
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    console.log(token)
  const reponse  =  await fetch(`${url}per_page=${parameter.per_page}&page=${parameter.page}`, {
    headers: {
      Authorization: `token ${token}`,
       Accept: 'application/vnd.github.v3+json'
    }
  })
  const data = await reponse.json()
  setProjects(data)
  }

  useEffect(() => {
    retrieveProjects()
  }, [])
  return {projects}
}

export default useFetch;

