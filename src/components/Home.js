import React, { useState, useEffect, } from "react";
import axios from "axios"
import { Link, } from 'react-router-dom'
import { List, Header, Segment,  } from "semantic-ui-react"


const Home = () => {
  const [people, setPeople] = useState([])
  const [people2, setPeople2] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(res => {
        console.log(res.data)
        setPeople(res.data.results);
      })
    axios.get("https://swapi.co/api/people/?page=2")
      .then(response => {
        console.log(response.data)
        setPeople2(response.data.results);
      })
  }, [])

  return (
    <>
      <Header as="h1">STAZ WARZ</Header>
      <br />
      <List divided relaxed>
        {people.map(person => (
          <Segment key={person.name}>
          <List.Icon name='star' size='large' verticalAlign='middle' />
            <Link to={
              {
                pathname: `person/${person.name}`,
                state: { url: person.url, homeworld: person.homeworld }
              }}>
              <List.Header as="h3">{person.name}</List.Header>

            </Link>
          </Segment>
        ))
      }
        {people2.map(person2 => (
          <Segment key={person2.name}>
              <List.Icon name='star' size='large' verticalAlign='middle' />
            <Link to={
              {
                pathname: `person/${person2.name}`,
                state: { url: person2.url, homeworld: person2.homeworld }
              }}>
                <span></span>
              <List.Header as="h3">{person2.name}</List.Header>

            </Link>
          </Segment>
        ))
        }
      </List>
    </>
  )
}

export default Home;