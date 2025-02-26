import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySearch2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fillRule='evenodd'
        d='M10.335 11.749a6.5 6.5 0 1 1 1.414-1.414l3.958 3.958a1 1 0 0 1-1.414 1.414zM11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='dd2c10fb0a43135f59399b471d3c700f__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySearch2pxIcon);
export default ForwardRef;
