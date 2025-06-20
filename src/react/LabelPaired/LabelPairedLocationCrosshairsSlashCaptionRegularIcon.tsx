import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.258 12.828.633.492c-.586.375-1.29.61-2.016.68v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V14A4.514 4.514 0 0 1 3 9.875H1.875A.37.37 0 0 1 1.5 9.5c0-.187.164-.375.375-.375H3a5.5 5.5 0 0 1 .234-1.078l.633.515a3.1 3.1 0 0 0-.117.938 3.73 3.73 0 0 0 3.75 3.75c.633 0 1.242-.14 1.758-.422M7.125 5.023V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.148a4.51 4.51 0 0 1 4.102 4.102h1.148c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.148c-.024.375-.118.75-.235 1.078l-.633-.492c.094-.305.141-.633.141-.961A3.76 3.76 0 0 0 7.5 5.75c-.656 0-1.242.164-1.781.445l-.633-.492c.61-.375 1.289-.61 2.039-.68M7.5 11.75a2.24 2.24 0 0 1-2.25-2.11l1.29 1.032.022.023 1.313 1.032c-.117.023-.258.023-.375.023m-.398-4.453c.117-.024.257-.047.398-.047 1.195 0 2.156.938 2.227 2.133l-1.29-1.031-.023-.024zM.586 3.594l14.273 11.25c.141.117.188.375.047.515a.35.35 0 0 1-.515.07L.14 4.18c-.164-.117-.211-.374-.07-.515.117-.164.374-.21.515-.07' />
    </g>
    <defs>
      <clipPath id='00d8cf4faa919c9c4ae7ba2b94239b49__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashCaptionRegularIcon);
export default ForwardRef;
