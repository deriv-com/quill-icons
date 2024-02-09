import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8q-.547 0-.898.352-.352.35-.352.898v12.5q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898V9.25q0-.547-.352-.898Q20.798 8 20.25 8zM.25 9.25q.039-1.055.742-1.758T2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm8.398 2.852 2.813 6.25q.156.546-.313.859-.546.156-.859-.313L9.9 18H6.226l-.391.898q-.312.47-.86.313-.507-.312-.312-.86l2.813-6.25a.63.63 0 0 1 .585-.351q.39 0 .586.352m-.585 1.796-1.29 2.852h2.579zm6.874.977q-.897.04-1.367.781a1.66 1.66 0 0 0 0 1.563q.469.742 1.367.781.9-.04 1.368-.781a1.66 1.66 0 0 0 0-1.563q-.469-.742-1.367-.781m1.563-.781v-1.719q.039-.585.625-.625.585.039.625.625v6.25q-.039.585-.625.625-.468-.039-.625-.469-.664.47-1.562.469-1.212-.04-1.993-.82-.78-.781-.82-1.992.04-1.212.82-1.993.782-.78 1.992-.82.9 0 1.563.469' />
    </g>
    <defs>
      <clipPath id='24f777fb4bcebea4b38a4d5f96ef3d32__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdLgRegularIcon);
export default ForwardRef;
