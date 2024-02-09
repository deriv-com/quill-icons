import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.25 13.195 1.25 15.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q7.617 24.211 10 24.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.383 6.789 10 6.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m.547-15.586 1.445 2.852 3.164.468a.7.7 0 0 1 .508.43.78.78 0 0 1-.156.664l-2.305 2.227.547 3.125a.65.65 0 0 1-.273.625.6.6 0 0 1-.625.039L10 18.859l-2.812 1.485a.67.67 0 0 1-.665-.04.65.65 0 0 1-.273-.624l.547-3.125-2.266-2.266q-.273-.273-.156-.625a.61.61 0 0 1 .469-.43l3.164-.468 1.445-2.852A.55.55 0 0 1 10 9.563q.39 0 .547.351m-1.563 3.711a.72.72 0 0 1-.468.352l-2.227.312 1.602 1.602a.63.63 0 0 1 .195.547l-.39 2.226 1.992-1.055q.312-.156.585 0l2.032 1.055-.39-2.227a.69.69 0 0 1 .155-.546l1.64-1.602-2.226-.312q-.351-.08-.468-.352L10 11.594z' />
    </g>
    <defs>
      <clipPath id='e5cfabea70fabeacbe1fedf8bc1dffaa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgRegularIcon);
export default ForwardRef;
