import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEyeSlashBoldIcon = (
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
    <path d='m4.984 6.734 4.375 3.399C11.117 8.805 13.305 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.508 1.25-1.563 3.047-3.125 4.61l4.101 3.241c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L3.853 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m5.899 4.61 1.797 1.406A5 5 0 0 1 16 11.5c2.734 0 5 2.266 5 5 0 .86-.195 1.64-.586 2.305l2.11 1.64c1.367-1.328 2.304-2.851 2.773-3.945-.508-1.172-1.563-2.812-3.086-4.219-1.602-1.484-3.672-2.656-6.211-2.656-1.992 0-3.672.703-5.117 1.719m8.008 6.289c.156-.352.234-.742.234-1.133A3.134 3.134 0 0 0 16 13.375h-.078c.039.234.078.43.078.625 0 .43-.117.781-.273 1.133zM20.92 24A10.2 10.2 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977 15.6 15.6 0 0 1 1.914-3.203L8.188 14a12.3 12.3 0 0 0-1.524 2.5c.547 1.172 1.563 2.852 3.086 4.258 1.602 1.484 3.672 2.617 6.25 2.617a8.35 8.35 0 0 0 3.281-.664zm-3.437-2.695a6.3 6.3 0 0 1-1.523.195c-2.734 0-5-2.227-5-5 0-.078.039-.195.039-.312l2.188 1.718a3.03 3.03 0 0 0 2.109 1.64z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEyeSlashBoldIcon);
export default ForwardRef;
