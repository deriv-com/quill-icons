import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpMdBoldIcon = (
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
      <path d='M19.313 4.344a.74.74 0 0 1 .343 1l-3 6a.74.74 0 0 1-.687.406h-4.531l-3.782 7.594a.74.74 0 0 1-1 .343l-6-3a.74.74 0 0 1-.343-1 .74.74 0 0 1 1-.343L6.656 18l3.657-7.312A.77.77 0 0 1 11 10.25h4.531l2.781-5.562a.74.74 0 0 1 1-.344' />
    </g>
    <defs>
      <clipPath id='dd772726c43e995b730a7b9ab68f90a9__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpMdBoldIcon);
export default ForwardRef;
