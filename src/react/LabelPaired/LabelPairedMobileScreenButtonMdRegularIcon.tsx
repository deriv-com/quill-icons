import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonMdRegularIcon = (
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
      <path d='M9 5H3c-.562 0-1 .469-1 1v8h8V6c0-.531-.469-1-1-1m1 10H2v3c0 .563.438 1 1 1h6c.531 0 1-.437 1-1zM3 4h6c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2H3c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m1.5 13c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='e8b691fb23495684e8af4bf15211897f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdRegularIcon);
export default ForwardRef;
