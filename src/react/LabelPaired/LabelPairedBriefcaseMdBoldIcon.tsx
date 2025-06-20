import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 5.75V7h5V5.75a.27.27 0 0 0-.25-.25h-4.5a.246.246 0 0 0-.25.25M4 7V5.75C4 4.813 4.781 4 5.75 4h4.5c.938 0 1.75.813 1.75 1.75V7h2c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2zm-2.5 6.5V17c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5v-3.5H10v.5c0 .563-.469 1-1 1H7c-.562 0-1-.437-1-1v-.5zM6 12h8.5V9c0-.25-.25-.5-.5-.5H2c-.281 0-.5.25-.5.5v3z' />
    </g>
    <defs>
      <clipPath id='fd2c2daf10457990655f72b1739e348c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseMdBoldIcon);
export default ForwardRef;
