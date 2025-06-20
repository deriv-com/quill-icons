import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.281 9.188v.03a.78.78 0 0 0 .469.97.734.734 0 0 0 .938-.47l.03-.03a.235.235 0 0 1 .22-.157H8.75c.281 0 .5.188.5.469a.49.49 0 0 1-.25.406l-1.375.781c-.25.126-.375.376-.375.657v.406c0 .438.313.75.75.75.406 0 .719-.312.75-.719l1-.594c.594-.343 1-1 1-1.687 0-1.094-.906-2-2-2H6.938c-.75 0-1.407.469-1.657 1.188M7 15c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1' />
    </g>
    <defs>
      <clipPath id='951b0255e73d028425d7ea77f8f85ea9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionMdFillIcon);
export default ForwardRef;
