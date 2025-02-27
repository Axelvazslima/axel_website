import React, { useState, useEffect } from 'react';
import SectionComponent from './components/SectionComponent';
import { H2Component, PComponent } from './components/TextComponents';
import { useParams } from 'react-router-dom';

interface PostData {
    id: string;
    title: string;
    content: string;
    date: string;
    // Add other post fields as needed
}

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/data/posts/${id}.json`);
                if (!response.ok) throw new Error('Post not found');
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <SectionComponent className="flex justify-center items-center text-center gap-2 md:h-screen min:h-screen w-screen">
            <H2Component>{post.title}</H2Component>
            <PComponent><i>{post.date}</i></PComponent>
            <div className='justify-start text-start'>
                <PComponent>{post.content}</PComponent>
            </div>
        </SectionComponent>
    );
};

export default Post;