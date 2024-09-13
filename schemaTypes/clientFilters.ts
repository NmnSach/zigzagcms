import { defineType } from 'sanity';

export default defineType({
  name: 'clientFilters',
  type: 'document',
  title: 'Client Filters',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Filter Name',
      validation: Rule => Rule.required().error('A name is required.')
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Filter Icon',
      options: {
        hotspot: true // Enables cropping of the image
      }
    },
    {
      name: 'id',
      type: 'string',
      title: 'Filter ID',
      description: 'Unique identifier for the filter',
      validation: Rule => Rule.required().error('An ID is required.')
    }
  ]
});
