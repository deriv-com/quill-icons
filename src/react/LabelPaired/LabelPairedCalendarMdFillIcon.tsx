import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h4V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h1.5c.813 0 1.5.688 1.5 1.5V9H0V7.5A1.5 1.5 0 0 1 1.5 6H3zm11 5v8.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.48 1.48 0 0 1 0 18.5V10z' />
    </g>
    <defs>
      <clipPath id='545910f319e0ff307d8f524b74693bb2__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarMdFillIcon);
export default ForwardRef;
