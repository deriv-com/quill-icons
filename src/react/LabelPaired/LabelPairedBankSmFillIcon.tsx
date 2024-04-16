import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.645 3.832a.98.98 0 0 1 .683 0l6.125 2.625a.884.884 0 0 1 .52.984.85.85 0 0 1-.848.684v.219c0 .383-.3.656-.656.656H1.53a.63.63 0 0 1-.656-.656v-.219c-.437 0-.793-.273-.875-.684a.884.884 0 0 1 .52-.984zM3.5 9.875v5.25h1.094v-5.25h1.75v5.25h1.312v-5.25h1.75v5.25H10.5v-5.25h1.723v5.387c.027 0 .054 0 .054.027l1.313.875a.87.87 0 0 1 .355.984.85.85 0 0 1-.82.602H.875c-.41 0-.738-.246-.848-.602a.87.87 0 0 1 .356-.984l1.312-.875c0-.027.028-.027.055-.027V9.875zM7 5.5a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 7 5.5' />
    </g>
    <defs>
      <clipPath id='0173ee5bb9f3acca1fbeee863cbb7a94__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankSmFillIcon);
export default ForwardRef;
