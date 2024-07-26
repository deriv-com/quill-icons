import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11 8v7c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-4.562l-6.312 6.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405L7.563 9H3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h7c.531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='2e376ac5bebc84cf23bba8fb75a82000__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdFillIcon);
export default ForwardRef;
