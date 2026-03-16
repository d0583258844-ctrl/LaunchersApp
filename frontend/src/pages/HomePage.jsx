import "./Home.css"
import { fetchData } from "../api/launcherApi"
import { useEffect, useState } from "react"

function HomePage() {
  const [rockets, setRockets] = useState()

  useEffect(() => {

    async function displayData() {
      const data = await fetchData()

      setRockets(data)
    }

    displayData()
  }, [])

  return (
    <div className="block">
      {rockets?.map((rocket) => (
        <div className="card" key={rocket._id}>
            <p className="para">
              Name: {rocket.name}
            </p>
            <p className="para">
              Rocket Type: {rocket.rocketType}
            </p>
            <p className="para">
              Latitude: {rocket.latitude}
            </p>
            <p className="para">
              Longitude: {rocket.longitude}
            </p>
            <p className="para">
              City: {rocket.city}
            </p>
          </div>
      ))}
    </div>
  )
}

export default HomePage
