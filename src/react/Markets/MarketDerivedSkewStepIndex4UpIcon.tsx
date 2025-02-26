import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedSkewStepIndex4UpIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#38fd01edad0cbf0303d234001478e9c1__a)'>
      <path
        fill='#0AA0B0'
        fillRule='evenodd'
        d='M21.463 2H26v3h-2.463l-10 27H0v-3h11.463z'
        clipRule='evenodd'
      />
      <path fill='#FF444F' d='M26 5h3v3h-3zM29 8h3v3h-3z' />
      <path
        fill='#414652'
        d='M0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      />
      <path
        fill='#fff'
        d='M7.298 8V6.928H4.842V5.904l2.176-3.488h1.424V6h.704v.928h-.704V8zM5.802 6h1.496V3.656h-.08z'
      />
    </g>
    <defs>
      <clipPath id='38fd01edad0cbf0303d234001478e9c1__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedSkewStepIndex4UpIcon);
export default ForwardRef;
