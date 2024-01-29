import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightXlRegularIcon = (
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
      <path d='M15.75 10.5q.704.047.75.75v10.5q-.046.704-.75.75-.703-.046-.75-.75v-8.672L2.766 25.266q-.516.468-1.032 0-.468-.516 0-1.032L13.922 12H5.25q-.703-.047-.75-.75.046-.703.75-.75z' />
    </g>
    <defs>
      <clipPath id='18a391c29d04e7746fe59f64a1834677__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlRegularIcon);
export default ForwardRef;
