import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.969 6.938a3.027 3.027 0 0 1 4.265 0l1.828 1.828a3.027 3.027 0 0 1 0 4.265l-2.25 2.25-6.093-6.094zm-3.328 3.328 6.093 6.093L8.812 27.281a4.1 4.1 0 0 1-1.734 1.032L1.406 30c-.375.094-.797 0-1.078-.328a.96.96 0 0 1-.281-1.078l1.64-5.672a4.1 4.1 0 0 1 1.032-1.735z' />
    </g>
    <defs>
      <clipPath id='947a33007cab6c87b57363523940f0b8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlFillIcon);
export default ForwardRef;
