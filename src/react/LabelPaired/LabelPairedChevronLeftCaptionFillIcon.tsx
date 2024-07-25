import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.46 8.984 4.5-4.5a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L2.055 9.5l3.96 3.984a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.055' />
    </g>
    <defs>
      <clipPath id='65ed54b5ee86af644a3193a42f4264d3__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionFillIcon);
export default ForwardRef;
