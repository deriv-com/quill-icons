import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletLgRegularIcon = (
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
      <path d='M3.125 6.75h15q.585.039.625.625-.039.585-.625.625h-15q-.781.039-1.328.547-.508.546-.547 1.328v11.25q.039.78.547 1.328.546.508 1.328.547h13.75q.78-.039 1.328-.547.508-.546.547-1.328v-8.75a2.04 2.04 0 0 0-.547-1.328 2.04 2.04 0 0 0-1.328-.547h-12.5q-.586-.039-.625-.625.039-.585.625-.625h12.5q1.328.04 2.227.898.858.9.898 2.227v8.75q-.04 1.328-.898 2.227-.9.858-2.227.898H3.125q-1.328-.04-2.227-.898-.858-.9-.898-2.227V9.875q.04-1.328.898-2.227.9-.859 2.227-.898M15 17.688q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
    </g>
    <defs>
      <clipPath id='ae2574602ecf96c6ff919a1d80d5a33c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletLgRegularIcon);
export default ForwardRef;
