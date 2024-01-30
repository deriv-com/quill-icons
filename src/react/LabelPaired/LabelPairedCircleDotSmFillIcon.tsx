import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDotSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m0-9.625q-.71 0-1.312.355-.602.356-.958.957a2.63 2.63 0 0 0-.355 1.313 2.63 2.63 0 0 0 1.313 2.27q.6.355 1.312.355.71 0 1.313-.355.6-.355.957-.957.355-.63.355-1.313a2.63 2.63 0 0 0-1.312-2.27A2.53 2.53 0 0 0 7 8.125' />
    </g>
    <defs>
      <clipPath id='1efb074cedef2361bf0d07dd18479cbb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotSmFillIcon);
export default ForwardRef;
