import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridCaptionBoldIcon = (
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
      <path d='M2.313 5.188H1.187v1.125h1.126zM1.187 4.25h1.126a.94.94 0 0 1 .937.938v1.125c0 .539-.422.937-.937.937H1.187a.91.91 0 0 1-.937-.937V5.188c0-.516.398-.938.938-.938m1.126 4.688H1.187v1.124h1.126zM1.187 8h1.126a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937V8.937C.25 8.423.648 8 1.188 8m0 4.688v1.124h1.126v-1.124zm-.937 0c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937zm5.813-7.5H4.938v1.125h1.125zM4.938 4.25h1.125A.94.94 0 0 1 7 5.188v1.125c0 .539-.422.937-.937.937H4.938A.91.91 0 0 1 4 6.313V5.188c0-.516.398-.938.938-.938m0 4.688v1.124h1.125V8.939zm-.938 0C4 8.422 4.398 8 4.938 8h1.125A.94.94 0 0 1 7 8.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 10.063zm2.063 3.75H4.938v1.124h1.125zm-1.125-.938h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 13.813v-1.126c0-.515.398-.937.938-.937m3.75-6.562v1.125h1.124V5.188zm-.938 0c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.125c0 .539-.422.937-.937.937H8.687a.91.91 0 0 1-.937-.937zm2.063 3.75H8.687v1.124h1.126zM8.687 8h1.126a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937V8.937c0-.515.398-.937.938-.937m0 4.688v1.124h1.126v-1.124zm-.937 0c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937z' />
    </g>
    <defs>
      <clipPath id='0b072bc689798d97c2c06be8ab4e8adb__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridCaptionBoldIcon);
export default ForwardRef;
