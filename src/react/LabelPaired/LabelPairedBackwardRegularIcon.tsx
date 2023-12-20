import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.188 12 8 16.938V7.063zm6.875-6c.27 0 .49.094.656.281A.836.836 0 0 1 9 6.938v3.218l5.5-3.969A.914.914 0 0 1 15.063 6c.27 0 .49.094.656.281a.836.836 0 0 1 .281.657v10.125c0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281.914.914 0 0 1-.563-.187L9 13.843v3.22c0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281.914.914 0 0 1-.563-.187l-7.187-5.22A.688.688 0 0 1 0 12c0-.25.104-.448.313-.594L7.5 6.187A.914.914 0 0 1 8.063 6M9 12.594l6 4.344V7.063l-6 4.343z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardRegularIcon);
export default ForwardRef;
