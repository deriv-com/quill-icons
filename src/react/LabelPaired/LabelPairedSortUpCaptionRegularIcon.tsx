import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpCaptionRegularIcon = (
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
        d='M3.86 5.047 1.046 7.719A.159.159 0 0 0 1 7.836c.016.094.07.148.164.164h5.672A.183.183 0 0 0 7 7.836a.159.159 0 0 0-.047-.117L4.141 5.047A.252.252 0 0 0 4 5a.252.252 0 0 0-.14.047m-.516-.54A.94.94 0 0 1 4 4.25a.94.94 0 0 1 .656.258L7.47 7.156a.926.926 0 0 1 .281.68.889.889 0 0 1-.258.656.889.889 0 0 1-.656.258H1.164a.889.889 0 0 1-.656-.258.889.889 0 0 1-.258-.656c0-.266.094-.492.281-.68z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionRegularIcon);
export default ForwardRef;
