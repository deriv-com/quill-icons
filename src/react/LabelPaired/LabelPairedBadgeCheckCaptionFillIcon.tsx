import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.5a2.23 2.23 0 0 1 1.969 1.219 2.23 2.23 0 0 1 2.273.539c.61.61.797 1.5.54 2.273A2.23 2.23 0 0 1 12 9.5c0 .867-.492 1.617-1.219 1.992.258.774.07 1.64-.539 2.25-.61.61-1.5.797-2.273.563A2.21 2.21 0 0 1 6 15.5a2.22 2.22 0 0 1-1.992-1.195 2.25 2.25 0 0 1-2.25-.563 2.25 2.25 0 0 1-.563-2.25A2.22 2.22 0 0 1 0 9.5c0-.844.469-1.594 1.195-1.969a2.29 2.29 0 0 1 .563-2.273 2.19 2.19 0 0 1 2.25-.54A2.24 2.24 0 0 1 6 3.5m2.648 4.898a.55.55 0 0 0 0-.773c-.234-.234-.585-.234-.796 0L5.25 10.227 4.148 9.125c-.234-.234-.585-.234-.796 0a.513.513 0 0 0 0 .773l1.5 1.5c.21.235.562.235.796 0z' />
    </g>
    <defs>
      <clipPath id='dded4ce2486ea69b899ade5f53b1c123__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckCaptionFillIcon);
export default ForwardRef;
