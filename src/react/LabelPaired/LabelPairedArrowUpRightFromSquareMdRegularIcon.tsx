import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareMdRegularIcon = (
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
      <path d='M10.5 4h5c.25 0 .5.25.5.5v5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V5.719l-7.656 7.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L14.281 5H10.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M2 5h4.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h11c.531 0 1-.437 1-1v-4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='b8c0b177dbbee26e3377cf17f3363632__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdRegularIcon);
export default ForwardRef;
