import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.234 25.266 9 19.078l-6.187 6.188q-.564.42-1.079 0-.42-.516 0-1.032L7.922 18l-6.188-6.187q-.42-.563 0-1.079.516-.42 1.079 0L9 16.922l6.234-6.188q.516-.42 1.032 0 .42.516 0 1.079L10.078 18l6.188 6.234q.42.516 0 1.032-.516.42-1.032 0' />
    </g>
    <defs>
      <clipPath id='d4a384b4c677980936ed7447b7ef1eb2__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlRegularIcon);
export default ForwardRef;
