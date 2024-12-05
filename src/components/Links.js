import React from 'react';

function Links() {
  const links = [
    { label: 'Blog', title: 'Big Ant', url: 'https://big-annt.tistory.com/' },
    { label: 'GitHub', title: 'TaeHeumPark', url: 'https://github.com/TaeHeumPark/' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
        marginTop: '20px',
        paddingBottom: '20px'
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '2rem', margin: '20px 0' }}>Links</h2>
      {links.map((link, index) => (
        <p key={index} style={{ margin: '10px 0' }}>
          {link.label}:{' '}
          <a href={link.url} style={{ color: 'blue'}}>
            {link.title}
          </a>
        </p>
      ))}
    </section>
  );
}

export default Links;
