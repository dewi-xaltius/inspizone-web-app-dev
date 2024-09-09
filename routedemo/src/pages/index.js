import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogPostList/BlogList'
export default function Home() {
  return (
        <Layout>
          <BlogList/>
        </Layout>
  );
}
