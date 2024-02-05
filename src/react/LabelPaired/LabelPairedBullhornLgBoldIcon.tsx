import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornLgBoldIcon = (
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
      <path d='m16.875 8.39-.43.43a12.7 12.7 0 0 1-3.828 2.578 12.4 12.4 0 0 1-4.492.977v5q2.383.078 4.492.977a12.7 12.7 0 0 1 3.828 2.578l.43.43zM6.25 10.5h1.602q2.07 0 3.945-.781a10.2 10.2 0 0 0 3.32-2.227l1.485-1.484q.663-.585 1.367-.274.703.274.781 1.133v5.664q.547.273.898.899.352.624.352 1.445 0 .82-.352 1.445-.35.625-.898.899v5.664q-.078.859-.781 1.133-.704.312-1.367-.274l-1.485-1.484a10.3 10.3 0 0 0-3.203-2.188 11 11 0 0 0-3.789-.82v4.063q-.039.937-.625 1.562-.625.585-1.562.625h-1.25q-.937-.039-1.563-.625-.586-.625-.625-1.562V19.25q-1.055-.039-1.758-.742Q.04 17.804 0 16.75V13q.039-1.055.742-1.758T2.5 10.5zm-1.875 8.75v4.063q.039.273.313.312h1.25q.273-.039.312-.312V19.25zM2.5 12.375q-.585.039-.625.625v3.75q.039.585.625.625h3.75v-5z' />
    </g>
    <defs>
      <clipPath id='2eb5bff7d64d95bd8d9e775bd9126771__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornLgBoldIcon);
export default ForwardRef;
