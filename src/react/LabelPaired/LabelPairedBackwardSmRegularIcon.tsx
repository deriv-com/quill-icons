import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.04 10.75 7 15.07V6.43zM7.054 5.5c.237 0 .428.082.574.246a.732.732 0 0 1 .246.574v2.817l4.813-3.473a.8.8 0 0 1 .492-.164c.237 0 .428.082.574.246A.731.731 0 0 1 14 6.32v8.86a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.8.8 0 0 1-.492-.164l-4.813-3.473v2.817a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.8.8 0 0 1-.492-.164L.272 11.27A.602.602 0 0 1 0 10.75c0-.219.091-.392.273-.52l6.29-4.566a.8.8 0 0 1 .492-.164m.82 5.77 5.25 3.8V6.43l-5.25 3.8z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmRegularIcon);
export default ForwardRef;
