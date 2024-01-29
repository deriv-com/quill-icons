import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePersonChalkboardBoldIcon = (
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
    <path d='M11 10.25q-1.055-.04-1.64-.937-.47-.938 0-1.876Q9.944 6.54 11 6.5q1.055.04 1.64.938.47.938 0 1.875-.585.898-1.64.937m-.547 3.125h-.078v5h1.25v-5zm-.078 12.188q-.079.858-.937.937-.86-.079-.938-.937V15.25l-1.68 2.969q-.507.703-1.289.351-.703-.507-.351-1.289l2.304-4.023q.47-.82 1.25-1.29a3.3 3.3 0 0 1 1.72-.468H16V8.375q.039-.781.547-1.328.546-.508 1.328-.547h8.75q.78.039 1.328.547.508.546.547 1.328v8.75q-.039.78-.547 1.328-.546.508-1.328.547h-8.75a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 16 17.125V15.25h1.875v1.875h8.75v-8.75h-8.75V11.5h.938q.858.078.937.938-.078.858-.937.937H13.5v12.188q-.079.858-.937.937-.86-.079-.938-.937V20.25h-1.25z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePersonChalkboardBoldIcon);
export default ForwardRef;
