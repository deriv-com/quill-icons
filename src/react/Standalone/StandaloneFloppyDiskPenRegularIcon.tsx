import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFloppyDiskPenRegularIcon = (
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
    <path d='M6 10.25v12.5q0 .547.352.898.35.352.898.352h7.89l-.312 1.25H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T7.25 7.75h9.61q1.015 0 1.757.742l2.89 2.89q.743.744.743 1.798v1.914L21 16.344V13.18q0-.547-.352-.899l-2.93-2.93a1.07 1.07 0 0 0-.468-.273v3.672q0 .547-.352.898Q16.548 14 16 14H8.5q-.547 0-.898-.352-.352-.35-.352-.898V9q-.547 0-.898.352Q6 9.702 6 10.25M8.5 9v3.75H16V9zm3.125 10q.038 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.938-.47-1.876 0-.898.585-.937 1.64m1.875 3.125q-1.758-.04-2.695-1.562-.86-1.563 0-3.125.937-1.524 2.695-1.563 1.758.039 2.695 1.563.86 1.562 0 3.125-.937 1.523-2.695 1.562m11.523-5.312q-.468-.352-.898 0l-.977.976 1.563 1.563.977-.977q.351-.43 0-.86zm-6.875 6.015a.5.5 0 0 0-.195.274l-.469 1.914 1.914-.47a.6.6 0 0 0 .274-.155l4.18-4.141-1.563-1.562zm5.118-6.875q.546-.586 1.289-.586.78 0 1.328.586l.703.664q.547.586.547 1.328t-.547 1.328L20.57 25.29q-.35.35-.86.469l-2.929.742q-.352.078-.586-.156-.234-.273-.156-.625l.703-2.89q.157-.51.508-.9z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskPenRegularIcon);
export default ForwardRef;
