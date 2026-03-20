import { defineArrayMember, defineField, defineType } from "sanity";

export const newsType = defineType({
  name: "newsPost",
  title: "News Post",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "titleKr",
      title: "Title (KR)",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titleEn",
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "categoryEn",
      title: "Category (EN)",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "categoryKr",
      title: "Category (KR)",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerptEn",
      title: "Excerpt (EN)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerptKr",
      title: "Excerpt (KR)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "bodyEn",
      title: "Body (EN)",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required().min(1)
    }),
    defineField({
      name: "bodyKr",
      title: "Body (KR)",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "titleKr",
      subtitle: "publishedAt"
    }
  },
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }]
    }
  ]
});
