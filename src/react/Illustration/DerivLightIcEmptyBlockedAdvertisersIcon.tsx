import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcEmptyBlockedAdvertisersIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      stroke='#D4E9EB'
      strokeWidth={5}
      d='M96 17.5H32a5.5 5.5 0 0 0-5.5 5.5v89a5.5 5.5 0 0 0 5.5 5.5h64a5.5 5.5 0 0 0 5.5-5.5V23a5.5 5.5 0 0 0-5.5-5.5Z'
    />
    <path
      fill='#B4D8DC'
      fillRule='evenodd'
      d='M84 8H73.8c-.927-4.564-4.962-8-9.8-8s-8.873 3.436-9.8 8H44a4 4 0 0 0-4 4v10h48V12a4 4 0 0 0-4-4M64 4a6 6 0 0 1 5.659 4H58.34c.824-2.33 3.048-4 5.66-4'
      clipRule='evenodd'
    />
    <path fill='#2A8F9D' fillOpacity={0.24} d='M40 18h48v4H40z' />
    <path
      fill='#B4D8DC'
      fillRule='evenodd'
      d='M37 38a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm12-2h42v3H49zm24 5H49v3h24zM37 54a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm12-2h42v3H49zm24 5H49v3h24zM37 70a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm12-2h42v3H49zm24 5H49v3h24zM37 86a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm12-2h42v3H49zm24 5H49v3h24z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcEmptyBlockedAdvertisersIcon);
export default ForwardRef;
