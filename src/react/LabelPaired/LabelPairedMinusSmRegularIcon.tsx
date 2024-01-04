import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M12.188 10.75c-.019.273-.165.42-.438.438H1.25c-.273-.019-.42-.165-.438-.438.019-.273.165-.42.438-.438h10.5c.273.019.42.165.438.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusSmRegularIcon);
export default ForwardRef;
