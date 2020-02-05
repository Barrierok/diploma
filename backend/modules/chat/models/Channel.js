import BaseModel from '../../../lib/BaseModel';

export default class Channel extends BaseModel {
  static get tableName() {
    return 'channels';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['removable', 'name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        removable: { type: 'boolean' },
      },
    };
  }
}
