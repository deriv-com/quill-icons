import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedSkewStepIndex4DownIcon = (
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
    <path
      fill='#0AA0B0'
      fillRule='evenodd'
      d='M21.463 32H26v-3h-2.463l-10-27H0v3h11.463z'
      clipRule='evenodd'
    />
    <path fill='#FF444F' d='M26 29h3v-3h-3zM29 26h3v-3h-3z' />
    <path
      fill='#414652'
      d='M0 24a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M7.298 30v-1.072H4.842v-1.024l2.176-3.488h1.424V28h.704v.928h-.704V30zm-1.496-2h1.496v-2.344h-.08z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedSkewStepIndex4DownIcon);
export default ForwardRef;
