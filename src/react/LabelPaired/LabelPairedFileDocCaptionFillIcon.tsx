import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocCaptionFillIcon = (
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
      <path d='M0 5c0-.82.656-1.5 1.5-1.5h3.75v3c0 .422.328.75.75.75h3v3.375H4.125c-.844 0-1.5.68-1.5 1.5V15.5H1.5A1.48 1.48 0 0 1 0 14zm9 1.5H6v-3zm-4.875 5.25h.75c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-.75a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.375 3h.375a.385.385 0 0 0 .375-.375v-1.5a.4.4 0 0 0-.375-.375H4.5zm6.188-3h.374a.94.94 0 0 1 .938.938v.187c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.187a.2.2 0 0 0-.187-.188h-.376a.185.185 0 0 0-.187.188v1.874c0 .118.07.188.188.188h.374c.094 0 .188-.07.188-.187v-.188c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.188c0 .539-.422.937-.937.937h-.376a.91.91 0 0 1-.937-.937v-1.876c0-.515.398-.937.938-.937m-3.938.938c0-.516.398-.938.938-.938h.375a.94.94 0 0 1 .937.938v1.874c0 .54-.422.938-.937.938h-.376a.91.91 0 0 1-.937-.937zm.938-.188a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188h.375c.093 0 .187-.07.187-.187v-1.876a.2.2 0 0 0-.187-.187z' />
    </g>
    <defs>
      <clipPath id='9ec1ac081795632ed38dc9e66b46be22__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocCaptionFillIcon);
export default ForwardRef;
