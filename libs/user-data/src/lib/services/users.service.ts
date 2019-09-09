import { of } from 'rxjs';
import { ID } from '@datorama/akita';

import { UsersStore, usersStore } from '../store/users.store';
import { User } from '../models/user.model';
import data from './users.data';

export class UsersService {
  constructor(private usersStore: UsersStore) {}

  loadAll() {
    of(data).subscribe(entities => {
      this.usersStore.set(entities);
    });
  }

  setActive(id: ID) {
    this.usersStore.setActive(id);
  }

  updateActive(user: User) {
    this.usersStore.updateActive(user);
  }
}

export const usersService = new UsersService(usersStore);
