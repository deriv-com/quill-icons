import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 9.719 2.188 12.5H7.78zm-.719-1.406a.964.964 0 0 1 1.407 0l4 4c.28.28.374.718.218 1.093A.95.95 0 0 1 9 14H1c-.406 0-.781-.219-.937-.594a1.01 1.01 0 0 1 .218-1.094z' />
    </g>
    <defs>
      <clipPath id='4cf43ad01b2736830b80c818ac7008af__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpMdBoldIcon);
export default ForwardRef;
