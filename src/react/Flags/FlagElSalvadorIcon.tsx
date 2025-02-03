import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagElSalvadorIcon = (
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
    <path fill='#0047AB' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#fff' d='M24 5H0v6h24z' />
    <path fill='#0047AB' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='url(#5d790ab3163aa437b66ce0bb7e8a1647__a)'
      fillRule='evenodd'
      d='M10.4 5.867a2.667 2.667 0 1 0 3.2 0l-.933 2.8h-1.334z'
      clipRule='evenodd'
    />
    <path fill='#F9C92E' fillRule='evenodd' d='m12 5.333.667 3.334h-1.334z' clipRule='evenodd' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='5d790ab3163aa437b66ce0bb7e8a1647__a'
        x1={0}
        x2={0}
        y1={0}
        y2={16}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3C7839' />
        <stop offset={1} stopColor='#31642E' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagElSalvadorIcon);
export default ForwardRef;
