import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEllipsisMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m-3-9c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1m2 1c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m4-1c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1' />
    </g>
    <defs>
      <clipPath id='6682f46e85c9627d91d5541c2e86344d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEllipsisMdFillIcon);
export default ForwardRef;
