import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m3.938-2.016c.164-.562.68-.984 1.265-.984h1.36c.82 0 1.5.68 1.5 1.523 0 .563-.329 1.079-.82 1.336l-.868.446v.445c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.68c0-.14.07-.28.188-.328L6.89 8.68a.72.72 0 0 0 .422-.657c0-.421-.352-.773-.75-.773h-1.36c-.234 0-.469.188-.539.422v.023c-.047.188-.258.328-.445.258a.37.37 0 0 1-.282-.445zm1.5 4.266c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' />
    </g>
    <defs>
      <clipPath id='9da074b1647d52e6cbcb8d4873a49c16__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionCaptionRegularIcon);
export default ForwardRef;
