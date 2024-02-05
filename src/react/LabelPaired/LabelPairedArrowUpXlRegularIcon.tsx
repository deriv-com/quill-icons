import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.516 7.734 8.25 8.25q.468.516 0 1.032-.516.468-1.032 0L9.75 10.078V27.75q-.047.704-.75.75-.703-.046-.75-.75V10.078l-6.984 6.938q-.516.468-1.032 0-.468-.516 0-1.032l8.25-8.25q.516-.468 1.032 0' />
    </g>
    <defs>
      <clipPath id='7a7b7db3825c3f2cc50e98db8ca58697__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlRegularIcon);
export default ForwardRef;
