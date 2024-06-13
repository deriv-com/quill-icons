import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyErrorIcon = (
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
    <g clipPath='url(#3c9bfb7ea41ddb3ffe7ea49cbb171bd9__a)'>
      <path
        fill='#EC3F3F'
        d='M7.031.6a1.082 1.082 0 0 1 1.937 0l3.366 6.73 3.55 7.102c.36.72-.164 1.568-.969 1.568H1.085a1.083 1.083 0 0 1-.969-1.568l3.55-7.102zM8 11c.375 0 .687-.29.712-.665l.28-4.095C9.066 5.582 8.602 5 8 5s-1.066.582-.992 1.24l.28 4.095A.714.714 0 0 0 8 11m1 2.011v-.022c0-.56-.424-.989-1-.989-.575 0-1 .43-1 .989v.022c0 .558.425.989 1 .989.576 0 1-.432 1-.989'
      />
    </g>
    <defs>
      <clipPath id='3c9bfb7ea41ddb3ffe7ea49cbb171bd9__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyErrorIcon);
export default ForwardRef;
