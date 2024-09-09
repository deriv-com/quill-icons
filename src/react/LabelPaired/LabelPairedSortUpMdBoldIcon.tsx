import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 6.719 2.188 9.5H7.78zm-.719-1.407a.964.964 0 0 1 1.407 0l4 4c.28.282.374.72.218 1.094a.98.98 0 0 1-.906.625H1c-.406 0-.781-.25-.937-.625A1.01 1.01 0 0 1 .28 9.312z' />
    </g>
    <defs>
      <clipPath id='79be2fca7e6f4219ef53683d4b99e130__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdBoldIcon);
export default ForwardRef;
