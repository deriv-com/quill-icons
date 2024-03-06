import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterLgRegularIcon = (
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
      <path d='M10.625 6.75h-7.5q-.586.039-.625.625v1.25q.039.585.625.625h7.5q.585-.039.625-.625v-1.25q-.039-.585-.625-.625m-7.5-1.25h7.5q.78.039 1.328.547.508.546.547 1.328v1.25q-.039.781-.547 1.328-.546.508-1.328.547H7.5v1.25h9.063q.975 0 1.64.625.703.585.86 1.523l.898 6.446q.039.156.039.351V23q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 24.054 0 23v-2.5q0-.078.04-.156l.898-6.446q.156-.937.859-1.523.665-.625 1.64-.625H6.25V10.5H3.125a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-1.25q.039-.781.547-1.328.546-.508 1.328-.547M1.25 23q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-1.25H1.25zm16.563-8.906q-.195-1.016-1.211-1.094H3.438q-1.055.078-1.25 1.094L1.25 20.5h17.5zm-13.438.469q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m2.813.937q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938m-.938 2.188q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m4.688-2.188q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938M10 17.688q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m4.688-2.188q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938m-.938 2.188q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937' />
    </g>
    <defs>
      <clipPath id='8fe6d386b930d532c6e0519472de3f09__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterLgRegularIcon);
export default ForwardRef;
