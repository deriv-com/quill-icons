import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyVerificationPendingStatusIcon = (
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
      <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
      <path
        fillRule='evenodd'
        d='M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M8 5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8V5.75A.75.75 0 0 1 8 5'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='84d2554243d79afb2ec7d2af5e974397__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyVerificationPendingStatusIcon);
export default ForwardRef;
