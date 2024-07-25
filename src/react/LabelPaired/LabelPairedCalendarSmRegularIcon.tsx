import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarSmRegularIcon = (
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
      <path d='M3.438 3.75a.47.47 0 0 1 .437.438V5.5h5.25V4.188a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V5.5h.875c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V7.25c0-.957.766-1.75 1.75-1.75H3V4.188a.45.45 0 0 1 .438-.438M11.75 9H1.25v7c0 .492.383.875.875.875h8.75A.88.88 0 0 0 11.75 16zm-.875-2.625h-8.75a.88.88 0 0 0-.875.875v.875h10.5V7.25a.9.9 0 0 0-.875-.875' />
    </g>
    <defs>
      <clipPath id='4597bb9175bc90904d20fc39dca13b65__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmRegularIcon);
export default ForwardRef;
