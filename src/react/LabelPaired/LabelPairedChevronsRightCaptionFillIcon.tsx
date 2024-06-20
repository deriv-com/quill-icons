import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightCaptionFillIcon = (
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
      <path d='m11.016 10.04-4.5 4.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056L9.42 9.5l-3.96-3.96a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l4.5 4.5a.723.723 0 0 1 0 1.055m-9 4.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056L4.92 9.5.962 5.54a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l4.5 4.5a.723.723 0 0 1 0 1.055z' />
    </g>
    <defs>
      <clipPath id='9a2c95980ba5b563983a252e6b62587a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionFillIcon);
export default ForwardRef;
