import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToLineSmRegularIcon = (
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
        d='M.688 16.875c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h9.625c.273.018.419.164.437.438-.018.273-.164.419-.437.437zM5.8 14.113c-.2.183-.401.183-.602 0l-3.5-3.5c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l2.762 2.734V5.063c.018-.274.164-.42.437-.438.273.018.42.164.438.438v7.683l2.761-2.734c.2-.183.401-.183.602 0 .182.2.182.4 0 .601z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmRegularIcon);
export default ForwardRef;
