import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {User} from "../models/user.model";


export interface UsersState extends EntityState<User> {
}

@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState, User> {
}

export const usersStore = new UsersStore();
