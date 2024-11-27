"use client"
import InstagramEmbed from "./app/components/igEmbed.js"
import { Card, CardBody, Button } from "@nextui-org/react"
const LandingView = () => {
  return (
    <>
      <p>Hello People</p>
      <Card>
        <CardBody>
          <h3>SalsaColombia Coming Soon!</h3>
          <Button color="primary">Send me info</Button>
          <InstagramEmbed />
        </CardBody>
      </Card>
    </>
  )
}
export default LandingView
