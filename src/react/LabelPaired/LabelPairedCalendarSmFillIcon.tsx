import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 4.625c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V5.5h3.5v-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V5.5h1.313c.71 0 1.312.602 1.312 1.313v1.312H.375V6.813c0-.711.574-1.313 1.313-1.313H3zM12.625 9v7.438c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312V9z' />
    </g>
    <defs>
      <clipPath id='e994bb06b57104eaf543649d3ad3963a__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmFillIcon);
export default ForwardRef;
