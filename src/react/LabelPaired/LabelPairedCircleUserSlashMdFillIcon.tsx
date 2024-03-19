import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.156 4.313c.25-.344.719-.407 1.032-.125l3 2.312A7.4 7.4 0 0 1 6 5.094c2.469-1.438 5.5-1.438 8 0A7.97 7.97 0 0 1 18 12a8.1 8.1 0 0 1-1.281 4.344l2.968 2.343c.344.25.407.72.125 1.032-.25.343-.718.406-1.03.125l-18.5-14.5c-.344-.25-.407-.719-.126-1.032M2 12c0-1.031.188-2.031.563-2.969l6.312 5a3.98 3.98 0 0 0-3.375 2A6.07 6.07 0 0 0 9.969 18a5.9 5.9 0 0 0 2.969-.781l1.687 1.312c-.219.157-.437.282-.656.407-2.469 1.437-5.5 1.437-8 0A7.99 7.99 0 0 1 2 12m5.906-2.562 3.407 2.656c.25-.188.468-.438.624-.719.407-.687.407-1.531 0-2.25A2.3 2.3 0 0 0 9.97 8c-.781 0-1.531.438-1.938 1.125a1 1 0 0 0-.125.313' />
    </g>
    <defs>
      <clipPath id='8292ec21f510c8bc41861ad18627ef50__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashMdFillIcon);
export default ForwardRef;
