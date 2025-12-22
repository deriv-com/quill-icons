import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightWalletIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#C7E5E5'
      d='M28 9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h22a2 2 0 0 1 2 2z'
    />
    <path fill='#2A2A2A' d='M4.5 4H26a1 1 0 0 1 1 1v4H4.5a2.5 2.5 0 0 1 0-5' />
    <path fill='#BCCDCE' d='M23 15h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a4 4 0 0 1 0-8' />
    <path fill='#2A2A2A' d='M24 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4' />
  </svg>
);
const ForwardRef = forwardRef(DerivLightWalletIcon);
export default ForwardRef;
