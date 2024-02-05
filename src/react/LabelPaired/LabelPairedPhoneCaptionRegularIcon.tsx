import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneCaptionRegularIcon = (
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
      <path d='m8.813 9.945 2.624 1.125q.306.14.47.446.14.28.07.609l-.563 2.625q-.188.703-.914.75h-.422a2 2 0 0 0-.328-.023q-2.743-.235-4.945-1.665a10.5 10.5 0 0 1-3.492-3.726Q.022 7.812 0 5q.047-.727.75-.914l2.625-.563a.83.83 0 0 1 .61.094.88.88 0 0 1 .445.446l1.125 2.625q.234.632-.282 1.101l-.937.774a7.16 7.16 0 0 0 2.601 2.601l.774-.937q.469-.516 1.101-.282M10.5 14.75q.14 0 .188-.14l.562-2.626q.024-.164-.117-.21l-2.625-1.126q-.117-.046-.211.047l-.774.961q-.42.422-.96.164A7.74 7.74 0 0 1 3.68 8.937q-.259-.54.164-.96l.96-.774q.094-.094.048-.21L3.727 4.366q-.071-.141-.211-.117L.89 4.813Q.75 4.858.75 5q.023 2.719 1.336 4.922a9.6 9.6 0 0 0 3.492 3.492q2.204 1.312 4.922 1.336' />
    </g>
    <defs>
      <clipPath id='c6abb43e17799fa2352bf153ef9d5eb8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionRegularIcon);
export default ForwardRef;
