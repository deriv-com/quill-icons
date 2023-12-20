import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 8.625v5.313l6.992-5.704A.985.985 0 0 1 10.406 8c.313 0 .573.104.781.313.209.208.313.468.313.78v12.813c0 .313-.104.573-.312.782a1.06 1.06 0 0 1-.782.312.985.985 0 0 1-.664-.234L2.75 17.063v5.312c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625m7.5.82L2.79 15.5l7.46 6.055z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgRegularIcon);
export default ForwardRef;
