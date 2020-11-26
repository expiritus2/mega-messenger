import { Publisher, Subjects, UserUpdatedEvent } from '@mddreamproject/common';

export class UserUpdatedPublisher extends Publisher<UserUpdatedEvent> {
    subject: Subjects.UserUpdated = Subjects.UserUpdated;
}
