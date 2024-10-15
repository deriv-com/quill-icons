import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 5.5v9.625h1.75A.9.9 0 0 1 7 16c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 16c0-.465.383-.875.875-.875h1.75V7.141l-1.285.847c-.383.274-.93.164-1.203-.246A.85.85 0 0 1 .383 6.54l2.625-1.75c.273-.191.601-.191.902-.055.274.164.465.465.465.766' />
    </g>
    <defs>
      <clipPath id='7f8cc46ed315ce3e1f281dee024cad9e__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmFillIcon);
export default ForwardRef;
