import { Model } from 'objection';

export default class Message extends Model {
  static get tableName() {
    return 'messages';
  }

  static jsonSchema() {
    return {
      type: 'object',
      required: ['data', 'author', 'channelId'],
      properties: {
        id: { type: 'integer' },
        author: { type: 'string', minLength: 1, maxLength: 100 },
        data: { type: 'string', minLength: 1, maxLength: 1000 },
        channelId: { type: 'integer' },
      },
    };
  }
}