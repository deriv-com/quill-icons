import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 5.938h-8.75q-.41.027-.437.437v8.75q.027.41.437.438h8.75q.41-.028.438-.438v-8.75q-.028-.41-.438-.437m-8.75-1.313h8.75q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='8071669b7da75a3ee6c27bcf65ebcd78__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareSmBoldIcon);
export default ForwardRef;
