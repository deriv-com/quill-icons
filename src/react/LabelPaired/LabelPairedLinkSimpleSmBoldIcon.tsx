import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleSmBoldIcon = (
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
      <path d='M.125 10.75Q.18 8.89 1.41 7.66T4.5 6.375h1.969q.601.054.656.656-.054.601-.656.657H4.5q-1.312.027-2.16.902-.875.848-.902 2.16.027 1.313.902 2.16.847.875 2.16.902h1.969q.601.056.656.657-.054.601-.656.656H4.5q-1.86-.055-3.09-1.285T.125 10.75m15.75 0q-.055 1.86-1.285 3.09t-3.09 1.285H9.531q-.601-.055-.656-.656.054-.602.656-.656H11.5q1.313-.029 2.16-.903.875-.848.902-2.16-.027-1.312-.902-2.16-.848-.875-2.16-.902H9.531q-.601-.056-.656-.657.054-.601.656-.656H11.5q1.86.054 3.09 1.285t1.285 3.09m-10.719-.656h5.688q.601.054.656.656-.055.602-.656.656H5.156q-.601-.054-.656-.656.054-.602.656-.656' />
    </g>
    <defs>
      <clipPath id='f9dd861653da4e9b6d1a4a14ac8a5da9__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmBoldIcon);
export default ForwardRef;
