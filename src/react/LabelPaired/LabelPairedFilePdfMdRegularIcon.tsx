import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfMdRegularIcon = (
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
      <path d='M2 19h1.5v1H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V13.5h-1V10H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1m8.969-10c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5zM5.5 15h1c.938 0 1.75.813 1.75 1.75 0 .969-.812 1.75-1.75 1.75H6v1c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m1 2.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H6v1.5zm3-2.5h1c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m1 4c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5H10v3zm2.5-3.5c0-.25.219-.5.5-.5H15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1v1h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4' />
    </g>
    <defs>
      <clipPath id='c83783cfc6e43a0a5a4ef80058a9efa6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfMdRegularIcon);
export default ForwardRef;
