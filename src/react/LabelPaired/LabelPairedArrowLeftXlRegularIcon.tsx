import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.188 17.484 8.25-8.25c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L2.53 17.25H20.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H2.531l6.985 6.984c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0l-8.25-8.25c-.282-.28-.282-.796 0-1.078' />
    </g>
    <defs>
      <clipPath id='e8b1e31f5d8871504ea37c3ff934f5db__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlRegularIcon);
export default ForwardRef;
