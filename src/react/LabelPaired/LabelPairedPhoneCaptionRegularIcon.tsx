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
      <path d='m8.79 9.969 2.624 1.125c.422.164.656.61.563 1.054l-.563 2.625a.95.95 0 0 1-.914.75c-.164 0-.305-.023-.445-.023-.094 0-.211 0-.305-.023C4.29 15.102 0 10.555 0 5a.95.95 0 0 1 .727-.914l2.625-.563a.92.92 0 0 1 1.054.563L5.531 6.71c.164.375.07.82-.258 1.078l-.96.797a7.3 7.3 0 0 0 2.601 2.601l.797-.96a.904.904 0 0 1 1.078-.258m1.687 4.781c.093 0 .164-.047.187-.14l.563-2.626c.023-.093-.024-.164-.094-.21l-2.625-1.126a.27.27 0 0 0-.235.047l-.773.961a.75.75 0 0 1-.96.164 7.6 7.6 0 0 1-2.86-2.86.75.75 0 0 1 .164-.96l.96-.773c.048-.07.071-.141.048-.235L3.727 4.367c-.047-.07-.118-.117-.211-.094L.89 4.836C.797 4.836.75 4.93.75 5c0 5.39 4.36 9.75 9.727 9.75' />
    </g>
    <defs>
      <clipPath id='adca58879b3d2f18492b861961ef9b23__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionRegularIcon);
export default ForwardRef;
