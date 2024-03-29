import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLanguageRegularIcon = (
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
    <path d='M15.375 10.25H6c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h9.375zm1.25 0v12.5H26c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zM28.5 11.5v10c0 1.406-1.133 2.5-2.5 2.5H6a2.47 2.47 0 0 1-2.5-2.5v-10C3.5 10.133 4.594 9 6 9h20c1.367 0 2.5 1.133 2.5 2.5m-18.203 1.68 2.5 6.25c.156.312 0 .664-.352.78-.312.157-.664 0-.78-.35l-.352-.82H8.148l-.351.82c-.117.35-.469.507-.781.35-.352-.116-.508-.468-.352-.78l2.5-6.25a.59.59 0 0 1 .586-.43c.234 0 .469.156.547.43m-.547 1.914L8.656 17.75h2.149zm13.125-1.719V14h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.195l-.157.469c-.39 1.015-.976 1.953-1.718 2.695.117.078.234.156.39.234l.742.47c.274.155.391.546.196.859a.62.62 0 0 1-.86.195l-.742-.43c-.234-.156-.468-.312-.703-.508-.312.235-.664.43-1.015.625l-.665.352c-.312.156-.703 0-.859-.313-.156-.273 0-.664.273-.82l.704-.351c.195-.079.39-.196.586-.313l-.82-.82c-.235-.274-.235-.664 0-.899.273-.234.663-.234.898 0l.898.899c.664-.625 1.172-1.407 1.524-2.305v-.039h-4.727a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5v-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLanguageRegularIcon);
export default ForwardRef;
