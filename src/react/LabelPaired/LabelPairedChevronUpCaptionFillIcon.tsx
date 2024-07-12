import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.46 5.984a.723.723 0 0 1 1.056 0l4.5 4.5a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L6 7.58l-3.984 3.96a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055z' />
    </g>
    <defs>
      <clipPath id='84ce2428e205c6bb161f55cf51b52fe9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpCaptionFillIcon);
export default ForwardRef;
