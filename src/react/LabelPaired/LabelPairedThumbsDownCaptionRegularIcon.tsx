import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownCaptionRegularIcon = (
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
      <path d='M6.773 13.578q.188.492.68.399.492-.188.399-.68l-.094-.399a6 6 0 0 0-.586-1.335.36.36 0 0 1-.024-.376.37.37 0 0 1 .329-.187H10.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54q-.024-.422-.352-.633-.257-.21-.117-.492a.74.74 0 0 0 .094-.375q-.024-.469-.398-.68a.35.35 0 0 1-.211-.234.47.47 0 0 1 .07-.328.65.65 0 0 0 .164-.445q-.023-.54-.516-.727-.28-.117-.257-.422a.5.5 0 0 0 .023-.164.73.73 0 0 0-.21-.54A.73.73 0 0 0 9 5H6.914q-.585 0-1.055.305l-.89.61q-.328.21-.54.538-.21.258-.515.094-.257-.21-.117-.516.305-.445.75-.75l.89-.586a2.6 2.6 0 0 1 1.454-.445H9q.633.024 1.055.445.421.423.445 1.055v.023q.703.422.75 1.29 0 .305-.117.585.468.423.492 1.102 0 .235-.07.445.421.422.445 1.055a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H8.11q.233.47.374.96l.094.376q.141.54-.117 1.008-.281.445-.797.61-.54.14-1.008-.118-.445-.258-.61-.797l-.116-.398a3.18 3.18 0 0 0-1.36-1.852l-.07-.047.188-.281-.188.281a2.1 2.1 0 0 1-.68-.656q-.187-.304.094-.516.282-.164.516.094.187.282.468.445l.07.047q1.29.844 1.688 2.297zM.75 11.75h1.5V6.5H.75zm-.75 0V6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21h1.5a.73.73 0 0 1 .54.21q.21.212.21.54v5.25a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54' />
    </g>
    <defs>
      <clipPath id='a9b791d926d5ffc6ffd0ba06a5449f6d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownCaptionRegularIcon);
export default ForwardRef;