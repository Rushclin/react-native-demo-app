import AsyncStorage from "@react-native-async-storage/async-storage"

const logIn = async (user) => {
    console.log("User infos : ", user)
    const { username, password, language } = user

    // Je fait ujne requete fetch ici, mais pour le moment je teste juste si c'est email : admin@gmail.com. mote de passe : admin
    if (username == 'admin@gmail.com' && password == 'admin') {
        try {
            AsyncStorage.setItem('user', JSON.stringify(user))
            return {
                status: 'success',
                message: 'Vous seriez rediriger',
                user: user
            }
        } catch (e) {
            console.log("Erreur lors du stockage de l'utilisateur", e)
            return {
                status: 'error',
                message: 'Erreur lors du stockage des informations de l\'utilisateur'
            }
        }
    } else {
        return {
            status: 'error',
            message: 'Erreur, les informations ne correspondent pas'
        }
    }
}

const logOut = async () => {
    try {
        AsyncStorage.clear()
        return {
            statut: 'success',
            message: 'Vous etes deconnecte'
        }
    } catch (e) {
        return {
            statut: 'error',
            message: e
        }
    }
}

export default {
    logIn,
    logOut
}