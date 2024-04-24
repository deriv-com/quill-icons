import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyBookmark2pxIcon = (
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
    <g clipPath='url(#531dba1fad357776ee4027fa5851384e__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M2 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1.625.78L8 12.28l-4.375 3.5A1 1 0 0 1 2 15zm3-1a1 1 0 0 0-1 1v9.92l3.375-2.7a1 1 0 0 1 1.25 0L12 12.92V3a1 1 0 0 0-1-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='531dba1fad357776ee4027fa5851384e__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyBookmark2pxIcon);
export default ForwardRef;
