import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridCaptionFillIcon = (
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
      <path d='M.25 5.188c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.125c0 .539-.422.937-.937.937H1.187a.91.91 0 0 1-.937-.937zm0 3.75C.25 8.422.648 8 1.188 8h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937zm3 3.75v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937v-1.126c0-.515.398-.937.938-.937h1.125a.94.94 0 0 1 .937.938m.75-7.5c0-.516.398-.938.938-.938h1.125A.94.94 0 0 1 7 5.188v1.125c0 .539-.422.937-.937.937H4.938A.91.91 0 0 1 4 6.313zm3 3.75v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 10.063V8.937C4 8.423 4.398 8 4.938 8h1.125A.94.94 0 0 1 7 8.938m-3 3.75c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 13.813zm6.75-7.5v1.125c0 .539-.422.937-.937.937H8.687a.91.91 0 0 1-.937-.937V5.188c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938m-3 3.75c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937zm3 3.75v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937v-1.126c0-.515.398-.937.938-.937h1.124a.94.94 0 0 1 .938.938' />
    </g>
    <defs>
      <clipPath id='315186baf207e8f9dedc0974a3d831a3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridCaptionFillIcon);
export default ForwardRef;
