import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerLgBoldIcon = (
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
      <path d='M15 8.625H2.5q-.585.039-.625.625V18q.039.585.625.625H15q.585-.039.625-.625V9.25q-.039-.585-.625-.625M2.5 20.5q-1.055-.039-1.758-.742Q.04 19.054 0 18V9.25q.039-1.055.742-1.758T2.5 6.75H15q1.055.039 1.758.742T17.5 9.25V18q-.039 1.055-.742 1.758-.704.703-1.758.742h-3.398l.625 1.875h1.835q.86.078.938.938-.079.858-.937.937H3.438q-.86-.079-.938-.937.078-.86.938-.938h1.835l.625-1.875zm4.727 1.875h3.046L9.648 20.5H7.852zm13.398-13.75v1.25h2.5v-1.25zm0 3.125V13h2.5v-1.25zm2.5 3.125h-2.5v7.5h2.5zm-4.375-6.25q.039-.781.547-1.328.546-.508 1.328-.547h2.5q.78.039 1.328.547.508.546.547 1.328v13.75q-.039.78-.547 1.328-.546.508-1.328.547h-2.5a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm3.125 10.938q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
    </g>
    <defs>
      <clipPath id='15d0eb18552c1b5fa9ffcaa77dd44d50__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerLgBoldIcon);
export default ForwardRef;
