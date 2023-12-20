import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.86 13.953A.252.252 0 0 0 4 14a.252.252 0 0 0 .14-.047l2.813-2.672A.159.159 0 0 0 7 11.164.183.183 0 0 0 6.836 11H1.164a.183.183 0 0 0-.164.164c0 .047.016.086.047.117zm-.516.54L.53 11.842a.926.926 0 0 1-.281-.679c0-.266.086-.484.258-.656a.889.889 0 0 1 .656-.258h5.672c.266 0 .484.086.656.258.172.172.258.39.258.656a.926.926 0 0 1-.281.68l-2.813 2.648A.94.94 0 0 1 4 14.75a.94.94 0 0 1-.656-.258'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionRegularIcon);
export default ForwardRef;
