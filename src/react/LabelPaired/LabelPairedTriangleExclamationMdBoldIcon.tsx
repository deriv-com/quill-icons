import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationMdBoldIcon = (
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
      <path d='M7.75 6.656 1.563 16.813c-.063.093-.063.156-.063.25 0 .25.188.437.438.437H14.03c.25 0 .469-.187.469-.437 0-.094-.031-.157-.094-.25L8.22 6.656A.235.235 0 0 0 8 6.5c-.125 0-.187.063-.25.156m-1.281-.781A1.8 1.8 0 0 1 8 5c.594 0 1.188.344 1.5.875l6.188 10.156c.187.313.312.657.312 1.032C16 18.125 15.125 19 14.031 19H1.938A1.947 1.947 0 0 1 0 17.063q0-.563.281-1.032zM9 15.5c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1m-.25-5.75v3a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3A.74.74 0 0 1 8 9a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='7abf99f95c47d1ba0da716ea7c44353c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdBoldIcon);
export default ForwardRef;
