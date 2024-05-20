import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.766 4.242 1.777 3.637 3.91.574a.89.89 0 0 1 .711.602c.11.3.027.656-.219.875l-2.843 2.816.683 3.992a.86.86 0 0 1-.355.848c-.274.219-.63.219-.93.082L8 15.781l-3.527 1.887a.84.84 0 0 1-.903-.082.86.86 0 0 1-.355-.848l.656-3.992L1.027 9.93c-.218-.22-.3-.575-.218-.875a.89.89 0 0 1 .71-.602l3.938-.574 1.75-3.637A.85.85 0 0 1 8 3.75c.328 0 .629.191.766.492' />
    </g>
    <defs>
      <clipPath id='0ec923de1a6dae7a2300a7d1ad8c9f69__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmFillIcon);
export default ForwardRef;
