import { defineType } from 'sanity';

export default defineType({
  name: 'industry',
  type: 'document',
  title: 'Industry',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Industry Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Industry Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos by Industry',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      readOnly: true,
      description: 'Videos associated with this industry.',
      options: {
        filter: '_type == "video" && industry._ref == $id',
        filterParams: { id: '_id' },
      },
    },
  ],
});
