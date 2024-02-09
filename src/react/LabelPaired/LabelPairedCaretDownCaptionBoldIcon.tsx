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
      <path d='m4 11.21 2.086-2.085H1.914zm.54 1.08a.78.78 0 0 1-.54.21.78.78 0 0 1-.54-.21l-3-3q-.327-.375-.163-.821A.77.77 0 0 1 1 8h6a.77.77 0 0 1 .703.469q.165.445-.164.82z' />
    </g>
    <defs>
      <clipPath id='f4c2b3905badff30a50d2235009c03d9__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionBoldIcon);
export default ForwardRef;
