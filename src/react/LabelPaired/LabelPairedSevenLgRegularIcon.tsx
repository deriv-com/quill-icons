import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenLgRegularIcon = (
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
      <path d='M.25 7.375q.039-.585.625-.625h11.25q.351 0 .547.313a.66.66 0 0 1 0 .625l-10 16.25q-.352.468-.86.234-.468-.352-.195-.86L10.992 8H.875Q.29 7.961.25 7.375' />
    </g>
    <defs>
      <clipPath id='bc67acd2aca08b1ecf7ecbdfbc3d86c1__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgRegularIcon);
export default ForwardRef;
