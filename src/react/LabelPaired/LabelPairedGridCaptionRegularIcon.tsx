import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridCaptionRegularIcon = (
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
      <path d='M2.313 5H1.187q-.163.024-.187.188v1.125q.024.163.188.187h1.125q.163-.024.187-.187V5.188Q2.476 5.023 2.313 5m-1.126-.75h1.126q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.657V5.188q0-.398.281-.656a.85.85 0 0 1 .657-.281m1.126 4.5H1.187q-.163.024-.187.188v1.124q.024.165.188.188h1.125q.163-.024.187-.187V8.937q-.024-.163-.187-.187M1.187 8h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656V8.937q0-.398.281-.656A.85.85 0 0 1 1.188 8m0 4.5q-.163.023-.187.188v1.124q.024.165.188.188h1.125q.163-.024.187-.187v-1.126q-.024-.163-.187-.187zm-.937.188q0-.399.281-.657a.85.85 0 0 1 .657-.281h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656zM6.063 5H4.938q-.165.024-.188.188v1.125q.024.163.188.187h1.125q.163-.024.187-.187V5.188Q6.226 5.023 6.063 5m-1.125-.75h1.125q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281A.85.85 0 0 1 4 6.312V5.188q0-.398.281-.656a.85.85 0 0 1 .657-.281m0 4.5q-.165.024-.188.188v1.124q.024.165.188.188h1.125q.163-.024.187-.187V8.937q-.024-.163-.187-.187zM4 8.938q0-.399.281-.657A.85.85 0 0 1 4.938 8h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656zM6.063 12.5H4.938q-.165.023-.188.188v1.124q.024.165.188.188h1.125q.163-.024.187-.187v-1.126q-.024-.163-.187-.187m-1.125-.75h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656v-1.126q0-.398.281-.656a.85.85 0 0 1 .657-.281M8.688 5q-.165.024-.188.188v1.125q.024.163.188.187h1.124q.165-.024.188-.187V5.188Q9.976 5.023 9.813 5zm-.938.188q0-.399.281-.657a.85.85 0 0 1 .656-.281h1.126q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.657zM9.813 8.75H8.687q-.163.024-.187.188v1.124q.024.165.188.188h1.124q.165-.024.188-.187V8.937q-.024-.163-.187-.187M8.687 8h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656V8.937q0-.398.281-.656A.85.85 0 0 1 8.687 8m0 4.5q-.163.023-.187.188v1.124q.024.165.188.188h1.124q.165-.024.188-.187v-1.126q-.024-.163-.187-.187zm-.937.188q0-.399.281-.657a.85.85 0 0 1 .656-.281h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656z' />
    </g>
    <defs>
      <clipPath id='0636491f88a8eaae477e25179897aa96__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridCaptionRegularIcon);
export default ForwardRef;
