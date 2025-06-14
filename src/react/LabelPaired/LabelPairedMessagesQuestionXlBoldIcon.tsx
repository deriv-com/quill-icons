import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionXlBoldIcon = (
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
      <path d='M3.375 8.25A1.11 1.11 0 0 0 2.25 9.375v8.25c0 .656.469 1.125 1.125 1.125h2.25c.61 0 1.125.516 1.125 1.125v.938l2.719-1.875c.187-.094.422-.188.656-.188h6a1.11 1.11 0 0 0 1.125-1.125v-8.25a1.14 1.14 0 0 0-1.125-1.125zM0 9.375C0 7.547 1.5 6 3.375 6h12.75C17.953 6 19.5 7.547 19.5 9.375v8.25C19.5 19.5 17.953 21 16.125 21h-5.672l-4.219 2.813c-.375.234-.796.28-1.171.093a1.18 1.18 0 0 1-.563-1.031V21H3.375A3.36 3.36 0 0 1 0 17.625zM12 22.5h2.25v1.125c0 .656.469 1.125 1.125 1.125h4.5c.188 0 .422.094.61.188l2.765 1.875v-.938c0-.61.469-1.125 1.125-1.125h2.25a1.11 1.11 0 0 0 1.125-1.125v-8.25a1.14 1.14 0 0 0-1.125-1.125H21V12h5.625C28.453 12 30 13.547 30 15.375v8.25C30 25.5 28.453 27 26.625 27H25.5v1.875c0 .422-.234.797-.61 1.031-.374.188-.796.14-1.171-.093L19.5 27h-4.125A3.36 3.36 0 0 1 12 23.625zM6.89 10.547a1.86 1.86 0 0 1 1.735-1.219h1.922a2.05 2.05 0 0 1 2.062 2.063c0 .703-.421 1.406-1.03 1.734l-1.079.656c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.422c0-.28.14-.515.375-.656l1.453-.844a.52.52 0 0 0 .281-.468.54.54 0 0 0-.562-.563H8.625a.32.32 0 0 0-.281.188l-.047.046c-.14.376-.563.61-.938.47a.785.785 0 0 1-.468-.985m1.782 6.14a.915.915 0 0 1 .515-.937.91.91 0 0 1 1.079 0c.328.188.562.563.515.938.047.421-.187.796-.515.984a.915.915 0 0 1-1.078 0c-.376-.188-.563-.563-.516-.985' />
    </g>
    <defs>
      <clipPath id='bbe0db14bfe6f85bf42bbccb9aed778a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionXlBoldIcon);
export default ForwardRef;
