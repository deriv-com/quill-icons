import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnCaptionRegularIcon = (
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
      <path d='M14.203 3.71a.385.385 0 0 1-.164.517l-1.5.75c-.187.093-.422 0-.516-.165a.385.385 0 0 1 .165-.515l1.5-.75a.385.385 0 0 1 .515.164m-7.078.165c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.398C9.75 4.461 11.25 6.055 11.25 8v.703a3.85 3.85 0 0 0 1.125 2.719l.07.07c.188.188.305.469.305.727a1.05 1.05 0 0 1-1.055 1.054H3.281c-.586-.023-1.031-.468-1.031-1.054 0-.281.094-.54.305-.727l.047-.07A3.89 3.89 0 0 0 3.75 8.68V8a3.74 3.74 0 0 1 3.375-3.727zM7.5 5c-1.664 0-3 1.36-3 3v.703c0 1.219-.492 2.39-1.36 3.258l-.07.07c-.047.047-.093.117-.093.188 0 .164.14.304.304.304h8.414A.31.31 0 0 0 12 12.22c0-.07-.047-.14-.094-.188l-.07-.07a4.62 4.62 0 0 1-1.36-3.258V8c0-1.64-1.335-3-3-3zm-.727 9.258a.76.76 0 0 0 .727.492.75.75 0 0 0 .703-.492c.07-.188.281-.305.469-.235s.305.282.234.493c-.21.586-.773.984-1.406.984a1.5 1.5 0 0 1-1.43-.984.393.393 0 0 1 .235-.493c.187-.07.398.047.468.235M0 7.625c0-.187.164-.375.375-.375H2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 7.625m12.75-.375h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H12.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M.938 4.227a.385.385 0 0 1-.165-.516.385.385 0 0 1 .516-.164l1.5.75a.385.385 0 0 1 .164.516c-.094.164-.328.257-.515.164z' />
    </g>
    <defs>
      <clipPath id='395d19e8d20921b4724c44a05c0fabf8__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnCaptionRegularIcon);
export default ForwardRef;
