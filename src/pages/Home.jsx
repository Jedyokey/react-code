import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../Button/Button'
import Button2 from '../components/Button2'
import Student from '../components/Student'
import Food from '../components/Food'
import Footer from '../components/Footer'

const Home = () => {
  
  return (
    <div>
      <Header />
      <h1>Card Components</h1>
      <Card />
      <Card />
      <Card />
      <h1>Buttons (CSS Styling)</h1>
      <Button />
      <Button2 />
      <Student heading="Props" name="Samuel Jackson" age={29} isStudent={true} />
      <Student name="James Patrick" age={35} isStudent={false} />
      <Student name="Sarah Williams" age={25} isStudent={true} />
      <Student name="Elizabeth Keen" age={32} isStudent={false} />
      <Student name="Larry Gaga" />
      <Food />
      <Footer />
    </div>
  )
}

export default Home
