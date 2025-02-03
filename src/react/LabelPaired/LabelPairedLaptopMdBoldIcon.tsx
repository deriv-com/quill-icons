import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMdBoldIcon = (
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
      <path d='M16 6.5H4c-.281 0-.5.25-.5.5v7H2V7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v7h-1.5V7c0-.25-.25-.5-.5-.5m-13 11h14c.625 0 1.188-.406 1.406-1H1.563c.218.594.78 1 1.437 1M0 16c0-.531.438-1 1-1h18c.531 0 1 .469 1 1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3' />
    </g>
    <defs>
      <clipPath id='5ee79b95ceba8d014987577574c41b0c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdBoldIcon);
export default ForwardRef;
