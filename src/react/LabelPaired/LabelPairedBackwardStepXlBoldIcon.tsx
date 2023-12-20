import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.75 10.125v4.922l8.297-5.813c.219-.156.484-.234.797-.234.406 0 .734.14.984.422.281.25.422.578.422.984v15.188c0 .406-.14.734-.422.984-.25.281-.578.422-.984.422-.281 0-.547-.078-.797-.234L3.75 20.953v4.922c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-15.75c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125m0 8.063L12 24V12.047l-8.25 5.765z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlBoldIcon);
export default ForwardRef;
