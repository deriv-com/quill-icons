import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.438 6.375c.273.018.419.164.437.438v6.125c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-5.06l-7.137 7.11c-.2.183-.4.183-.601 0-.183-.2-.183-.4 0-.601l7.11-7.137h-5.06c-.273-.018-.419-.164-.437-.437.018-.274.164-.42.438-.438z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmRegularIcon);
export default ForwardRef;
