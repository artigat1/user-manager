import * as faker from 'faker';

import {User} from '../models/user.model';

const count = 10;
const data = [];

for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    username: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  });
}

export default data as User[];
