import { Box, Heading, Text,Card, CardBody,Image,Stack,Button,useToast } from "@chakra-ui/react";

export default function Featured() {
    const toast = useToast()
    const featuredData = [
    {
        mood:"Motivated",
        shareHowYouFeel:"Preparing for a big presentation and want to perform at my best.",
        intention:"To boost confidence, mental clarity, and develop a positive mindset for success.",
        practiceStyle: "Mantra",
        image : "https://medito.ai/_next/image?url=%2Fimages%2Fmotivation_work_office.jpg&w=640&q=75",
        duration: "5 minutes"
    },
    {
        mood:"Stressed",
        shareHowYouFeel:"Overwhelmed by work and struggling to balance personal life.",
        intention:"To calm the mind, improve focus, and regain a sense of balance.",
        practiceStyle: "Visualization",
        image : "https://medito.ai/_next/image?url=%2Fimages%2Fstress_work_from_home.jpg&w=640&q=75",
        duration: "5 minutes"
    },
    {
        mood:"Sad",
        shareHowYouFeel:"Going through a breakup and feeling heartbroken.",
        intention:"To find comfort, healing, and cultivate self-love and compassion for oneself and others.",
        practiceStyle: "Loving-kindness",
        image : "https://medito.ai/_next/image?url=%2Fimages%2Fbreakup_loving_kindness.jpg&w=640&q=75",
        duration: "5 minutes"
    }
    ]

    return (
        <Box id="featured-meditation">
            <Heading mb="2%">Featured Meditations</Heading>
            <Text>Our users love creating their own custom meditations!</Text>
            <Text>Explore a few favorites shared by our community and get inspired to create your own.</Text>

            {
                featuredData.map((e)=>{
                    return <Card direction={{ base: 'column',sm: 'row' }} overflow='hidden'variant='outline' id="card">
                      <Image  src={e.image} alt={e.mood}/>
                    
                      <Stack>
                        <CardBody>
                            <span className="card-headings">Mood: </span> <span>{e.mood}</span> <br />
                            <span className="card-headings">Share how you feel: </span> <span>{e.shareHowYouFeel}</span><br />
                            <span className="card-headings">Intention: </span> <span>{e.intention}</span><br />
                            <span className="card-headings">Practice Style: </span> <span>{e.practiceStyle}</span><br />
                            <span className="card-headings">Duration: </span> <span>{e.duration}</span><br />
                            <Button id="card-btn" variant='outline' colorScheme='teal' onClick={()=>{
                                toast({
                                    title: 'This Feature is Currently Unavailable !',
                                    description: "We're working on it.",
                                    status: 'error',
                                    duration: 2000,
                                    isClosable: true,
                                  })
                            }}>Play</Button>
                        </CardBody>
                      </Stack>
                    </Card>
                })
            }
        </Box>
    )
}