import {useEffect} from 'react'

function UserResults() {
  useEffect(() => {
    fetchUsers()
  },[])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token $ {
          import.meta.env.VITE_APP_GITHUB_TOKEN
        }`
      }
    })

    const data = await response.json()

    console.log(data)
  }
  return <div>User Results</div>
}

export default UserResults