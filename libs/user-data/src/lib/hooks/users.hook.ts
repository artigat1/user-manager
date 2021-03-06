import { useEffect, useState } from 'react';
import { ID } from '@datorama/akita';
import { Observable, Subscription } from 'rxjs';

import { User } from '../models/user.model';
import { usersService } from '../services/users.service';
import { usersQuery } from '../store/users.query';

interface UserState { users: User[]; active: User | null; }

function onEmit<T>(source$:Observable<T>, nextFn:(value: T) => void): Subscription {
  return source$.subscribe(nextFn, console.error);
}

/**
 * View Model for User view components
 */
export function useUsersFacade(): [UserState, Function, Function] {
  const setActive = (id: ID) => usersService.setActive(id);
  const setUser = (newUser: User) => usersService.updateActive(newUser);
  const [state, setState] = useState<UserState>({ users: [], active: null });

  /**
   * Manage subscriptions with auto-cleanup
   */
  useEffect(() => {
    const subscriptions: Subscription[] = [
      onEmit<User[]>(usersQuery.users$, users => setState(state => ({ ...state, users  })) ),
      onEmit<User>(usersQuery.active$, active => setState(state => ({ ...state, active })) )
    ];

    usersService.loadAll();
    return () => { subscriptions.map(it => it.unsubscribe()) };
  },[]);

  return [state, setActive, setUser]
}
