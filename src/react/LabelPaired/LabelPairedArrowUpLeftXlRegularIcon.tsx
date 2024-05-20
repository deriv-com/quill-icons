import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftXlRegularIcon = (
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
      <path d='M2.25 10.5h10.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H4.031l12.235 12.234c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L3 13.079v8.672c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-10.5c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='eb87f9dffb2cc1dd3a623f548bea1102__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlRegularIcon);
export default ForwardRef;
