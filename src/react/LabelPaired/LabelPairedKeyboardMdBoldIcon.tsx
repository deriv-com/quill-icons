import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardMdBoldIcon = (
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
      <path d='M2 7.5c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5V8c0-.25-.25-.5-.5-.5zM0 8c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm5.5 6h7c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-7A.494.494 0 0 1 5 15v-.5c0-.25.219-.5.5-.5m-2.25-2.25c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5-3h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2 3c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5-3h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2 3c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5-3h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2 3c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5-3h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2 3c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5-3h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='eb42c2a352b9e784816c3413e5d3f716__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardMdBoldIcon);
export default ForwardRef;
