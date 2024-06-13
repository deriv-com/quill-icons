import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 3.75a.9.9 0 0 1 .875.875v.957a5.29 5.29 0 0 1 4.293 4.293h.957a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.957a5.29 5.29 0 0 1-4.293 4.32v.93c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.93a5.29 5.29 0 0 1-4.32-4.32h-.93A.864.864 0 0 1 0 10.75c0-.465.383-.875.875-.875h.93a5.29 5.29 0 0 1 4.32-4.293v-.957c0-.465.383-.875.875-.875m-3.5 7a3.48 3.48 0 0 0 1.75 3.035 3.48 3.48 0 0 0 3.5 0 3.54 3.54 0 0 0 1.75-3.035c0-1.23-.684-2.379-1.75-3.008a3.48 3.48 0 0 0-3.5 0A3.47 3.47 0 0 0 3.5 10.75M7 8.563c.766 0 1.477.437 1.887 1.093.383.684.383 1.531 0 2.188-.41.683-1.121 1.094-1.887 1.094-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188C5.496 9 6.207 8.562 7 8.562' />
    </g>
    <defs>
      <clipPath id='c39320bf8de0818747c200128900bdd1__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSmFillIcon);
export default ForwardRef;
