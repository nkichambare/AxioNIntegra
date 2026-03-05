import { collection, config, fields } from '@keystatic/core';

const localeOptions = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
] as const;

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'AxioNIntegra CMS',
    },
  },
  collections: {
    resources: collection({
      label: 'Resources Cards',
      path: 'content/resources/*',
      slugField: 'entry',
      format: { data: 'json' },
      columns: ['title', 'locale', 'sortOrder', 'published'],
      schema: {
        entry: fields.slug({
          name: {
            label: 'Entry key',
            validation: { isRequired: true },
          },
        }),
        translationKey: fields.text({
          label: 'Translation key',
          description: 'Use the same key across EN/FR/DE variants of the same card.',
          validation: { isRequired: true },
        }),
        locale: fields.select({
          label: 'Locale',
          options: localeOptions,
          defaultValue: 'en',
        }),
        sortOrder: fields.integer({
          label: 'Sort order',
          defaultValue: 1,
          validation: { isRequired: true, min: 1 },
        }),
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        preview: fields.text({
          label: 'Preview',
          multiline: true,
          validation: { isRequired: true },
        }),
        backgroundImagePath: fields.text({
          label: 'Background image path',
          description: 'Public image path (example: /market/power-storage.png).',
          validation: { isRequired: true },
        }),
        postSlug: fields.text({
          label: 'Linked post slug',
          validation: { isRequired: true },
        }),
        ctaLabel: fields.text({
          label: 'CTA label',
          defaultValue: 'Read',
          validation: { isRequired: true },
        }),
        published: fields.checkbox({
          label: 'Published',
          defaultValue: true,
        }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      path: 'content/posts/*',
      slugField: 'entry',
      format: { data: 'json' },
      columns: ['title', 'locale', 'publishDate', 'published'],
      schema: {
        entry: fields.slug({
          name: {
            label: 'Entry key',
            validation: { isRequired: true },
          },
        }),
        translationKey: fields.text({
          label: 'Translation key',
          description: 'Use the same key across EN/FR/DE variants of the same post.',
          validation: { isRequired: true },
        }),
        locale: fields.select({
          label: 'Locale',
          options: localeOptions,
          defaultValue: 'en',
        }),
        routeSlug: fields.text({
          label: 'Route slug',
          description: 'Public route slug (example: design-for-manufacturing-guide).',
          validation: { isRequired: true },
        }),
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          validation: { isRequired: true },
        }),
        coverImagePath: fields.text({
          label: 'Cover image path',
          description: 'Public image path (example: /market/networks-data-centres.png).',
          validation: { isRequired: true },
        }),
        publishDate: fields.date({
          label: 'Publish date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        body: fields.text({
          label: 'Body',
          multiline: true,
          validation: { isRequired: true },
        }),
        published: fields.checkbox({
          label: 'Published',
          defaultValue: true,
        }),
      },
    }),
  },
});
