import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRadioOnIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#fbdefbdf83011c1f13161474822c2b94__a)'>
      <path fill='#FF444F' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
      <circle cx={8} cy={8} r={4} fill='#fff' />
    </g>
    <defs>
      <clipPath id='fbdefbdf83011c1f13161474822c2b94__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRadioOnIcon);
export default ForwardRef;
