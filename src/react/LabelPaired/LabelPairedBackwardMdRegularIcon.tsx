import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.156 12 8 16.969V7.062zm6.907-6c.5 0 .937.438.937.938v3.25l5.5-4A.87.87 0 0 1 15.063 6c.5 0 .937.438.937.938v10.125a.94.94 0 0 1-.937.937 1.1 1.1 0 0 1-.563-.156l-5.5-4v3.219a.94.94 0 0 1-.937.937 1.1 1.1 0 0 1-.563-.156L.281 12.625A.79.79 0 0 1 0 12a.77.77 0 0 1 .281-.594L7.5 6.187A.87.87 0 0 1 8.063 6M9 12.625l6 4.344V7.062l-6 4.344z' />
    </g>
    <defs>
      <clipPath id='713abec4274d684bc727e44b998e0c9c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdRegularIcon);
export default ForwardRef;
