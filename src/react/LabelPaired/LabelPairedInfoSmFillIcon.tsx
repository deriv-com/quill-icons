import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 5.938c0-.465.246-.875.656-1.122.383-.246.902-.246 1.312 0 .383.247.656.657.656 1.122 0 .492-.273.902-.656 1.148-.41.246-.93.246-1.312 0a1.31 1.31 0 0 1-.656-1.149M.375 9.875C.375 9.41.758 9 1.25 9H3a.9.9 0 0 1 .875.875V16h.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-3.5a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.875v-5.25H1.25a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='9f4db4a8660b5c7abe05acdd6c486fe1__a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmFillIcon);
export default ForwardRef;
