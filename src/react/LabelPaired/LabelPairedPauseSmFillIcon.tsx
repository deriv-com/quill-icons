import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 5.5h.875q.546.027.93.383.354.383.382.93v7.875a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-.874a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V6.814q.027-.547.383-.93.382-.356.93-.383m5.25 0h.875q.546.027.93.383.355.383.382.93v7.875a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-.875a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93V6.814q.027-.547.383-.93.383-.356.93-.383' />
    </g>
    <defs>
      <clipPath id='eab35adda0abd05e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmFillIcon);
export default ForwardRef;
