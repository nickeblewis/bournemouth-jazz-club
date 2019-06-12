export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d00c001d1a2a54376988885',
                  title: 'Sanity Studio',
                  name: 'bournemouth-jazz-club-studio',
                  apiId: 'b7c4e82c-e513-40c6-ad70-a0dc69384ad3'
                },
                {
                  buildHookId: '5d00c001e7ecba9a696e2d10',
                  title: 'Blog Website',
                  name: 'bournemouth-jazz-club',
                  apiId: '0d3b82af-74a5-45bf-8b68-7de9b1dd54da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/bournemouth-jazz-club',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bournemouth-jazz-club.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
