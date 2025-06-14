import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketXlRegularIcon = (
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
      <path d='M14.953 18.094S15 18.047 15 18l-.047-.047-6.187-5.86A.36.36 0 0 0 8.53 12c-.14 0-.281.14-.281.328V15c0 .422-.375.75-.75.75H1.875a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375H7.5c.375 0 .75.375.75.75v2.719c0 .14.14.281.281.281.094 0 .188 0 .235-.047zM16.5 18c0 .469-.187.89-.516 1.219L9.797 25.03c-.328.328-.797.469-1.266.469a1.78 1.78 0 0 1-1.781-1.781V21.75H1.875C.797 21.75 0 20.953 0 19.875v-3.75a1.85 1.85 0 0 1 1.875-1.875H6.75v-1.922c0-.984.797-1.828 1.781-1.828.469 0 .938.188 1.266.516l6.187 5.812c.329.328.516.75.516 1.172m-.75 9h4.5a2.25 2.25 0 0 0 2.25-2.25v-13.5c0-1.219-1.031-2.25-2.25-2.25h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5A3.76 3.76 0 0 1 24 11.25v13.5c0 2.11-1.687 3.75-3.75 3.75h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='16e65968f43f62aa0e95005b4684b564__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlRegularIcon);
export default ForwardRef;
