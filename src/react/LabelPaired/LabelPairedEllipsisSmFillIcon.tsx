import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.594 10.75c0-.547.273-1.04.765-1.312a1.531 1.531 0 0 1 1.532 2.652 1.53 1.53 0 0 1-1.532 0c-.492-.274-.765-.766-.765-1.34m4.375 0c0-.547.273-1.04.765-1.312a1.531 1.531 0 0 1 1.532 2.652 1.53 1.53 0 0 1-1.532 0c-.492-.274-.765-.766-.765-1.34m5.906-1.531a1.532 1.532 0 0 1 1.313 2.297 1.47 1.47 0 0 1-1.313.765c-.574 0-1.066-.273-1.34-.765a1.531 1.531 0 0 1 1.34-2.297' />
    </g>
    <defs>
      <clipPath id='da9e951689e3ded9b417024e5951a502__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmFillIcon);
export default ForwardRef;
