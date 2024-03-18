import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.29 3.914 5.28 7.031a5.46 5.46 0 0 1 2.844-1.449v-.957c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v.957a5.29 5.29 0 0 1 4.293 4.293h.957a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.957a5.3 5.3 0 0 1-.684 1.832l3.993 3.145c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m5.386 4.211 1.066.82c.356-.218.793-.383 1.258-.383 1.203 0 2.188.985 2.188 2.188 0 .273-.055.547-.165.793l1.067.82c.246-.465.41-1.011.41-1.613 0-1.914-1.586-3.5-3.5-3.5-.902 0-1.695.328-2.324.875m3.363 5.988 1.531 1.203c-.52.301-1.093.52-1.695.63v.929c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.93a5.29 5.29 0 0 1-4.32-4.293h-.93A.88.88 0 0 1 2 10.777c0-.492.383-.875.875-.875h.93c.027-.218.082-.41.136-.601L5.5 10.53v.219a3.49 3.49 0 0 0 3.5 3.5c.355 0 .71-.055 1.04-.137' />
    </g>
    <defs>
      <clipPath id='1d9fed8edb00d208db6fbf7e2f582ff5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashSmFillIcon);
export default ForwardRef;
