import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRestore2pxIcon = (
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
      <path d='M11 0a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1M1 10a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3a2 2 0 0 0-2-2zM12 10a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2zM6 1a1 1 0 0 0-2 0v3H1a1 1 0 0 0 0 2h3a2 2 0 0 0 2-2z' />
    </g>
    <defs>
      <clipPath id='153f86d682859a6e0aa3c297c5ea24d4__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRestore2pxIcon);
export default ForwardRef;
