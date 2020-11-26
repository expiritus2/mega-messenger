import { Publisher, Subjects, UserCreatedEvent } from '@mddreamproject/common';

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
    subject: Subjects.UserCreated = Subjects.UserCreated;
}