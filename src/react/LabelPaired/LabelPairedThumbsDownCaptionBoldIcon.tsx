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
      <path d='M7.57 14.703c-.89.258-1.828-.281-2.086-1.172l-.117-.469a2.2 2.2 0 0 0-.469-.82L3.703 10.93a.58.58 0 0 1 .024-.797.56.56 0 0 1 .796.047l1.22 1.312c.327.352.562.797.702 1.266l.117.469a.587.587 0 0 0 .704.398.587.587 0 0 0 .398-.703l-.14-.469a4.5 4.5 0 0 0-.633-1.312c-.118-.164-.118-.399-.024-.586a.55.55 0 0 1 .492-.305H10.5a.385.385 0 0 0 .375-.375c0-.14-.117-.281-.258-.352a.56.56 0 0 1-.351-.375.53.53 0 0 1 .14-.515c.047-.07.094-.14.094-.258a.374.374 0 0 0-.305-.352c-.21-.046-.375-.187-.422-.351a.6.6 0 0 1 .07-.563.36.36 0 0 0 .095-.234c0-.14-.118-.281-.258-.352a.546.546 0 0 1-.328-.656c0-.047.023-.07.023-.117A.4.4 0 0 0 9 5.375H6.703a1.4 1.4 0 0 0-.82.258l-1.453.96a.526.526 0 0 1-.774-.163c-.187-.258-.117-.586.14-.774l1.454-.96a2.65 2.65 0 0 1 1.453-.446H9c.797 0 1.453.656 1.5 1.453.328.281.563.703.563 1.172 0 .117-.024.21-.047.305a1.48 1.48 0 0 1 .539 1.64c.258.282.445.657.445 1.055 0 .844-.68 1.5-1.5 1.5H8.32q.176.387.282.773l.14.47a1.683 1.683 0 0 1-1.172 2.085M.75 12.5a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75v5.25c0 .422-.352.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='64d36493c6b3990499317c5dbac8cc0b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownCaptionBoldIcon);
export default ForwardRef;
