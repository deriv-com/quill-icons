import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 10.5a6.5 6.5 0 0 1-1.25 3.844l3.938 3.969a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0l-3.969-3.969C9.25 16.563 7.906 17 6.5 17A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5M6.5 15a4.46 4.46 0 0 0 3.875-2.25 4.46 4.46 0 0 0 0-4.5C9.563 6.875 8.094 6 6.5 6a4.54 4.54 0 0 0-3.906 2.25 4.46 4.46 0 0 0 0 4.5A4.47 4.47 0 0 0 6.5 15' />
    </g>
    <defs>
      <clipPath id='d681cf8ae1ad7ce053f1dabe567e6dc7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchMdFillIcon);
export default ForwardRef;
