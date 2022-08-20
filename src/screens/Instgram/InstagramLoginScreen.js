import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Div, Dropdown, Icon, Input, Text } from 'react-native-magnus';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/Auth/AuthActions';

const InstagramLoginScreen = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const languageDropdown = React.createRef();
    const [language, setLanguage] = React.useState('');
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handleSubmit = () => {
        let user = {
            username: email,
            password: password
        };

        dispatch(login(user)).then((response) => {
            if (response.status == 'success') {
                navigation.replace("InstagramHomeScreen")
            }
        }).catch((error) => {
            navigation.replace("InstagramLoginScreen")
        })
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Div mt="3xl" flex={1}>
                <Text mt="2xl" fontWeight="bold" fontSize="5xl" mx="xl" w="70%">
                    Get Started
                </Text>
                <Text mx="xl" fontSize="lg" color="gray600" mt="md" w="60%">
                    Email
                </Text>
                <Input
                    mx="xl"
                    mt="md"
                    px="md"
                    py="sm"
                    borderColor="gray200"
                    borderWidth={1}
                    keyboardType="email-address"
                    focusBorderColor="blue900"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text color="gray600" mx="xl" mt="xl">
                    Password
                </Text>
                <Input
                    mx="xl"
                    mt="md"
                    px="md"
                    py="sm"
                    borderColor="gray200"
                    focusBorderColor="blue900"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <Div mx="xl">
                    <Button
                        block
                        mt="lg"
                        suffix={<Icon name="arrowright" color="white" mx={12} />}
                        onPress={() => handleSubmit()}
                        disabled={email.length == 0 || password.length == 0}>
                        Click to login
                    </Button>
                </Div>
                <Div my="xl" mx="xl">
                    <Button
                        block
                        onPress={() => {
                            languageDropdown.current.open();
                        }}>
                        <Text color="white">Language choice {language} </Text>
                    </Button>
                    <Dropdown
                        ref={languageDropdown}
                        title={
                            <Text
                                fontWeight="bold"
                                fontSize="xl"
                                px="xl"
                                pb="md"
                                color="gray500">
                                Choisir sa langue
                            </Text>
                        }
                        mt="md"
                        pb="2xl"
                        showSwipeIndicator={true}
                        roundedTop="xl">
                        <Dropdown.Option pb="xl" px="xl" block onPress={() => setLanguage('Fr')}>
                            Francais
                        </Dropdown.Option>
                        <Dropdown.Option pb="xl" px="xl" block onPress={() => setLanguage('En')}>
                            Anglais
                        </Dropdown.Option>
                    </Dropdown>
                </Div>
            </Div>
        </SafeAreaView>
    );
};

export default InstagramLoginScreen;
