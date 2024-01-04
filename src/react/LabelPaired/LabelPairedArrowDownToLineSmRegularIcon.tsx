import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.688 16.875c-.274-.018-.42-.164-.438-.438.018-.273.164-.419.438-.437h9.624c.274.018.42.164.438.438-.018.273-.164.419-.438.437H.688ZM5.8 14.113c-.2.183-.401.183-.602 0l-3.5-3.5c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l2.761 2.734V5.062c.019-.273.165-.419.438-.437.273.018.42.164.438.438v7.683l2.761-2.734c.2-.183.401-.183.602 0 .182.2.182.4 0 .601l-3.5 3.5Z'
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
