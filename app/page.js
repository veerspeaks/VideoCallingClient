'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const VideoCall = dynamic(() => import('./components/VideoCall'), { ssr: false });

const Home = () => {
  return <VideoCall />;
};

export default Home;