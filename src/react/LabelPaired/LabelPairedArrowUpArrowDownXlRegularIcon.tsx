import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.016 7.734 4.5 4.5q.468.516 0 1.032-.516.468-1.032 0L8.25 10.078V27.75q-.047.704-.75.75-.703-.046-.75-.75V10.078l-3.234 3.188q-.516.468-1.032 0-.468-.516 0-1.032l4.5-4.5q.516-.468 1.032 0m16.5 16.032-4.5 4.5q-.516.468-1.032 0l-4.5-4.5q-.468-.516 0-1.032.516-.468 1.032 0l3.234 3.188V8.25q.046-.703.75-.75.704.046.75.75v17.672l3.234-3.188q.516-.468 1.032 0 .468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='f192902d73a4cc7d4352c86b885e8cf6__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlRegularIcon);
export default ForwardRef;
