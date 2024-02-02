import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneSmBoldIcon = (
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
      <path d='M1.75 16.438h6.125q.41-.028.438-.438v-1.75h1.312V16q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V9.875q.027-.738.52-1.23.492-.493 1.23-.52H3.5v1.313H1.75q-.41.027-.437.437V16q.027.41.437.438m4.375-4.375h6.125q.41-.028.438-.438V5.5q-.028-.41-.438-.437H6.125q-.41.027-.437.437v6.125q.027.41.437.438m-1.75-.438V5.5q.027-.738.52-1.23.492-.493 1.23-.52h6.125q.738.027 1.23.52.493.492.52 1.23v6.125q-.027.738-.52 1.23-.492.493-1.23.52H6.125q-.738-.027-1.23-.52-.493-.492-.52-1.23' />
    </g>
    <defs>
      <clipPath id='dacb4d81a9b7f5aef5906a7d4a921b7d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmBoldIcon);
export default ForwardRef;
