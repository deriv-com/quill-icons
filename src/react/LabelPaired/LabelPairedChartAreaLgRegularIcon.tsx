import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 7.375v13.75q.039.78.547 1.328.546.508 1.328.547h16.25q.585.039.625.625-.039.585-.625.625H3.125q-1.328-.04-2.227-.898-.858-.9-.898-2.227V7.375q.039-.585.625-.625.586.039.625.625m10.352 6.523-2.852-2.89-3.555 3.594a.52.52 0 0 0-.195.43v4.218h12.5v-3.672q0-.235-.156-.43l-2.422-2.812-1.524 1.562q-.39.352-.898.352t-.898-.352m0-1.796L12.5 13l.898-.898.665-.665q.39-.351.898-.351.547.04.898.43l2.422 2.851q.47.508.469 1.211v3.672q0 .547-.352.898-.35.352-.898.352H5q-.547 0-.898-.352-.352-.35-.352-.898v-4.219q0-.78.547-1.328l3.555-3.555q.39-.39.898-.39t.898.39z' />
    </g>
    <defs>
      <clipPath id='3d07cacff2f21b0d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgRegularIcon);
export default ForwardRef;
