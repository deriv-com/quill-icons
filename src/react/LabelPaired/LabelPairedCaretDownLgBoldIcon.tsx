import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.5 18.352 3.477-3.477H3.023zm.898 1.796q-.39.352-.898.352t-.898-.352l-5-5q-.547-.624-.274-1.367Q.68 13.04 1.5 13h10q.82.04 1.172.781.273.742-.274 1.367z' />
    </g>
    <defs>
      <clipPath id='4be7fccd392ddc2cc47d5259999de075__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownLgBoldIcon);
export default ForwardRef;
