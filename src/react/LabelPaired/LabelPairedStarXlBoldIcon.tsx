import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 6q.704.047 1.031.656l3.188 6.61 7.172 1.03q.702.142.937.798.187.655-.281 1.125l-5.203 5.156 1.218 7.313q.095.656-.468 1.125-.563.375-1.172.046L13.5 26.437 7.078 29.86q-.61.33-1.172-.093t-.468-1.078l1.218-7.313-5.203-5.156q-.468-.47-.281-1.125.234-.656.937-.797l7.172-1.031 3.188-6.61q.328-.61 1.031-.656m0 3.703-2.484 5.063q-.235.515-.844.656l-5.531.797 4.03 3.984q.375.422.329.985l-.984 5.625 4.968-2.625a1.02 1.02 0 0 1 1.032 0l4.922 2.625L18 21.188q-.093-.563.328-.985l4.031-3.984-5.53-.797q-.61-.141-.845-.656z' />
    </g>
    <defs>
      <clipPath id='07422a58da49a1069f357e082da4f473__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlBoldIcon);
export default ForwardRef;
