import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 9.25H2.5V18H15zM2.5 6.75H15c1.367 0 2.5 1.133 2.5 2.5V18c0 1.406-1.133 2.5-2.5 2.5h-4.61l.43 1.25h2.93c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.89l.43-1.25H2.5A2.47 2.47 0 0 1 0 18V9.25c0-1.367 1.094-2.5 2.5-2.5m18.125 0h2.5c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875h-2.5a1.85 1.85 0 0 1-1.875-1.875V8.625c0-1.016.82-1.875 1.875-1.875m.625 2.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625zm-.625 3.125c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625m1.25 6.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='17bf918e479d2980c6c2e37fb7061084__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerLgFillIcon);
export default ForwardRef;
