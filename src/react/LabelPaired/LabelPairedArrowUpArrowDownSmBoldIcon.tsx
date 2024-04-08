import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.59 14.059-2.625 2.625c-.274.273-.684.273-.93 0L8.41 14.059a.6.6 0 0 1 0-.903c.246-.273.656-.273.93 0l1.504 1.504V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.38l1.504-1.505c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903M4.965 4.816l2.598 2.625c.273.274.273.684 0 .93-.247.274-.657.274-.93 0L5.129 6.867v9.352a.63.63 0 0 1-.656.656.65.65 0 0 1-.657-.656V6.867L2.313 8.371a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l2.625-2.625c.246-.246.656-.246.93 0' />
    </g>
    <defs>
      <clipPath id='c45639a2876c1d0596e99d9c9126f479__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmBoldIcon);
export default ForwardRef;
