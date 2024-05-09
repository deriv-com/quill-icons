import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.281 5.313a.964.964 0 0 1 1.407 0l4 4c.28.28.374.718.218 1.093a.98.98 0 0 1-.906.625H1c-.406 0-.781-.25-.937-.625A1.01 1.01 0 0 1 .28 9.312zm0 13.406-4-4a1.01 1.01 0 0 1-.219-1.094C.22 13.25.595 13 1 13h8c.375 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094l-4 4a.964.964 0 0 1-1.406 0' />
    </g>
    <defs>
      <clipPath id='779e855a2067690910a106209ff72571__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortMdFillIcon);
export default ForwardRef;
