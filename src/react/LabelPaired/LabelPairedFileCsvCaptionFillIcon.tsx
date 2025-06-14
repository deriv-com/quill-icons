import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvCaptionFillIcon = (
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
      <path d='M0 5c0-.82.656-1.5 1.5-1.5h3.75v3c0 .422.328.75.75.75h3v3.375H4.125c-.844 0-1.5.68-1.5 1.5V15.5H1.5A1.48 1.48 0 0 1 0 14zm9 1.5H6v-3zm-4.312 5.25h.375a.94.94 0 0 1 .937.938v.187c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.187a.2.2 0 0 0-.187-.188h-.375a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188h.375c.093 0 .187-.07.187-.187v-.188c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.188c0 .539-.422.937-.937.937h-.375a.91.91 0 0 1-.938-.937v-1.876c0-.515.398-.937.938-.937m3.117 0h.82c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.82c-.188 0-.305.14-.305.328 0 .117.07.211.164.281l.89.375c.376.164.633.563.633.961 0 .586-.492 1.055-1.078 1.055h-.984a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.984c.188 0 .329-.117.329-.305a.3.3 0 0 0-.188-.28l-.89-.376c-.376-.164-.61-.562-.61-.96 0-.587.469-1.079 1.055-1.079m2.32 0c.188 0 .375.188.375.375v.75c0 .54.117 1.078.375 1.547a3.5 3.5 0 0 0 .375-1.547v-.75c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.75c0 .82-.258 1.617-.703 2.297l-.117.164a.34.34 0 0 1-.305.164c-.14 0-.258-.047-.328-.164l-.117-.164a4.2 4.2 0 0 1-.68-2.297v-.75c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='b517ba91a929076818857943cfb3add2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvCaptionFillIcon);
export default ForwardRef;
