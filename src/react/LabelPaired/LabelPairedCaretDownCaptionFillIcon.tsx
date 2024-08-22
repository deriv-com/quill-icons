import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownCaptionFillIcon = (
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
      <path d='m3.46 12.29-3-3a.76.76 0 0 1-.163-.821A.77.77 0 0 1 1 8h6c.305 0 .563.188.68.469a.76.76 0 0 1-.164.82l-3 3a.723.723 0 0 1-1.055 0' />
    </g>
    <defs>
      <clipPath id='5d85721d6b437d30e425f46434831e83__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionFillIcon);
export default ForwardRef;
