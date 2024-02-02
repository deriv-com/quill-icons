import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveSmRegularIcon = (
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
      <path d='M1.465 4.953q.082-.3.41-.328h5.688q.41.027.437.438-.027.41-.437.437H2.23L1.137 9.875h4.238q1.476.027 2.488 1.012.985 1.012 1.012 2.488-.027 1.476-1.012 2.488-1.011.985-2.488 1.012H2.449q-.71 0-1.285-.355a2.3 2.3 0 0 1-.875-.985l-.11-.219q-.163-.355.192-.574.383-.164.574.192l.137.218q.438.82 1.367.848h2.926q1.12-.027 1.86-.766.738-.738.765-1.859-.027-1.12-.766-1.86-.738-.738-1.859-.765H.563a.44.44 0 0 1-.356-.164.55.55 0 0 1-.082-.383z' />
    </g>
    <defs>
      <clipPath id='e4f11117639fe5c4__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmRegularIcon);
export default ForwardRef;
