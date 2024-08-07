import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightMyComputerIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 49 48'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#A8D0C8'
      d='M32.44 45c-.779 0-1.407-.67-1.407-1.5v-6c0-.83-.628-1.5-1.406-1.5h-11.25c-.778 0-1.406.67-1.406 1.5v6c0 .83-.628 1.5-1.406 1.5-.779 0-1.407.67-1.407 1.5s.628 1.5 1.407 1.5H32.44c.778 0 1.406-.67 1.406-1.5S33.218 45 32.44 45'
    />
    <path
      fill='#064E72'
      d='M43.94 0H4.377C2.043 0 .158 2.01.158 4.5v30c0 2.49 1.885 4.5 4.219 4.5H43.94c2.334 0 4.218-2.01 4.218-4.5v-30c0-2.49-1.884-4.5-4.218-4.5'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightMyComputerIcon);
export default ForwardRef;
