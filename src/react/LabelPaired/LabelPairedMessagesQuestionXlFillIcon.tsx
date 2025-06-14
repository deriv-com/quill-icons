import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h13.5c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3H9.469l-3.797 2.86c-.234.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V21H3c-1.687 0-3-1.312-3-3zm12 13.5h4.5c2.484 0 4.5-2.016 4.5-4.5v-6h6c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3h-1.5v2.25c0 .328-.187.563-.422.703-.281.094-.562.094-.797-.094L20.484 27H15c-1.687 0-3-1.312-3-3zM6.375 10.36l-.047.046c-.14.469.094 1.031.61 1.172.468.188.984-.047 1.171-.562v-.047c.047-.14.188-.188.329-.188h2.25c.328 0 .609.235.609.563 0 .234-.14.422-.281.515L9.28 12.891c-.328.14-.469.468-.469.797v.515a.94.94 0 0 0 .938.938c.469 0 .89-.422.938-.938l1.218-.703c.797-.422 1.266-1.266 1.266-2.156 0-1.36-1.125-2.438-2.485-2.438h-2.25c-.937 0-1.78.563-2.062 1.453m4.594 7.265c.047-.422-.188-.89-.61-1.125a1.23 1.23 0 0 0-1.265 0c-.422.234-.656.703-.61 1.125-.046.469.188.938.61 1.172.375.234.89.234 1.265 0 .422-.235.657-.703.61-1.172' />
    </g>
    <defs>
      <clipPath id='cf3ede4060289f88931ded6bbb36743c__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionXlFillIcon);
export default ForwardRef;
