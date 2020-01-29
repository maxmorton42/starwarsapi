import React, { useState, useEffect, } from "react"
import axios from "axios"
import { Card, Icon, Image, Segment } from 'semantic-ui-react'


const PeopleShow = (props) => {
  const [person, setPerson] = useState([])
  const [home, setHome] = useState([])

  useEffect(() => {
    axios.get(`${props.location.state.url}`)
      .then(res => {
        console.log(res.data)
        setPerson(res.data);
      })
    axios.get(`${props.location.state.homeworld}`)
      .then(response => {
        console.log(response.data)
        setHome(response.data)
      })
  }, [])

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', padding : "200px"}}>
      <Card >
        <h1> Character: {person.name} </h1>

    <Image
    style={{height : "300px",  width: "auto"}}
     src='https://i.pinimg.com/474x/ce/d3/3f/ced33f90c9f3cab8902a4fca9f54ba95.jpg' 
     />
    <Card.Content>
      <Card.Header> Name: {person.name}</Card.Header>
      <Card.Meta>
        <span className='date'> Birth Year: {person.birth_year}</span>
      </Card.Meta>
      <Card.Description>
       Height: {person.height} cm, Weight: {person.mass} Kg
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        "A long time ago in a galaxy far, far away"
      </a>
    </Card.Content>

  </Card>

<br />
<br />
<hr />
<br />
<br />

  <Card>
  <h1> Home Planet: {home.name} </h1>
<Image style={{height : "300px",  width: "auto"}} src='https://cdn.spacetelescope.org/archives/images/screen/heic0702a.jpg' 
 />
<Card.Content>
  <Card.Header> Name: {home.name}</Card.Header>
  <Card.Meta>
    <span className='date'> Planet width: {home.width}</span>
  </Card.Meta>
  <Card.Description>
   Type: {home.terrain}, {home.climate} Population: {home.population} 
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
    <Icon name='user' />
    The fictional universe of the Star Wars franchise features multiple planets and moons.
  </a>
</Card.Content>

</Card>
</div>

    </>
  )
}

export default PeopleShow
