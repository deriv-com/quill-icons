import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 9H6q-.656 0-1.078.422Q4.5 9.843 4.5 10.5v12H3v-12q.047-1.266.89-2.11.844-.843 2.11-.89h18q1.266.047 2.11.89.843.844.89 2.11v12h-1.5v-12q0-.656-.422-1.078Q24.657 9 24 9M3.61 27h22.78q1.548-.093 2.016-1.5H1.594q.468 1.407 2.015 1.5M0 24.89q.095-.796.89-.89h28.22q.796.095.89.89-.047 1.547-1.031 2.579-1.032.984-2.578 1.031H3.609q-1.546-.047-2.53-1.031Q.046 26.437 0 24.89' />
    </g>
    <defs>
      <clipPath id='f9dbb84f04e64d001e574ea7032cda88__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlRegularIcon);
export default ForwardRef;
