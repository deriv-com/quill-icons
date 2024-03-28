import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 5c-.562 0-1 .469-1 1v7h8v1H1.031c.188.594.719 1 1.344 1H11v1H2.375A2.374 2.374 0 0 1 0 13.625C0 13.281.25 13 .594 13H2V6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v1h-1V6c0-.531-.469-1-1-1zm9 4.5v9c0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5v-9c0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5m-1 0A1.5 1.5 0 0 1 13.5 8h5c.813 0 1.5.688 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-5a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='41c8040cd135df6eb12e89b7c8330cd7__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileMdRegularIcon);
export default ForwardRef;
