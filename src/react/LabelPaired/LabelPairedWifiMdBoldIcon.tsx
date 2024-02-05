import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 9.813q-.563.406-1.062-.063-.406-.563.062-1.062a14.7 14.7 0 0 1 4.438-2.72Q7.188 5 10 5t5.313.969a14.7 14.7 0 0 1 4.437 2.718q.469.5.063 1.063-.5.469-1.063.063a13 13 0 0 0-4-2.438Q12.531 6.5 10 6.5q-2.53 0-4.75.875a13 13 0 0 0-4 2.438M10 12q-3.093.063-5.25 2.031-.531.438-1.062-.031-.406-.563.062-1.062a9 9 0 0 1 2.844-1.782A8.9 8.9 0 0 1 10 10.5q1.813 0 3.406.656a9 9 0 0 1 2.844 1.781q.469.5.063 1.063-.532.47-1.063.031Q13.095 12.062 10 12m1.75 5.25q-.03 1-.875 1.5-.875.5-1.75 0-.843-.5-.875-1.5.031-1 .875-1.5.875-.5 1.75 0 .844.5.875 1.5' />
    </g>
    <defs>
      <clipPath id='8c002e1a14f1805f8ce9cbfcf85fcb24__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiMdBoldIcon);
export default ForwardRef;
