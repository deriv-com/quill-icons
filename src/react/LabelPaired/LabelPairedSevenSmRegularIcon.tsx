import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSevenSmRegularIcon = (
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
        d='M.125 5.063c.018-.274.164-.42.438-.438h7.875c.164 0 .291.073.382.219a.465.465 0 0 1 0 .437l-7 11.375c-.164.219-.364.274-.601.164-.219-.164-.265-.364-.137-.601L7.645 5.5H.563c-.274-.018-.42-.164-.438-.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmRegularIcon);
export default ForwardRef;
