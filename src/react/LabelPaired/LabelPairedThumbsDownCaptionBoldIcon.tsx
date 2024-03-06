import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownCaptionBoldIcon = (
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
      <path d='M7.594 14.68q-.703.187-1.29-.14a1.68 1.68 0 0 1-.796-1.009l-.14-.469a2.2 2.2 0 0 0-.446-.82l-1.219-1.336q-.304-.398.047-.773.422-.328.797.023l1.195 1.336q.492.54.703 1.266l.14.469q.189.468.704.375.47-.188.375-.704l-.14-.468a3.9 3.9 0 0 0-.61-1.29.57.57 0 0 1-.047-.585.59.59 0 0 1 .492-.305H10.5q.352-.023.375-.375-.024-.258-.234-.352a.56.56 0 0 1-.352-.398.51.51 0 0 1 .117-.492.4.4 0 0 0 .094-.258q-.024-.304-.305-.375a.57.57 0 0 1-.422-.352.55.55 0 0 1 .094-.539.38.38 0 0 0 .07-.234q-.023-.258-.234-.352-.446-.21-.351-.68a.2.2 0 0 0 .023-.093Q9.352 5.398 9 5.375H6.727q-.47 0-.844.258l-1.453.96q-.445.235-.774-.163-.258-.445.164-.774l1.43-.96a2.64 2.64 0 0 1 1.477-.446H9q.633 0 1.055.422.421.4.445 1.031.54.422.563 1.172 0 .164-.024.305.562.421.586 1.195 0 .235-.07.445.421.422.445 1.055a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H8.344q.164.375.281.75l.117.469q.187.703-.14 1.289-.33.585-1.008.797M.75 12.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21h1.5a.73.73 0 0 1 .54.21q.21.212.21.54v5.25a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21z' />
    </g>
    <defs>
      <clipPath id='7f80fec7993e6edf807e671c67e065bb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownCaptionBoldIcon);
export default ForwardRef;
