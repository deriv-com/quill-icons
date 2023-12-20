import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRightSmRegularIcon = (
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
        d='M9.438 15.125H3.311c-.273-.018-.419-.164-.437-.437.018-.274.164-.42.438-.438H8.37l-7.11-7.137c-.182-.2-.182-.4 0-.601.201-.183.402-.183.602 0L9 13.622v-5.06c.018-.273.164-.419.438-.437.273.018.419.164.437.438v6.124c-.018.274-.164.42-.437.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmRegularIcon);
export default ForwardRef;
