import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeMdFillIcon = (
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
      <path d='M.75 5h.5a.76.76 0 0 1 .75.75v12.5a.74.74 0 0 1-.75.75h-.5a.72.72 0 0 1-.75-.75V5.75A.74.74 0 0 1 .75 5M3.5 5c.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-13c0-.25.219-.5.5-.5m2.25 0h.5a.76.76 0 0 1 .75.75v12.5a.74.74 0 0 1-.75.75h-.5a.72.72 0 0 1-.75-.75V5.75A.74.74 0 0 1 5.75 5m3 0h.5a.76.76 0 0 1 .75.75v12.5a.74.74 0 0 1-.75.75h-.5a.72.72 0 0 1-.75-.75V5.75A.74.74 0 0 1 8.75 5m5.25.75a.74.74 0 0 1 .75-.75h.5a.76.76 0 0 1 .75.75v12.5a.74.74 0 0 1-.75.75h-.5a.72.72 0 0 1-.75-.75zm-2-.25c0-.25.219-.5.5-.5.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5z' />
    </g>
    <defs>
      <clipPath id='559c538080b3ce1fe1e51e67872c569f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeMdFillIcon);
export default ForwardRef;
