import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWalletRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M9.125 7.75h15q.585.039.625.625-.039.585-.625.625h-15q-.781.039-1.328.547-.508.546-.547 1.328v11.25q.039.78.547 1.328.546.508 1.328.547h13.75q.78-.039 1.328-.547.508-.546.547-1.328v-8.75a2.04 2.04 0 0 0-.547-1.328 2.04 2.04 0 0 0-1.328-.547h-12.5q-.585-.039-.625-.625.039-.585.625-.625h12.5q1.328.039 2.227.898.858.9.898 2.227v8.75q-.04 1.328-.898 2.227-.9.858-2.227.898H9.125q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-11.25q.04-1.328.898-2.227.9-.858 2.227-.898M21 18.688q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletRegularIcon);
export default ForwardRef;
