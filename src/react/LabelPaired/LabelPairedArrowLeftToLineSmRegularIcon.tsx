import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineSmRegularIcon = (
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
        d='M.375 15.563V5.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438v9.625c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437m2.762-5.114 3.5-3.5c.2-.182.4-.182.601 0 .183.2.183.401 0 .602l-2.734 2.762H12.188c.273.018.419.164.437.437-.018.273-.164.42-.437.438H4.504l2.734 2.761c.183.2.183.401 0 .602-.2.182-.4.182-.601 0l-3.5-3.5c-.183-.2-.183-.401 0-.602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmRegularIcon);
export default ForwardRef;
