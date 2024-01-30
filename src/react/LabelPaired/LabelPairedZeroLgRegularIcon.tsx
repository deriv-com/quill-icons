import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13q.078-2.656 1.836-4.414T6.5 6.75q2.656.078 4.414 1.836T12.75 13v5q-.078 2.656-1.836 4.414T6.5 24.25q-2.655-.078-4.414-1.836T.25 18zM6.5 8q-2.109.04-3.555 1.445Q1.54 10.891 1.5 13v5q.04 2.109 1.445 3.555Q4.391 22.96 6.5 23q2.109-.04 3.555-1.445Q11.46 20.109 11.5 18v-5q-.04-2.109-1.445-3.555Q8.609 8.04 6.5 8' />
    </g>
    <defs>
      <clipPath id='ac3074b9bfbc0bdd47214f722efb7480__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgRegularIcon);
export default ForwardRef;
