import { defineType } from "sanity";

export default defineType({
    name: 'homeLauncher',
    type: 'document',
    title: 'Home Launcher',
    fields: [
    {
      name: 'video',
      type: 'reference',
      title: 'Video/Showreel',
      to: [{ type: 'video' }],
      validation: (Rule) => Rule.required(),
    },
  ],
});
