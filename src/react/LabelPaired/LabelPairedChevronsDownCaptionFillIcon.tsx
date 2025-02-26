import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownCaptionFillIcon = (
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
      <path d='M6.516 14.54a.723.723 0 0 1-1.055 0l-4.5-4.5a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0L6 12.945l3.96-3.96a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054zm4.5-9-4.5 4.5a.723.723 0 0 1-1.055 0l-4.5-4.5a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0L6 8.445l3.96-3.96a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054' />
    </g>
    <defs>
      <clipPath id='9499bfceeff1e5d9e0b9b6f8b74d481b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownCaptionFillIcon);
export default ForwardRef;
