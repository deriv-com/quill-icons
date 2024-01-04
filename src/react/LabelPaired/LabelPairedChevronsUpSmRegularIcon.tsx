import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.3 5.2 5.25 5.25c.183.2.183.4 0 .6-.2.183-.4.183-.6 0L7 6.13 2.05 11.05c-.2.182-.4.182-.6 0-.183-.2-.183-.401 0-.602L6.7 5.2c.2-.182.4-.182.6 0Zm5.25 10.5c.183.2.183.4 0 .6-.2.183-.4.183-.6 0L7 11.38 2.05 16.3c-.2.182-.4.182-.6 0-.183-.2-.183-.401 0-.602l5.25-5.25c.2-.182.4-.182.6 0l5.25 5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmRegularIcon);
export default ForwardRef;
