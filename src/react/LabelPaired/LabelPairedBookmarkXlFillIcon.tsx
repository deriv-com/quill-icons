import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkXlFillIcon = (
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
      <path d='M0 8.25A2.25 2.25 0 0 1 2.25 6h13.5C16.969 6 18 7.031 18 8.25v20.625c0 .656-.516 1.125-1.172 1.125-.234 0-.469-.047-.656-.187L9 24.75l-7.219 5.063c-.187.14-.422.187-.656.187C.469 30 0 29.531 0 28.875z' />
    </g>
    <defs>
      <clipPath id='5032b15a0f96336a30780fabdef322f1__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlFillIcon);
export default ForwardRef;
