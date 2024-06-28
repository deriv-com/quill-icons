import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.398 25.031a1.178 1.178 0 0 1-1.835 0C4.57 22.492 0 16.438 0 13c0-4.14 3.36-7.5 7.5-7.5S15 8.86 15 13c0 3.438-4.57 9.492-6.602 12.031M7.5 10.5c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5A2.54 2.54 0 0 0 7.5 15.5c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5C9.18 11.008 8.36 10.5 7.5 10.5' />
    </g>
    <defs>
      <clipPath id='c1875146b41ad8f3d85f5d617b05e92d__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgFillIcon);
export default ForwardRef;
