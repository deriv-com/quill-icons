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
      <path d='m9.516 7.734 8.25 8.25c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L9.75 10.078V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V10.078l-6.984 6.985c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l8.25-8.25c.28-.28.796-.28 1.078 0' />
    </g>
    <defs>
      <clipPath id='ddba4b19834879feb0ba4a25ed2123cd__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlRegularIcon);
export default ForwardRef;
