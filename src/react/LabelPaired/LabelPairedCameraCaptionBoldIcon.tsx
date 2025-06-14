import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.664 4.25h2.649c.585 0 1.078.375 1.265.914l.188.586H10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5h1.71l.212-.586.515.164-.515-.164c.164-.539.68-.914 1.242-.914m-.187 1.266-.329.984c-.07.234-.28.375-.539.375H1.5a.385.385 0 0 0-.375.375v6c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375v-6a.4.4 0 0 0-.375-.375H8.367c-.258 0-.469-.14-.539-.375L7.5 5.516a.2.2 0 0 0-.187-.141H4.664a.2.2 0 0 0-.187.14M6 12.875a2.58 2.58 0 0 1-2.273-1.312 2.52 2.52 0 0 1 0-2.626A2.63 2.63 0 0 1 6 7.626c.938 0 1.781.516 2.25 1.313.492.82.492 1.828 0 2.624A2.57 2.57 0 0 1 6 12.876M4.5 10.25c0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313 0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29' />
    </g>
    <defs>
      <clipPath id='0abd8dbff5e7ddc4afc647fba8f1c82e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraCaptionBoldIcon);
export default ForwardRef;
