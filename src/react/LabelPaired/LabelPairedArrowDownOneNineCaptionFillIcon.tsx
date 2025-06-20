import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.797 4.39c.21.165.328.376.328.61v2.25h.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H9.25A.74.74 0 0 1 8.5 8c0-.398.328-.75.75-.75h.375V6.055l-.14.047a.79.79 0 0 1-.962-.47.79.79 0 0 1 .47-.96l1.124-.375c.235-.07.492-.047.68.094M4 14.75a.73.73 0 0 1-.562-.234l-2.063-2.25a.744.744 0 0 1 .047-1.055.744.744 0 0 1 1.055.047l.773.82V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.078l.75-.82a.744.744 0 0 1 1.055-.047c.304.281.328.75.047 1.055l-2.063 2.25A.68.68 0 0 1 4 14.75m6.047-4.055a.75.75 0 0 0-.352 1.008c.164.375.61.54.985.352a.72.72 0 0 0 .351-.985c-.164-.375-.61-.539-.984-.375m-.305 2.649a2.02 2.02 0 0 1-1.43-1.946 2.05 2.05 0 0 1 2.063-2.062c1.125 0 2.063.914 2.063 2.062 0 .54-.188 1.079-.516 1.524l-1.149 1.547a.72.72 0 0 1-1.03.14c-.352-.234-.423-.703-.165-1.054z' />
    </g>
    <defs>
      <clipPath id='7ef87ee91fa65df6fcbe044ebf9f41e1__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineCaptionFillIcon);
export default ForwardRef;
