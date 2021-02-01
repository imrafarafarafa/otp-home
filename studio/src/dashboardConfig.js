export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60183b4fc73bcd1c4937fa72',
                  title: 'Sanity Studio',
                  name: 'otp-home-studio',
                  apiId: 'b30cd86f-9a1d-4d82-b907-4827c427abde'
                },
                {
                  buildHookId: '60183b4fca92ad181595f45a',
                  title: 'Blog Website',
                  name: 'otp-home',
                  apiId: 'ab73b54e-1e97-42e8-958a-d41142231d34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/imrafarafarafa/otp-home',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://otp-home.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
