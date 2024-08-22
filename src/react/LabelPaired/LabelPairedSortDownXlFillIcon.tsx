import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownXlFillIcon = (
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
      <path d='M8.531 28.078c-.562.61-1.547.61-2.11 0l-6-6a1.52 1.52 0 0 1-.327-1.64A1.54 1.54 0 0 1 1.5 19.5h12c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64z' />
    </g>
    <defs>
      <clipPath id='26241dab7109482258bd92a27e9f6fc9__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownXlFillIcon);
export default ForwardRef;
