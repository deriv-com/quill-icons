import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightSmRegularIcon = (
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
        d='m12.488 11.05-4.812 4.813c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l4.047-4.075H.812c-.273-.018-.419-.164-.437-.437.018-.273.164-.42.438-.438H11.12L7.074 6.239c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l4.812 4.812c.183.2.183.401 0 .602Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmRegularIcon);
export default ForwardRef;
