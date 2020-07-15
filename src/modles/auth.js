import {
    observable,
    action,
    computed,
} from 'mobx';

class AuthStore {
    @observable name = '555';

    // 不接受任何参
    @computed get getName() {
        return this.name;
    }

    // @autorun( () => {
    // })

    @action.bound setName(name) {
        console.log(this.name, name);
    }

    // 或者
    @action
    setName = (name) => {
        console.log(this.name, name);
    }
}

const authStore = new AuthStore();

export { authStore };
