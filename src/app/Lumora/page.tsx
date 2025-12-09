import React from 'react'
import LumoraAbout from '@/components/LumoraAbout';
import LumoraGallery from '@/components/LumoraGallery';
import LumoraImageAnimation from '@/components/LumoraImageAnimation';
import LumoraJudges from '@/components/LumoraJudges/index';
import StickyFooterContent from '@/components/StickyFooterContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Egnition - E-Cell Annual Flagship Event',
    description: 'Egnition is the annual flagship event by E-Cell, bringing together entrepreneurs, innovators, and business leaders.',
  };

const page = () => {
  return (
    <>
      <LumoraImageAnimation />
      <LumoraAbout/>
      <LumoraJudges/>
      <LumoraGallery/>
      <StickyFooterContent/>
    </>
  )
}

export default page
