import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHandGestureTapRightFillIcon = (
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
    <path d='M20.531 13.96c.508.235.703.821.469 1.29l-2.93 6.21c-.117.196 0 .43.157.509.234.078.43 0 .546-.196l.547-1.21c.04.039.078.117.117.156l.235.547c.195.43.195.898 0 1.328l-.39.82a3.06 3.06 0 0 1-2.071 1.719l-.156.039c-.86.234-1.797.117-2.617-.274l-2.618-1.25c-1.562-.703-2.226-2.578-1.484-4.14l1.016-2.11c.273-.585.976-.859 1.562-.585.274.156.469.39.586.664a1.11 1.11 0 0 1 1.484-.508c.313.117.47.351.586.625a1.207 1.207 0 0 1 1.524-.508c.273.156.468.352.586.625l1.562-3.281c.195-.47.781-.703 1.29-.47m-2.5 1.642.664-1.368c.352-.742 1.29-1.093 2.07-.742a1.616 1.616 0 0 1 .743 2.11l-.586 1.21a2.52 2.52 0 0 0 1.797-2.421c0-1.368-1.094-2.5-2.5-2.5a2.52 2.52 0 0 0-2.5 2.5c0 .43.117.859.312 1.21M23.97 7.75c-.39 0-.742.352-.742.781v15.977c0 .43.351.742.742.742.43 0 .781-.312.781-.742V8.53a.784.784 0 0 0-.781-.781' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHandGestureTapRightFillIcon);
export default ForwardRef;
