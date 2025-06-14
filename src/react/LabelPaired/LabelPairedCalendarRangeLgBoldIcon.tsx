import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeLgBoldIcon = (
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
      <path d='M6.188 6.438V8h5.625V6.438c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938V8h1.562c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V10.5C.25 9.133 1.344 8 2.75 8h1.563V6.438c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M2.125 13v10c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V13zM4 16.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25C4.547 18 4 17.453 4 16.75m8.75 2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m-5-2.5c0-.508.39-.937.938-.937h4.374a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938H8.686c-.546 0-.937-.391-.937-.938m1.563 2.813a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938H4.937c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937z' />
    </g>
    <defs>
      <clipPath id='d2462b19848815edae9b1048069fcd9c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgBoldIcon);
export default ForwardRef;
