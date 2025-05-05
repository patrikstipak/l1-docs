
const algoliasearch = require('algoliasearch');

const client = algoliasearch('XM585PWFQO', '66d229dea0f216d82772acd8e10d886a');
const index = client.initIndex('docs');

// Function to get all content from docs
const getAllDocs = () => {
  // This would need to be implemented to gather your documentation content
  // For now returning a sample record
  return [
    {
      objectID: 'intro',
      title: 'Začíná to u tebe',
      content: 'Když technologie zrychlují, opravdové vztahy získávají na hodnotě',
      url: '/docs/intro'
    }
  ];
};

const indexDocs = async () => {
  const records = getAllDocs();
  
  try {
    await index.saveObjects(records);
    console.log('Documentation successfully indexed!');
  } catch (error) {
    console.error('Error indexing documentation:', error);
  }
};

indexDocs();
