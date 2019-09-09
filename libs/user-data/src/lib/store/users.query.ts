import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { UsersState, usersStore } from './users.store';

export class UsersQuery extends QueryEntity<UsersState, User> {
  users$: Observable<User[]> = this.selectAll();
  active$: Observable<User> | Observable<User[]> = this.selectActive();
}

export const usersQuery = new UsersQuery(usersStore);
