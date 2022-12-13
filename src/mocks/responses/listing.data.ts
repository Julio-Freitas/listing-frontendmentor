import { ResponseData } from 'types';

export const listingData: ResponseData = {
  data: [
    {
      id: 1,
      company: 'Photosnap',
      logo: '/images/photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: []
    }
  ]
};

export const listingEmptyData = {
  data: null
};
