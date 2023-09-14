module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/introduction', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: ['core-concepts/how-it-works', 'core-concepts/architecture'],
    },
    {
      type: 'category',
      label: 'Core Concepts V2 (Instead of Components in V1)',
      collapsed: false,
      items: [
        {
              type: 'category',
              label: 'ProofService',
              collapsed: false,
              items: [
                'core-concepts-v2/proof-service-v2/ps-intro',
                'core-concepts-v2/proof-service-v2/as-intro',
                'core-concepts-v2/proof-service-v2/ks-intro',
              ],
        },
        {
          type: 'category',
          label: 'RelationService',
          collapsed: false,
          items: [
            'core-concepts-v2/relation-service-v2/rs-intro',
            'core-concepts-v2/relation-service-v2/rs-graphdb',
            'core-concepts-v2/relation-service-v2/rs-example',
          ],
        },   
        {
          type: 'category',
          label: 'Concept Stage: CoreService',
          collapsed: false,
          items: [
            'core-concepts-v2/core-service-v2/cs-intro'
          ],
        },        
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Components',
    //   collapsed: false,
    //   items: [{
    //     type: 'category',
    //     label: 'ProofService',
    //     collapsed: true,
    //     items: [
    //       'proof-service/ps-intro',
    //       'proof-service/ps-glossary',
    //       'proof-service/ps-flow',
    //       'proof-service/ps-platforms-supported',
    //       'proof-service/ps-faq'
    //     ],
    //   }, {
    //     type: 'category',
    //     label: 'KVService',
    //     collapsed: true,
    //     items: [
    //       'kv-service/kv-intro',
    //       'kv-service/kv-faq',
    //     ]
    //   }, {
    //     type: 'category',
    //     label: 'RelationService',
    //     collapsed: true,
    //     items: [
    //       'relation-service/rs-intro',
    //       'relation-service/rs-system',
    //       'relation-service/rs-graphql',
    //       'relation-service/rs-faq',
    //     ]
    //   }, {
    //     type: 'category',
    //     label: 'AuthService',
    //     collapsed: true,
    //     items: [
    //       'auth-service/as-intro',
    //       'auth-service/as-workflow',
    //     ]
    //   }]
    // },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: ['developer-guide/go', 'developer-guide/rust', 'developer-guide/typescript'],
    },
    {
      type: 'category',
      label: 'Rest API',
      items: ['rest-api/proofservice-api', 'rest-api/kvservice-api'],
    },
    'roadmap',
  ],
};
