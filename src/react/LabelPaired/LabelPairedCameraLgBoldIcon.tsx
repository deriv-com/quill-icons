import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.773 6.75h4.415c.976 0 1.796.625 2.109 1.523l.312.977H17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5h2.852l.351-.977.86.274-.86-.274a2.18 2.18 0 0 1 2.07-1.523m-.312 2.11-.547 1.64c-.117.39-.469.625-.898.625H2.5a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625h-3.555c-.43 0-.78-.234-.898-.625L12.5 8.86a.34.34 0 0 0-.312-.235H7.773a.34.34 0 0 0-.312.234M10 21.124c-1.602 0-3.008-.82-3.79-2.187-.82-1.329-.82-3.008 0-4.375.782-1.329 2.188-2.188 3.79-2.188 1.563 0 2.969.86 3.75 2.188.82 1.367.82 3.046 0 4.374A4.29 4.29 0 0 1 10 21.126M7.5 16.75a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='1e14408807d19d6b079115c66be5196a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgBoldIcon);
export default ForwardRef;
