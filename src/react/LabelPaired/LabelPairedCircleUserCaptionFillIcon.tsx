import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserCaptionFillIcon = (
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
      <path d='M9.352 12.523C8.812 11.61 7.852 11 6.75 11h-1.5c-1.125 0-2.086.61-2.602 1.523A4.47 4.47 0 0 0 6 14a4.55 4.55 0 0 0 3.352-1.477M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6 .375c.586 0 1.148-.305 1.453-.844a1.67 1.67 0 0 0 0-1.687A1.71 1.71 0 0 0 6 6.5c-.61 0-1.172.328-1.477.844a1.67 1.67 0 0 0 0 1.687c.305.54.868.844 1.477.844' />
    </g>
    <defs>
      <clipPath id='e1a2426e7eae180dcb4678ccc51bd2ae__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionFillIcon);
export default ForwardRef;
