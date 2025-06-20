import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAssessmentIcon = (
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
        d='M0 1a1 1 0 0 1 1-1h7.707L13 4.293l2.146-2.147a.5.5 0 0 1 .708.708l-8 8a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 9.793l4.5-4.5V5H9a1 1 0 0 1-1-1V1H1v14h11V8l1-1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 .707L11.293 4H9z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='6fd94b3be8e0b4ba149de5e6aff25d4c__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyAssessmentIcon);
export default ForwardRef;
