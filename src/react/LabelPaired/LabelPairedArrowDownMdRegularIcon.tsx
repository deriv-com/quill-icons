import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.656 18.844-5.5-5.5q-.312-.345 0-.688.345-.312.688 0L5.5 17.281V5.5q.031-.469.5-.5.47.031.5.5v11.781l4.656-4.625q.345-.312.688 0 .312.345 0 .688l-5.5 5.5q-.345.312-.688 0' />
    </g>
    <defs>
      <clipPath id='7747b2f5668f4e74__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdRegularIcon);
export default ForwardRef;
