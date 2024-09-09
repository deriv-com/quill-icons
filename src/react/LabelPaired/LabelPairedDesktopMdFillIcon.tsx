import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopMdFillIcon = (
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
      <path d='M2 4h14c1.094 0 2 .906 2 2v9c0 1.125-.906 2-2 2h-5.5l.313 1H13c.531 0 1 .469 1 1 0 .563-.469 1-1 1H5c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2.156l.344-1H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m14 2H2v7h14z' />
    </g>
    <defs>
      <clipPath id='453039051b96375b52f3e2abfeb9e5df__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopMdFillIcon);
export default ForwardRef;
