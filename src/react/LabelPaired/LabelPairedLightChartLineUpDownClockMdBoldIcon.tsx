import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockMdBoldIcon = (
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
      <path d='M0 5.75A.74.74 0 0 1 .75 5a.76.76 0 0 1 .75.75v11c0 .438.313.75.75.75h8.125c.188.563.5 1.063.875 1.5h-9C1 19 0 18 0 16.75zm3.469 5.75 2.5-2.5c.281-.312.75-.312 1.062 0L9 10.969A357 357 0 0 1 12.438 7.5h-.688a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5c.188 0 .375.094.531.219.125.156.219.343.219.531v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-.687L9.531 12.53c-.312.313-.781.313-1.062 0L6.5 10.562l-1.969 1.97c-.312.312-.781.312-1.062 0a.684.684 0 0 1 0-1.032m7.531 4c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m4-2v2c0 .281.219.5.5.5H17c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-1v-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='3a44316fdc9d7acda343f89eb1894c67__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockMdBoldIcon);
export default ForwardRef;
