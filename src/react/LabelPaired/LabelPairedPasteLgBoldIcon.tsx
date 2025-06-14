import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteLgBoldIcon = (
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
      <path d='M4.063 7.375A2.195 2.195 0 0 1 6.25 5.5c1.094 0 1.992.82 2.148 1.875H10c1.133 0 2.11.82 2.422 1.875H10c-1.133 0-2.11.508-2.812 1.25H4.374c-.703 0-1.25-.547-1.25-1.25H2.5a.64.64 0 0 0-.625.625V20.5c0 .352.273.625.625.625h3.75V23H2.5A2.47 2.47 0 0 1 0 20.5V9.875c0-1.367 1.094-2.5 2.5-2.5zm1.562.313c0 .351.273.625.625.625a.64.64 0 0 0 .625-.626c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625M17.5 23.624a.64.64 0 0 0 .625-.625v-7.969l-2.656-2.656H10a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625zM10 25.5A2.47 2.47 0 0 1 7.5 23V13c0-1.367 1.094-2.5 2.5-2.5h5.469c.469 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5z' />
    </g>
    <defs>
      <clipPath id='ea296e88ab2a4e9940f675f03c245cb6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgBoldIcon);
export default ForwardRef;
