import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, Heading,Text} from '@chakra-ui/react'
import {useSelector} from "react-redux"

export default function ({onClose,isOpen}) {

    const loading = useSelector((store)=>{
        return store.loading;
      })
      const status = useSelector((store)=>{
        return store.status;
      })
      const error = useSelector((store)=>{
        return store.error;
      })
    
      
    
    //   console.log(loading)
    


  return (
    <>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Healthy Life Advice</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="5%" fontSize="12px" alignItems="center">
          {
                loading?<Heading fontSize="md">Please Wait! We Are Generating Response...</Heading>:error?<Heading>Error While Submitting the Response Please Try Again</Heading>:<Text>{status}</Text>
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
)
  }