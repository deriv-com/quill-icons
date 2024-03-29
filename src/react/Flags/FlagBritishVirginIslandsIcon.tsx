import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagBritishVirginIslandsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#012169'
      d='M0 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#FFDA44'
      fillRule='evenodd'
      d='M18 11.979c-1.453-.445-2.186-1.156-2.565-1.748l-.843.538c.53.83 1.508 1.708 3.27 2.212l.138.039.137-.04c1.763-.503 2.74-1.381 3.27-2.21l-.842-.54c-.379.593-1.112 1.304-2.565 1.749'
      clipRule='evenodd'
    />
    <path
      fill='#FFDA44'
      d='M19.25 5h1v1h-1zM15.75 5h1v1h-1zM19.25 9h1v1h-1zM15.75 9h1v1h-1zM19.25 7h1v1h-1zM15.75 7h1v1h-1z'
    />
    <path fill='#A2001D' d='M18.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0' />
    <path fill='#fff' d='M18 6.5a.75.75 0 0 0 .75-.75V10h-1.5V5.75c0 .414.336.75.75.75' />
    <path
      fill='#6DA544'
      fillRule='evenodd'
      d='M15 4h6v5s0 2-3 3c-3-1-3-3-3-3zm5.25 1h-1v1h1zm-4.5 0h1v1h-1zm4.5 4h-1v1h1zm-4.5 0h1v1h-1zm4.5-2h-1v1h1zm-4.5 0h1v1h-1zm3-1.25a.75.75 0 0 0-1.5 0V10h1.5z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBritishVirginIslandsIcon);
export default ForwardRef;
