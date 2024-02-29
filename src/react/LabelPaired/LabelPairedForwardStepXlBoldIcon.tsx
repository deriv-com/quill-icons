import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 10.125q.095-1.03 1.125-1.125 1.032.095 1.125 1.125v15.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-4.922l-8.297 5.813Q2.58 27 2.156 27q-.609 0-.984-.422-.422-.375-.422-.984V10.406q0-.609.422-.984Q1.547 9 2.156 9q.469 0 .797.234l8.297 5.813zm0 8.063v-.375L3 12.047V24z' />
    </g>
    <defs>
      <clipPath id='7f9f61e10ed2454a1411747d36be63c1__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlBoldIcon);
export default ForwardRef;
