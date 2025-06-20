import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 8c0-1.062-.594-2.031-1.5-2.594-.937-.531-2.094-.531-3 0C4.563 5.97 4 6.938 4 8a3.03 3.03 0 0 0 1.5 2.625c.906.531 2.063.531 3 0C9.406 10.063 10 9.094 10 8M3 8c0-1.406.75-2.719 2-3.437 1.219-.72 2.75-.72 4 0 1.219.718 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8M1 19h12c-.062-2.469-2.094-4.5-4.594-4.5H5.562A4.575 4.575 0 0 0 1 19m-1 .094C0 16 2.469 13.5 5.563 13.5h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094' />
    </g>
    <defs>
      <clipPath id='2b94adaebc75cf3fd5d2dcdb4a3747b0__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMdRegularIcon);
export default ForwardRef;
