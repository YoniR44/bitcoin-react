import { decorate, observable, computed, action } from 'mobx'

import userService from '../services/UserService'

class UserStore {
    // OBSERVABLES
    loggedUser = null;

    // ACTIONS
    setLoggedUser() {
    }

    createAndSetUser(name) {
        userService.signup(name);
        this.loggedUser = userService.getUser();
    }

    addMove(contact, amount) {
        userService.addMove(contact, amount);
    }

    // COMPUTED FUNCTIONS
    get getLoggedUser() {
        return this.loggedUser;
    }
    
}

decorate(UserStore,
    {
        loggedUser: observable,
        setLoggedUser: action,
        createAndSetUser: action,
        addMove: action,
        getLoggedUser: computed,
    })

const userStore = new UserStore();
export default userStore;