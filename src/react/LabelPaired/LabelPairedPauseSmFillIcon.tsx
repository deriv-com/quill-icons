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
      <path d='M1.438 5.5h.875c.71 0 1.312.602 1.312 1.313v7.875c0 .738-.602 1.312-1.312 1.312h-.876a1.296 1.296 0 0 1-1.312-1.312V6.812c0-.71.574-1.312 1.313-1.312m5.25 0h.875c.71 0 1.312.602 1.312 1.313v7.875c0 .738-.602 1.312-1.312 1.312h-.875a1.296 1.296 0 0 1-1.313-1.312V6.812c0-.71.574-1.312 1.313-1.312' />
    </g>
    <defs>
      <clipPath id='61cbb47b0358ac031fbc08fcad1106c5__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmFillIcon);
export default ForwardRef;
