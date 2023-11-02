import { z } from 'zod';
import { ConversationCreateOneInput } from '../../../proto/interfaces';

const createOneSchema = z.object({
  participantIds: z.array(z.string()).min(1),
});

export class ConversationValidation {
  createOne(input: ConversationCreateOneInput): void {
    createOneSchema.parse(input);
  }
}
