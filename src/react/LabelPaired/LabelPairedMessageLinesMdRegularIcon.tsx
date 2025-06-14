import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesMdRegularIcon = (
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
      <path d='M6 17v1.5l3.063-2.281A1 1 0 0 1 9.656 16H14c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1H2c-.562 0-1 .469-1 1v9c0 .563.438 1 1 1h3c.531 0 1 .469 1 1M2 4h12c1.094 0 2 .906 2 2v9c0 1.125-.906 2-2 2H9.656l-3.875 2.906c-.156.125-.343.125-.531.063A.51.51 0 0 1 5 19.5V17H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m2.5 4.5h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7A.494.494 0 0 1 4 9c0-.25.219-.5.5-.5m0 3h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4A.494.494 0 0 1 4 12c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='d9343324f941b82d43d780602918a028__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesMdRegularIcon);
export default ForwardRef;
