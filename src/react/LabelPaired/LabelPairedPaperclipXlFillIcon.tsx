import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.063 9.938a3 3 0 0 0-4.172 0l-8.625 8.625c-1.97 1.968-1.97 5.203 0 7.171 1.968 1.97 5.203 1.97 7.172 0l7.124-7.125a1.274 1.274 0 0 1 1.829 0 1.274 1.274 0 0 1 0 1.828l-7.125 7.125c-3 3-7.828 3-10.828 0s-3-7.828 0-10.828l8.625-8.625a5.46 5.46 0 0 1 7.828 0 5.46 5.46 0 0 1 0 7.829l-8.25 8.25a3.37 3.37 0 0 1-4.828 0 3.37 3.37 0 0 1 0-4.829l6.75-6.75a1.274 1.274 0 0 1 1.828 0 1.274 1.274 0 0 1 0 1.829l-6.75 6.75a.92.92 0 0 0 0 1.171.92.92 0 0 0 1.172 0l8.25-8.25a3 3 0 0 0 0-4.171' />
    </g>
    <defs>
      <clipPath id='f0b5aaa6069236a614be3e5465e6bc3b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipXlFillIcon);
export default ForwardRef;
