import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.625 5.938v9.625c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437V5.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438M9.863 11.05l-3.5 3.5c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l2.734-2.761H.813c-.274-.019-.42-.165-.438-.438.018-.273.164-.42.438-.437h7.683L5.762 7.55c-.183-.2-.183-.401 0-.602.2-.182.4-.182.601 0l3.5 3.5c.183.2.183.401 0 .602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmRegularIcon);
export default ForwardRef;
