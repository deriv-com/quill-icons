import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={30}
    viewBox='0 0 8 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25M.875 12.375c0-.312.273-.625.625-.625H4c.313 0 .625.313.625.625V23h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5V13H1.5a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='25f7800a6fa567f53b24a46dc083e178__a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgRegularIcon);
export default ForwardRef;
