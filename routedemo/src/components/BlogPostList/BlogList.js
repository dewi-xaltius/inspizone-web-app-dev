import React from 'react';
import { Container, Title, List, ListItem } from './BlogPostList.styles';
const BlogList = () =>
{
    const posts=[
    {id:1,title:'Intrduction to Next.js'},
    { id: 2, title: 'Getting Started with Static Site Generation' },
    { id: 3, title: 'Understanding Server-Side Rendering' },
  ];
return(
    <Container>
        <title>
            Welcome to my Blog
        </title>
        <List>
            {posts.map(post=>(
                <ListItem key={post.id}>
                    {post.title}
                </ListItem>
            ))}
        </List>
    </Container>
)
};
export default BlogList;