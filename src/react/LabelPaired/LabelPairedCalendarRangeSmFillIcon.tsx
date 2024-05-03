import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeSmFillIcon = (
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
      <path d='M3 4.625c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V5.5h3.5v-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V5.5h1.313c.71 0 1.312.602 1.312 1.313v1.312H.375V6.813c0-.711.574-1.313 1.313-1.313H3zM12.625 9v7.438c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312V9zm-8.75 2.625A.9.9 0 0 0 3 10.75a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875M10 16a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875m-4.375-4.375c0 .383.273.656.656.656h3.938a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656H6.28c-.383 0-.656.3-.656.656m1.094 2.844H2.78c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H6.72a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656' />
    </g>
    <defs>
      <clipPath id='816523eec357298520793a2463d3b169__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeSmFillIcon);
export default ForwardRef;
