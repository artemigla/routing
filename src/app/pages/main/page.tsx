"use client"
import React, { useEffect, useState } from 'react';
import { ITypesPost } from '@/app/types/Interface';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export default function Main() {
  const [post, setPost] = useState<ITypesPost[]>([]);

  async function getFetch() {
    try {
      const response = await axios.get<ITypesPost[]>(`${BASE_URL}/posts`);
      setPost(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>{post.map(({ id, title, body }) => (
      <ul key={id}>
        <li style={{ fontSize: "21px" }}>{title}</li>
        <li>{body}</li>
      </ul>
    ))}</div>
  )
}
