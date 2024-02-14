import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 4.25h.562q.352.023.375.375-.023.352-.375.375h-.562q-.564.023-.938.375-.352.375-.375.938v.562q-.023.352-.375.375-.352-.023-.375-.375v-.562q.024-.868.61-1.454.585-.585 1.453-.609M.625 8q.352.023.375.375v2.25q-.023.352-.375.375-.352-.023-.375-.375v-2.25Q.273 8.023.625 8m9.75 0q.352.023.375.375v2.25q-.023.352-.375.375-.352-.023-.375-.375v-2.25q.023-.352.375-.375m0-.75q-.352-.023-.375-.375v-.562a1.4 1.4 0 0 0-.375-.938A1.4 1.4 0 0 0 8.688 5h-.563q-.352-.023-.375-.375.023-.352.375-.375h.563q.867.024 1.453.61.585.585.609 1.452v.563q-.023.352-.375.375m.375 4.875v.563q-.024.867-.61 1.453-.585.585-1.453.609h-.562q-.352-.023-.375-.375.023-.352.375-.375h.563q.562-.023.937-.375.352-.375.375-.937v-.563q.023-.352.375-.375.352.023.375.375m-9.75 0v.563q.023.562.375.937.375.352.938.375h.562q.352.023.375.375-.023.352-.375.375h-.562q-.868-.024-1.454-.61-.585-.585-.609-1.453v-.562q.023-.352.375-.375.352.023.375.375m3.375 2.625q-.352-.023-.375-.375.023-.352.375-.375h2.25q.352.023.375.375-.023.352-.375.375zM4 4.625q.023-.352.375-.375h2.25q.352.023.375.375-.023.352-.375.375h-2.25Q4.023 4.977 4 4.625' />
    </g>
    <defs>
      <clipPath id='1b16c9e6d14d6f689af8cab9c3f6866d__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderCaptionRegularIcon);
export default ForwardRef;
