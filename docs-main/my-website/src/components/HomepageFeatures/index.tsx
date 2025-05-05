
import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { DocSearch } from '@docsearch/react';

type FeatureItem = {
  title: string;
  description: React.ReactNode;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Digitální franšíza',
    description: 'Získejte plné obchodní oprávnění a budujte vlastní síť.',
    icon: '🚀',
  },
  {
    title: 'Hunter Program',
    description: 'Staňte se ambasadorem důvěry v oblasti platebních služeb.',
    icon: '🎯',
  },
  {
    title: 'Vzdělávání',
    description: 'Kompletní podpora a přístup k profesionálnímu růstu.',
    icon: '📚',
  },
];

function Feature({ title, description, icon }: FeatureItem) {
  return (
    <div className="col col--4" style={{ padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{icon}</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Heading as="h3" style={{ fontFamily: 'Outfit', fontWeight: 600, marginBottom: '1rem' }}>
          {title}
        </Heading>
        <p style={{ fontFamily: 'Outfit', fontWeight: 300, lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section style={{ 
        backgroundColor: '#0D0D0D', 
        padding: '6rem 0 3rem',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <Heading as="h1" style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            fontFamily: 'Outfit'
          }}>
            Legi.one Dokumentace
          </Heading>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 300,
            marginBottom: '2.5rem',
            fontFamily: 'Outfit',
            maxWidth: '800px',
            margin: '0 auto 2.5rem'
          }}>
            Vše, co potřebujete vědět o digitální franšíze nové generace
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto 3rem', position: 'relative' }}>
            <DocSearch
              appId="XM585PWFQO"
              indexName="docs"
              apiKey="c0a9488c5960d40a37a99475854059c6"
              placeholder="Hledat v dokumentaci..."
              searchParameters={{
                hitsPerPage: 10,
                facetFilters: ['type:content']
              }}
            />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
              style={{ marginRight: '1rem' }}>
              Začít s Legi.one
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guide/intro">
              Průvodce
            </Link>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomepageFeatures;
