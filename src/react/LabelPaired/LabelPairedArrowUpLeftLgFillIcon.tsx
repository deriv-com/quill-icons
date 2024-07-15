import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.25h8.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H5.508l7.851 7.89c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0L3.75 13.547v5.703c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='368a71f21d3a727a25c1d4c802ad812f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftLgFillIcon);
export default ForwardRef;
