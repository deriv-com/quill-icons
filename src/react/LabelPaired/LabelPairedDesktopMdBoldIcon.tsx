import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 5.5H2c-.281 0-.5.25-.5.5v6h15V6c0-.25-.25-.5-.5-.5m2 6.5v3c0 1.125-.906 2-2 2h-4.625l.25 1.5h1.625a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-8.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.594l.25-1.5H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2zM1.5 13.5V15c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5v-1.5zm6.375 5h2.219l-.25-1.5H8.125z' />
    </g>
    <defs>
      <clipPath id='ed8b25aac7046fdd6df7e559bc94643a__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopMdBoldIcon);
export default ForwardRef;
