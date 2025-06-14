import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopSmBoldIcon = (
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
      <path d='M14.125 5.063H1.875a.45.45 0 0 0-.437.437v5.25h13.125V5.5a.47.47 0 0 0-.438-.437m1.75 5.687v2.625c0 .984-.793 1.75-1.75 1.75h-4.047l.219 1.313h1.422c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.28a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h1.395l.219-1.312h-4.02c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75zM1.438 12.063v1.312c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438v-1.312zm5.578 4.374h1.941l-.219-1.312H7.234z' />
    </g>
    <defs>
      <clipPath id='8ee67c055e010e7999eb4567c9dda8df__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopSmBoldIcon);
export default ForwardRef;
