import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownCaptionFillIcon = (
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
      <path d='m5.46 13.04-4.5-4.5a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.056 0L6 11.445l3.96-3.96a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.055 0' />
    </g>
    <defs>
      <clipPath id='124b42c9fc0a1018d6a0458738cb97ce__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownCaptionFillIcon);
export default ForwardRef;
