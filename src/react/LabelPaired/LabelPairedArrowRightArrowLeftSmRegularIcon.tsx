import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightArrowLeftSmRegularIcon = (
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
        d='m12.488 7.55-2.625 2.626c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l1.86-1.886H.811C.54 7.668.394 7.522.376 7.25c.018-.273.164-.42.438-.438H11.12l-1.86-1.886c-.182-.2-.182-.401 0-.602.201-.182.402-.182.602 0l2.625 2.625c.183.2.183.401 0 .602Zm-9.351 9.626L.512 14.55c-.183-.2-.183-.401 0-.602l2.625-2.625c.2-.182.4-.182.601 0 .183.2.183.401 0 .602l-1.86 1.886h10.31c.273.019.419.165.437.438-.018.273-.164.42-.438.438H1.88l1.86 1.886c.182.2.182.401 0 .602-.201.182-.402.182-.602 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmRegularIcon);
export default ForwardRef;
