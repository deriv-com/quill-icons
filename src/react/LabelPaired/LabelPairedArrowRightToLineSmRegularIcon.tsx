import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineSmRegularIcon = (
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
        d='M12.625 5.938v9.625c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V5.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438ZM9.863 11.05l-3.5 3.5c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l2.734-2.761H.812c-.273-.019-.419-.165-.437-.438.018-.273.164-.42.438-.438h7.683L5.762 7.551c-.183-.2-.183-.401 0-.602.2-.182.4-.182.601 0l3.5 3.5c.183.2.183.401 0 .602Z'
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
