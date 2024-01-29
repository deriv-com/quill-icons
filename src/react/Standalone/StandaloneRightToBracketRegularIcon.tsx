import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRightToBracketRegularIcon = (
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
    <path d='M18.46 16.578q.04-.039.04-.078t-.04-.078l-5.155-4.844q-.078-.078-.157-.078a.305.305 0 0 0-.273.273V14q-.039.585-.625.625H7.563q-.274.039-.313.313v3.124q.039.274.313.313h4.687q.585.039.625.625v2.227a.305.305 0 0 0 .273.273q.08 0 .157-.078zm1.29-.078q0 .585-.43.977l-5.156 4.882a1.46 1.46 0 0 1-1.016.391q-.664 0-1.093-.43-.43-.429-.43-1.093v-1.602H7.563q-.665 0-1.094-.469A1.42 1.42 0 0 1 6 18.063v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469h4.063v-1.602q0-.664.43-1.093.429-.43 1.093-.43.587 0 1.016.43l5.156 4.843q.43.39.43.977m-.625 7.5h3.75q.78-.039 1.328-.547.508-.546.547-1.328v-11.25a2.04 2.04 0 0 0-.547-1.328A2.04 2.04 0 0 0 22.875 9h-3.75q-.585-.039-.625-.625.039-.585.625-.625h3.75q1.328.04 2.227.898.858.9.898 2.227v11.25q-.04 1.328-.898 2.227-.9.858-2.227.898h-3.75q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightToBracketRegularIcon);
export default ForwardRef;
