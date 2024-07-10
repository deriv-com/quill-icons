import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftXlRegularIcon = (
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
      <path d='M2.25 25.5a.74.74 0 0 1-.75-.75v-10.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v8.719l12.188-12.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L4.03 24h8.719c.375 0 .75.375.75.75 0 .422-.375.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='a9ef4fdc6ebfe303f6ad4fe7b0bb5931__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlRegularIcon);
export default ForwardRef;
