import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitMdBoldIcon = (
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
      <path d='M7.031 9.438v6.75H5.188v-6.75h-2.25V7.812H9.28v1.625zm3.5 6.75V7.813H14.5c.375 0 .75.093 1.063.218s.562.313.78.531c.22.25.407.532.532.876a3.8 3.8 0 0 1 0 2.156 2.3 2.3 0 0 1-.531.844 3 3 0 0 1-.782.562 2.8 2.8 0 0 1-1.062.188h-2.125v3zm1.844-4.594h1.906c.281 0 .5-.063.625-.219.188-.125.25-.344.25-.625v-.5c0-.281-.062-.5-.25-.625-.125-.156-.344-.219-.625-.219h-1.906z' />
    </g>
    <defs>
      <clipPath id='b39a514da581b6b74ccd11278d75a309__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitMdBoldIcon);
export default ForwardRef;
