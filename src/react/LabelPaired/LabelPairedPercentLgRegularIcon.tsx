import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25m0 3.75a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5C.78 8.508 1.602 8 2.5 8c.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5C4.18 12.531 3.36 13 2.5 13m10 6.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25m0 3.75a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5.468-.742 1.289-1.25 2.187-1.25.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5C14.18 22.531 13.36 23 12.5 23m2.305-13.906-13.75 13.75a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l13.75-13.75a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='33fd39a2deccbe1acc90cda4dcbc3057__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentLgRegularIcon);
export default ForwardRef;
