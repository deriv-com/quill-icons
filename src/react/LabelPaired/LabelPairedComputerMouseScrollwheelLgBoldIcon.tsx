import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 19.25v-7.5c0-2.383-1.992-4.375-4.375-4.375h-2.5c-2.422 0-4.375 1.992-4.375 4.375v7.5a4.37 4.37 0 0 0 4.375 4.375h2.5c2.383 0 4.375-1.953 4.375-4.375M0 11.75A6.243 6.243 0 0 1 6.25 5.5h2.5c3.438 0 6.25 2.813 6.25 6.25v7.5a6.243 6.243 0 0 1-6.25 6.25h-2.5A6.22 6.22 0 0 1 0 19.25zm7.5-2.5c.664 0 1.25.586 1.25 1.25v1.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='b9d93fc2781323054b146261d0e577e7__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgBoldIcon);
export default ForwardRef;
