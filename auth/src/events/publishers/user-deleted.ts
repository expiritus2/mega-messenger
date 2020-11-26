import { Publisher, Subjects, UserDeletedEvent } from '@mddreamproject/common';

export class UserDeletePublisher extends Publisher<UserDeletedEvent> {
    subject: Subjects.UserDeleted = Subjects.UserDeleted;
}
