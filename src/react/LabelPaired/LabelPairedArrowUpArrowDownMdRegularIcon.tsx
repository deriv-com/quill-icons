import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.344 5.156 3 3q.312.345 0 .688-.345.312-.688 0L5.5 6.719V18.5q-.03.47-.5.5-.469-.03-.5-.5V6.719L2.344 8.844q-.345.312-.688 0-.312-.345 0-.688l3-3q.345-.312.688 0m11 10.688-3 3q-.345.312-.688 0l-3-3q-.312-.345 0-.688.345-.312.688 0l2.156 2.125V5.5q.031-.469.5-.5.47.031.5.5v11.781l2.156-2.125q.345-.312.688 0 .312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='6f1c0bc936a6d02f32501ec28511e7ae__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdRegularIcon);
export default ForwardRef;
