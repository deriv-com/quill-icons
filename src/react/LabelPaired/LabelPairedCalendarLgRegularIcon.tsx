import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 5.5c.313 0 .625.313.625.625V8h7.5V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625V8h1.25c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V10.5C.25 9.133 1.344 8 2.75 8H4V6.125c0-.312.273-.625.625-.625M16.5 13h-15v10c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25zm-1.25-3.75H2.75c-.703 0-1.25.586-1.25 1.25v1.25h15V10.5c0-.664-.586-1.25-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='74203f44fc428a13a4059fc3ee53a375__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgRegularIcon);
export default ForwardRef;
