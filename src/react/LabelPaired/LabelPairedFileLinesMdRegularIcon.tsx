import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 19c.531 0 1-.437 1-1v-8H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1zM7.5 9h3.469c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5M2 4h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m1.5 8h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 2h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 2h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='4a6201c1309a08df2407193b3cd344c0__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesMdRegularIcon);
export default ForwardRef;
