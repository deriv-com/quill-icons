import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoLgRegularIcon = (
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
      <path d='M6.031 8c-1.133 0-2.226.469-3.047 1.25L1.93 10.344a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l1.094-1.054A5.4 5.4 0 0 1 6.031 6.75C9 6.75 11.5 9.172 11.5 12.18c0 1.523-.625 2.93-1.719 3.984L2.437 23h9.688c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875c-.273 0-.508-.156-.586-.39a.54.54 0 0 1 .156-.665l8.477-7.968a4.22 4.22 0 0 0 1.328-3.047C10.25 9.875 8.336 8 6.031 8' />
    </g>
    <defs>
      <clipPath id='68c03edb003fdec3652a7430f0d19c5b__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgRegularIcon);
export default ForwardRef;
