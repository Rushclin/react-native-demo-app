import React from 'react'
import { ScrollView, View } from "react-native"
import { Button, Div, Dropdown, Fab, Icon, Text, ThemeProvider } from 'react-native-magnus'
import { styles } from '../styles/styles'

const App = () => {
    const theme = {
        rounded: {
            'circle': '100%'
        }
    }
    const dropdwonRef = React.createRef()

    return (
        <ThemeProvider theme={theme}>
            <ScrollView style={styles.container}>
                <Div m='md'>
                    <Div>
                        <Div rounded='xl' h={150} w='100%' bgImg={{ uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}>
                            <Div bg='pink500' rounded='md' row flexWrap='wrap' px='md' m='lg' alignSelf='flex-start'>
                                <Text color='white' fontSize='sm' fontWeight='bold'>2 chambres</Text>
                            </Div>
                        </Div>
                        <Div row alingItems='center'>
                            <Div flex={1}>
                                <Text fontSize='xl' fontWeight='bold' mt='sm'>Chambre a DSCHANG</Text>
                                <Text fontSize='sm' color='gray500'>Foto, cité des Anges</Text>
                            </Div>
                            <Div row alingItems='center'>
                                <Text color='blue500' fontWeight='bold' fontSize='xl'>150 000</Text>
                                <Text color='gray500' fontSize='md' ml='md'> / par an TTC</Text>
                            </Div>
                        </Div>
                    </Div>
                </Div>

                <Div m='md'>
                    <Text fontWeight='bold' fontSize='xl'>Essais sur les shadows et les BOX (DIV)</Text>

                    <Div row m='md'>
                        <Div bg='pink500' rounded='sm' h={50} w={50}></Div>
                        <Div bg='teal500' rounded='md' h={50} w={50} ml='md'></Div>
                        <Div bg='blue700' rounded='lg' h={50} w={50} ml='md'></Div>
                        <Div bg='red900' rounded='xl' shadow='md' h={50} w={50} ml='md'></Div>
                        <Div bg='red900' rounded='circle' shadow='2xl' h={50} w={50} ml='md' alignItems='center' justifyContent='center'>
                            <Icon name='car' type='AntDesign' fontSize={32} color='gray900' />
                        </Div>
                    </Div>
                </Div>

                <Div m='md'>
                    <Text fontWeight='bold' fontSize='xl'>Essais sur les Boutons</Text>
                    <Div mt='md'>
                        <Button bg='blue500' h={40} w={40} rounded='circle'>
                            <Icon name='like1' color='gray700' />
                        </Button>
                        <Button loading={true} block bg='pink500' p={12}>
                            Bouton avec chargement
                        </Button>
                    </Div>

                    <Div row mt='xl' justifyContent='center' alignItems='center'>
                        <Button bg='white' borderless shadow='sm' rounded='circle' w={40} h={40} alignSelf='center'>
                            <Icon name='repeat' fontFamily='Feather' color='red700' />
                        </Button>
                        <Button bg='red700' borderless rounded='circle' shadow='sm' w={70} h={70} mx='lg'>
                            <Icon name='play' fontFamily='Feather' color='white' />
                        </Button>
                        <Button bg='white' borderless rounded='circle' shadow='sm' w={40} h={40} alignSelf='center'>
                            <Icon name='skip-forward' fontFamily='Feather' color='red700' />
                        </Button>
                    </Div>

                    <Button block color='white' p='none' mt='lg'>
                        <Div p='lg' flex={1}
                            bgImg={{
                                uri: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                            }}
                        >
                            <Text color='white' fontSize='3xl' fontWeight='bold'>Rushclin Takam</Text>
                            <Text color="white" fontSize="sm" mt="sm" opacity={0.9}>
                                Rushclin Takam est un gar gentil garcon, fait ce qui est bien. Dans la mesure du possible, il est genial
                            </Text>
                            <Div row mt='xl'>
                                <Text color='white' fontWeight='bold'>En savoir plus</Text>
                                <Icon name='arrowright' color='white' ml='md' />
                            </Div>
                        </Div>
                    </Button>
                </Div>
                <Div mt='xl' pl='md'>
                    <Text fontWeight='bold' fontSize='xl'>Essais sur un Dropdown</Text>
                    <Button block mt='md' onPress={() => dropdwonRef.current.open()} >Ouvir le dropdown</Button>
                    <Dropdown
                        ref={dropdwonRef}
                        title={
                            <Text fontWeight='bold' fontSize='xl' px='xl' color='gray500'>Faire un choix parmis tant d'autre</Text>
                        }
                        mt='md'
                        pb='2xl'
                        showSwipeIndicator={true}
                        roundedTop='xl'
                    >

                        <Dropdown.Option py="md" px="xl" block>
                            Premiere option
                        </Dropdown.Option>

                    </Dropdown>
                </Div>
                <Fab bg='blue500' ></Fab>
            </ScrollView>
        </ThemeProvider>
    )
}

export default App