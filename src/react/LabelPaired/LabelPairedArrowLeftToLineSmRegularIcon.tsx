import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.375 15.563V5.937c.018-.273.164-.419.438-.437.273.018.419.164.437.438v9.625c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438Zm2.762-5.114 3.5-3.5c.2-.182.4-.182.601 0 .183.2.183.401 0 .602l-2.734 2.761H12.188c.273.019.419.165.437.438-.018.273-.164.42-.438.438H4.505l2.734 2.761c.183.2.183.401 0 .602-.2.182-.4.182-.601 0l-3.5-3.5c-.183-.2-.183-.401 0-.602Z'
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
