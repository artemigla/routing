"use client"
import { BASE_URL } from '@/app/api/api';
import { IErrorType, ITypesPost } from '@/app/types/Interface';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Descriptions() {
  const { id } = useParams();
  const [post, setPost] = useState<ITypesPost | null>(null);
  const [error, setError] = useState<IErrorType | null>(null);

  useEffect(() => {
    async function getFetch() {
      try {
        const response: AxiosResponse<ITypesPost> = await axios(`${BASE_URL}/posts/${id}`);
        setPost(response?.data);
        setError(null);
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any | unknown) {
        setError(error?.message)
      }
    };
    getFetch();
  }, [id]);

  if (error) {
    return (
      <div style={{ display: "flex", margin: "auto", flexDirection: "column", gap: "12px", width: "50%", position: "relative" }}>
        <h3 style={{ fontSize: "25px", margin: "auto" }}>{"Error " + error?.message}</h3>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", margin: "auto", flexDirection: "column", gap: "12px", width: "50%", position: "relative" }}>
      <h3 style={{ fontSize: "25px" }}>{`${post?.id}` + ". " + post?.title}</h3>
      <p style={{ fontSize: "21px" }}>{post?.body}</p>
    </div>
  )
}
