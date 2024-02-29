import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteLgRegularIcon = (
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
      <path d='M6.25 6.75q-.742.039-.898.742-.157.47-.625.508h-.352q-.586.039-.625.625v.625h5v-.625Q8.711 8.04 8.125 8h-.352q-.468-.039-.585-.508-.195-.703-.938-.742M2.5 8q-.547 0-.898.352-.352.35-.352.898V20.5q0 .547.352.898.35.352.898.352h5V23h-5q-1.055-.039-1.758-.742Q.04 21.554 0 20.5V9.25q.039-1.055.742-1.758T2.5 6.75h1.758Q4.882 5.578 6.25 5.5q1.367.078 1.992 1.25H10q1.055.039 1.758.742T12.5 9.25h-1.25q0-.547-.352-.898Q10.548 8 10 8h-.117q.117.313.117.625v.625q0 .547-.352.898-.35.352-.898.352h-5q-.547 0-.898-.352-.352-.35-.352-.898v-.625q0-.312.117-.625zm8.75 16.25h6.25q.547 0 .898-.352.352-.35.352-.898v-7.5h-2.187q-.665 0-1.094-.469A1.42 1.42 0 0 1 15 13.937V11.75h-3.75q-.547 0-.898.352Q10 12.452 10 13v10q0 .547.352.898.35.352.898.352m5-12.305v1.992q.039.274.313.313h1.992zM17.5 25.5h-6.25q-1.055-.039-1.758-.742Q8.79 24.054 8.75 23V13q.039-1.055.742-1.758t1.758-.742h4.531q.782 0 1.328.547l2.344 2.344q.547.546.547 1.328V23q-.039 1.055-.742 1.758-.704.703-1.758.742' />
    </g>
    <defs>
      <clipPath id='8289a640582c311ee4ba670aed78d3fa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgRegularIcon);
export default ForwardRef;
