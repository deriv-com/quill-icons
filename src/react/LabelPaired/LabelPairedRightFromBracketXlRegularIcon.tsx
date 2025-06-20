import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m22.453 17.953-6.187-5.86A.36.36 0 0 0 16.03 12c-.14 0-.281.14-.281.328V15c0 .422-.375.75-.75.75H9.375a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375H15c.375 0 .75.375.75.75v2.719c0 .14.14.281.281.281.094 0 .188 0 .235-.047l6.187-5.86s.047-.046.047-.093zM24 18c0 .469-.187.89-.516 1.219l-6.187 5.812c-.328.328-.797.469-1.266.469a1.78 1.78 0 0 1-1.781-1.781V21.75H9.375c-1.078 0-1.875-.797-1.875-1.875v-3.75c0-1.031.797-1.875 1.875-1.875h4.875v-1.922c0-.984.797-1.828 1.781-1.828.469 0 .938.188 1.266.516l6.187 5.812c.328.328.516.75.516 1.172M8.25 9h-4.5a2.25 2.25 0 0 0-2.25 2.25v13.5c0 1.266.984 2.25 2.25 2.25h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5C1.64 28.5 0 26.86 0 24.75v-13.5C0 9.188 1.64 7.5 3.75 7.5h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75' />
    </g>
    <defs>
      <clipPath id='8f6c97a12572961365f1f21d2aa8db15__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlRegularIcon);
export default ForwardRef;
