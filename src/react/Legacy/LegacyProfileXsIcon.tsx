import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyProfileXsIcon = (
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
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m1.5 10h-3A1.5 1.5 0 0 0 5 11.5v2.826c.91.432 1.927.674 3 .674a7 7 0 0 0 3-.674V11.5A1.5 1.5 0 0 0 9.5 10M8 1a7 7 0 0 0-4 12.745V11.5A2.5 2.5 0 0 1 6.5 9h3a2.5 2.5 0 0 1 2.5 2.5l.001 2.244A7 7 0 0 0 8 1m0 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4' />
    </g>
    <defs>
      <clipPath id='eae32bb37def6b6738f73f41864cbbcf__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyProfileXsIcon);
export default ForwardRef;
