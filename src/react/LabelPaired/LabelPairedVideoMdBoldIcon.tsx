import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoMdBoldIcon = (
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
      <path d='M2 7.5c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5h8c.25 0 .5-.219.5-.5V8c0-.25-.25-.5-.5-.5zM0 8c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm16.5 7.375V8.656L13 10.22V8.594l3.25-1.469c.156-.062.313-.125.5-.125.688 0 1.25.563 1.25 1.25v7.531C18 16.47 17.438 17 16.75 17c-.187 0-.344-.031-.5-.094L13 15.438V13.78z' />
    </g>
    <defs>
      <clipPath id='99b0ad9b6702af3d8b7517010796ccb7__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoMdBoldIcon);
export default ForwardRef;
