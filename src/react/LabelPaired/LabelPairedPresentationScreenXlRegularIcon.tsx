import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 6h25.5q.704.046.75.75-.046.704-.75.75H.75Q.047 7.454 0 6.75.047 6.047.75 6m.75 3H3v10.5q0 .657.422 1.078Q3.843 21 4.5 21h18q.657 0 1.078-.422Q24 20.157 24 19.5V9h1.5v10.5q-.047 1.266-.89 2.11-.844.843-2.11.89h-8.25v1.922l4.266 4.312q.468.516 0 1.032-.516.468-1.032 0L13.5 25.828l-3.984 3.938q-.516.468-1.032 0-.468-.516 0-1.032l4.266-4.312V22.5H4.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11z' />
    </g>
    <defs>
      <clipPath id='8ac7f270cd46a59816153730073ab25d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlRegularIcon);
export default ForwardRef;
