import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftMdBoldIcon = (
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
      <path d='M1.75 17q-.687-.063-.75-.75v-7.5q.063-.687.75-.75.687.063.75.75v5.688l7.219-7.22q.531-.435 1.062 0 .438.533 0 1.063L3.562 15.5H9.25q.687.063.75.75-.063.687-.75.75z' />
    </g>
    <defs>
      <clipPath id='ff4a7a76139e8e52__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftMdBoldIcon);
export default ForwardRef;
