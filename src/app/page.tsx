"use client"
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BASE_URL } from './api/api';
import './global.scss';
import { ITypesPost } from './types/Interface';

export default function Home() {
  const [post, setPost] = useState<ITypesPost[]>([]);

  async function getFetch() {
    try {
      const response: AxiosResponse<ITypesPost[]> = await axios.get(`${BASE_URL}/posts`);
      setPost(response?.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();
  }, [post])

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      {post.map(({ id, title }) => (
        <Link key={id} href={{ pathname: `/pages/${id}` }}>
          <ul style={{ display: "flex", justifyContent: "left", listStyleType: "none" }}>
            <li style={{ fontSize: "17px", fontWeight: "bold", cursor: "pointer" }} >{id + ". " + title}
            </li>
          </ul>
        </Link>
      ))}
    </div>
  )
}
