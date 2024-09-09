import React from 'react'
import {Container,ListItem,Title,List } from './BlogPostList.style'

const BlogPostList = ()=>
{
const posts=[
    {id:1,title:'Introduction to Next.js'},
    {id:2,title:'React Learning'},
    {id:3,title:'Web design'},
]
  return (
    <Container>
        <Title>Welcome to my Blog</Title>
        <List>
            {
                posts.map(post=>(
                    <ListItem key={post.id}>{post.title}</ListItem>
                ))
            }
        </List>
    </Container>
  )
}

export default BlogPostList