import StorageService from './StorageService'

export default {
    getUser,
    signup,
    addMove
}

const LOGGED_USER = 'LOGGED_USER';

function getUser() {
    let user = StorageService.load(LOGGED_USER);

    if(user) return user;
    else return 
}

function signup(name) {
    let user = {
        name: name,
        coins: 100,
        moves: []
    }
    
    StorageService.store(LOGGED_USER, user);

    return user;
}

function addMove(contact, amount) {
    let user = StorageService.load(LOGGED_USER);
    user.moves.push({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
    });
    user.coins -= amount;
    StorageService.store(LOGGED_USER, user);
}