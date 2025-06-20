import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationMdRegularIcon = (
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
      <path d='M1.063 17.156C1 17.25 1 17.344 1 17.438c0 .312.25.593.563.593h12.843a.615.615 0 0 0 .594-.593.5.5 0 0 0-.094-.282L8.625 6.375A.75.75 0 0 0 8 6a.76.76 0 0 0-.656.375zm-.875-.5 6.28-10.781A1.8 1.8 0 0 1 8 5c.594 0 1.188.344 1.5.875l6.281 10.781c.125.219.219.5.219.782 0 .875-.719 1.562-1.594 1.562H1.563A1.547 1.547 0 0 1 0 17.438c0-.282.063-.563.188-.782M8 9c.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m-.75 7a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='8d51bb8604f7ad884d399b694d7e41e2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdRegularIcon);
export default ForwardRef;
