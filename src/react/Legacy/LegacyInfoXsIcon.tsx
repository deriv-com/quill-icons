import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyInfoXsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 8 8'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#76699c36e4d2779056837150afa2b0f8__a)'>
      <path
        fill='#333'
        d='M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 2.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5M4 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1'
      />
    </g>
    <defs>
      <clipPath id='76699c36e4d2779056837150afa2b0f8__a'>
        <path fill='#fff' d='M0 0h8v8H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyInfoXsIcon);
export default ForwardRef;
