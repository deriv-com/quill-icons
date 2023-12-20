import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineSmRegularIcon = (
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
        d='M.688 4.625h9.625c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.688c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438M5.8 7.387l3.5 3.5c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L5.938 8.754V16.438c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437V8.754L2.3 11.488c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l3.5-3.5c.2-.183.401-.183.602 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmRegularIcon);
export default ForwardRef;
