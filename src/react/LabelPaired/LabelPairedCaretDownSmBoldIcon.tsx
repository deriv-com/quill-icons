import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmBoldIcon = (
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
      <path d='m4.5 12.773 2.434-2.46H2.039zm.602 1.23a.843.843 0 0 1-1.23 0l-3.5-3.5a.88.88 0 0 1-.192-.956A.9.9 0 0 1 1 9h7c.328 0 .656.219.793.547a.88.88 0 0 1-.191.957z' />
    </g>
    <defs>
      <clipPath id='15be0fb33a1c8f8aa170062f27835621__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmBoldIcon);
export default ForwardRef;
