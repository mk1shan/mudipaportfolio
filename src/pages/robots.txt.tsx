import { GetServerSideProps } from 'next';

function generateRobotsTxt() {
  return `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://mudipakishan.com/sitemap.xml

# Disallow admin and api routes
Disallow: /api/*
Disallow: /admin/*
`;
}

function RobotsTxt() {
  // getServerSideProps will handle the generation
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = generateRobotsTxt();

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt; 
