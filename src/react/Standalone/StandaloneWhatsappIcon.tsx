import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWhatsappIcon = (
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
    <path d='M22.094 10.328c1.64 1.64 2.656 3.79 2.656 6.133 0 4.766-3.984 8.672-8.79 8.672-1.444 0-2.85-.39-4.14-1.055L7.25 25.25l1.21-4.492a8.7 8.7 0 0 1-1.17-4.336c0-4.766 3.905-8.672 8.67-8.672 2.345 0 4.532.938 6.134 2.578m-6.133 13.32c3.984 0 7.305-3.242 7.305-7.187 0-1.953-.82-3.75-2.188-5.117A7.12 7.12 0 0 0 16 9.234c-3.984 0-7.227 3.243-7.227 7.188 0 1.367.391 2.695 1.094 3.867l.195.273-.742 2.657 2.735-.742.234.156a7.2 7.2 0 0 0 3.672 1.015m3.984-5.39c.196.117.352.156.39.273.08.078.08.508-.116 1.016s-1.055.976-1.446 1.015c-.703.118-1.25.079-2.617-.546-2.187-.938-3.593-3.125-3.71-3.243-.118-.156-.86-1.171-.86-2.265 0-1.055.547-1.563.742-1.797a.73.73 0 0 1 .586-.274h.39c.157 0 .313-.039.508.391.157.43.626 1.485.665 1.602s.078.234 0 .39c-.391.82-.86.782-.625 1.172.859 1.445 1.68 1.953 2.968 2.578.196.117.313.078.47-.039.116-.156.546-.664.663-.86.156-.233.313-.194.508-.116s1.25.586 1.484.703' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWhatsappIcon);
export default ForwardRef;
