import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchMdRegularIcon = (
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
      <path d='M12 10.5c0-1.937-1.062-3.75-2.75-4.75-1.719-.969-3.812-.969-5.5 0A5.5 5.5 0 0 0 1 10.5a5.51 5.51 0 0 0 2.75 4.781c1.688.969 3.781.969 5.5 0 1.688-1 2.75-2.812 2.75-4.781m-1.281 4.938C9.594 16.438 8.094 17 6.5 17A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5a6.58 6.58 0 0 1-1.562 4.25l4.406 4.406a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0z' />
    </g>
    <defs>
      <clipPath id='c9de5d0cc0130b21859a128a28bfedb7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchMdRegularIcon);
export default ForwardRef;
