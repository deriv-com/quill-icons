import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m7.875-4.031C8.203 12.844 9.235 12 10.406 12h2.719c1.64 0 3 1.36 3 3.047 0 1.125-.656 2.156-1.64 2.672l-1.735.89v.891c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-1.36c0-.28.14-.562.375-.656l2.156-1.125c.516-.234.844-.75.844-1.312 0-.844-.703-1.547-1.5-1.547h-2.719c-.469 0-.937.375-1.078.844v.047c-.094.375-.515.656-.89.515a.74.74 0 0 1-.563-.89zm3 8.531c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12 23.625c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='325e4fd787f6518ff4452aa830ca5cf7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionXlRegularIcon);
export default ForwardRef;
