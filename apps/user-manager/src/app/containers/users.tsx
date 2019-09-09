import * as React from 'react';

import {useUsersFacade} from "@user-manager/user-data";
import {UserInfo} from "../components/user-info";
import {Users} from "../components/users-list";

/**
 * UsersVM provides:
 * 1) eventHandlers used to trigger logic activity an [later] push data updates
 * 2) Internal state hooks to trigger view rendering
 * 3) Async, internal data pushes
 */

export const UsersPage = () => {
  const [{users, active}, selectUser, updateUser] = useUsersFacade();

  return (
    <section className="users-container">
      <Users users={users} onSelect={selectUser} />
      <UserInfo active={active} onSave={updateUser} />
    </section>
  );
}

