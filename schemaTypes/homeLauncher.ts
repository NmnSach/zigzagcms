import { defineType } from "sanity";

export default defineType({
    name: 'HomeLauncher',
    type: 'document',
    title: 'Home Launcher',
    fields: [
    {
      name: 'Video Link',
      type: 'string',
      title: 'Video/Showreel Link',
      validation: (Rule) => Rule.required(),
    },]
})