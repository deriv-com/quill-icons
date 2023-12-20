import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.313 6.156v2.871l4.84-3.39a.779.779 0 0 1 .464-.137c.237 0 .429.082.574.246a.732.732 0 0 1 .246.574v8.86a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.863.863 0 0 1-.465-.137l-4.84-3.39v2.87c-.036.402-.255.62-.656.657-.4-.037-.62-.255-.656-.656V6.157c.036-.402.255-.62.656-.657.401.036.62.255.657.656m0 4.703 4.812 3.391V7.277l-4.812 3.364z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmBoldIcon);
export default ForwardRef;
