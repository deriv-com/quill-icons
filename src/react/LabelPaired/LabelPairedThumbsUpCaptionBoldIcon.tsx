import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpCaptionBoldIcon = (
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
      <path d='M7.594 4.32q.68.211 1.008.797.327.585.14 1.29l-.117.468q-.117.375-.281.75H10.5q.633.024 1.055.445.421.422.445 1.055a1.52 1.52 0 0 1-.445 1.055q.07.21.07.445-.023.75-.586 1.195.024.141.024.305-.024.75-.563 1.172-.024.633-.445 1.031-.422.399-1.055.422H6.727a2.64 2.64 0 0 1-1.477-.445l-1.43-.961q-.421-.328-.164-.774.329-.398.774-.164l1.453.961q.375.258.844.258H9q.352-.023.375-.375a.2.2 0 0 0-.023-.094q-.095-.468.351-.68.21-.094.235-.351a.38.38 0 0 0-.07-.234.57.57 0 0 1-.095-.54.57.57 0 0 1 .422-.351q.282-.07.305-.375a.4.4 0 0 0-.094-.258.51.51 0 0 1-.117-.492.56.56 0 0 1 .352-.398q.21-.094.234-.352-.023-.352-.375-.375H7.36a.53.53 0 0 1-.493-.305.57.57 0 0 1 .047-.586q.421-.585.61-1.289l.14-.468q.094-.516-.375-.704-.516-.093-.703.375l-.14.47q-.212.726-.704 1.288L4.547 8.844q-.375.351-.797.047-.351-.4-.047-.797l1.219-1.336q.304-.352.445-.82l.14-.47q.212-.678.798-1.007.585-.329 1.289-.14M.75 8h1.5a.73.73 0 0 1 .54.21q.21.212.21.54V14a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H.75a.73.73 0 0 1-.54-.21A.73.73 0 0 1 0 14V8.75a.73.73 0 0 1 .21-.54A.73.73 0 0 1 .75 8' />
    </g>
    <defs>
      <clipPath id='9eb9fc4e255fe01f39344a3875b41d54__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpCaptionBoldIcon);
export default ForwardRef;
