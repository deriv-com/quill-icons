import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarLgBoldIcon = (
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
      <path d='M6.188 6.438V8h5.625V6.438c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938V8h1.562c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V10.5C.25 9.133 1.344 8 2.75 8h1.563V6.438c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M2.125 13v10c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V13z' />
    </g>
    <defs>
      <clipPath id='76b8fa7d968445edf2898d882e3194de__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgBoldIcon);
export default ForwardRef;
