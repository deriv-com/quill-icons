import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownCaptionBoldIcon = (
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
      <path d='m4 11.234 2.086-2.109H1.89zm.516 1.055a.723.723 0 0 1-1.055 0l-3-3a.76.76 0 0 1-.164-.82A.77.77 0 0 1 1 8h6a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82z' />
    </g>
    <defs>
      <clipPath id='fa97a64ea16aeb7ed4c275dc9cb3dd97__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionBoldIcon);
export default ForwardRef;
