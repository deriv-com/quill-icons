import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.398 5.852 3.75 3.75q.352.39.352.898t-.352.898l-3.75 3.75q-.39.352-.898.352t-.898-.352l-3.75-3.75A1.3 1.3 0 0 1 7.5 10.5q0-.508.352-.898l3.75-3.75q.39-.352.898-.352t.898.352M8.75 10.5l3.75 3.75 3.75-3.75-3.75-3.75zM2.5 8q1.055.039 1.758.742T5 10.5v4.844q0 .273.04.547a1.3 1.3 0 0 1 .312-.352q.663-.664 1.523-.664t1.523.664l3.594 3.555q.274.313.508.664.234-.352.508-.664l3.594-3.555q.663-.664 1.523-.664t1.523.664q.195.156.313.352.039-.274.039-.547V10.5q.039-1.055.742-1.758Q21.446 8.04 22.5 8q1.055.039 1.758.742T25 10.5v8.438a4.42 4.42 0 0 1-1.29 3.085l-3.28 3.282q-.43.39-.86 0-.39-.43 0-.86l3.282-3.28a3.1 3.1 0 0 0 .898-2.227V10.5q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898v4.844q-.04 1.64-1.172 2.851l-.43.39-1.718 1.72-.625.625q-.43.39-.86 0-.39-.43 0-.86l.625-.625 1.72-1.718q.546-.665 0-1.329-.665-.507-1.33 0l-3.554 3.594a2.56 2.56 0 0 0-.781 1.875v3.008q-.039.585-.625.625-.585-.039-.625-.625v-3.008q0-1.093-.781-1.875l-3.555-3.594q-.664-.546-1.328 0-.509.665 0 1.329l1.719 1.718.625.625q.39.43 0 .86-.43.39-.86 0l-.625-.625-1.718-1.72-.43-.39q-1.133-1.211-1.172-2.851V10.5q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898v8.438q0 1.288.898 2.226l3.282 3.281q.39.43 0 .86-.43.39-.86 0l-3.28-3.282A4.42 4.42 0 0 1 0 18.938V10.5q.039-1.055.742-1.758T2.5 8' />
    </g>
    <defs>
      <clipPath id='8e6f62303e69432b8672ecffc200d436__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondLgRegularIcon);
export default ForwardRef;
