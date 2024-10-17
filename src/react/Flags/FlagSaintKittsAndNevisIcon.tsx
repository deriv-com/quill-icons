import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSaintKittsAndNevisIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 17'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#000'
      d='M22.236.014 21 0 .002 13l.005 1.167A2 2 0 0 0 1.975 16H3L24 3v-.012l-.01-1.186A2 2 0 0 0 22.236.014'
    />
    <path fill='#C8102E' d='M24 4 5 16l17.133-.004A2 2 0 0 0 24 14.003z' />
    <path
      fill='#009739'
      fillRule='evenodd'
      d='M0 12 19 0 1.866.004A2 2 0 0 0 0 2z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m15.396 6.954-.532.911-.4-.977-1.03-.223.805-.682-.105-1.05.897.555.966-.425-.25 1.026.702.786M8.435 11.386l-.532.911-.4-.977-1.03-.223.805-.682-.106-1.05.897.555.966-.425-.25 1.025.702.787'
      clipRule='evenodd'
    />
    <path fill='#FFCD00' d='M19 .039h2l-20.998 13-.002-1zM3 16.039l21-13v1l-19 12z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSaintKittsAndNevisIcon);
export default ForwardRef;
