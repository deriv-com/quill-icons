import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeLgRegularIcon = (
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
      <path d='M4.625 5.5c.313 0 .625.313.625.625V8h7.5V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625V8h1.25c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V10.5C.25 9.133 1.344 8 2.75 8H4V6.125c0-.312.273-.625.625-.625M16.5 13h-15v10c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25zm-1.25-3.75H2.75c-.703 0-1.25.586-1.25 1.25v1.25h15V10.5c0-.664-.586-1.25-1.25-1.25m0 6.875a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625M9.625 21.75h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625M4 16.125c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625M4.625 18a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938m8.75 3.75a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m1.875-.625c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0a1.87 1.87 0 0 1-.937-1.64c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602' />
    </g>
    <defs>
      <clipPath id='c9dab76981c65aab370820fa90ad2687__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgRegularIcon);
export default ForwardRef;
