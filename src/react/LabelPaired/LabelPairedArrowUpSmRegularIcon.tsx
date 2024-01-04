import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpSmRegularIcon = (
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
        d='m5.8 4.762 4.813 4.812c.183.2.183.401 0 .602-.2.182-.4.182-.601 0L5.937 6.129v10.308c-.018.274-.164.42-.437.438-.273-.018-.42-.164-.438-.438V6.13L.989 10.176c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l4.812-4.812c.2-.183.401-.183.602 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmRegularIcon);
export default ForwardRef;
