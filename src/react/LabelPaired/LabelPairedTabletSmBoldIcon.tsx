import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletSmBoldIcon = (
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
      <path d='M2.125 5.063q-.41.027-.437.437V16q.027.41.437.438h8.75q.41-.028.438-.438V5.5q-.028-.41-.438-.437zM.375 5.5q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zm5.25 9.188h1.75q.41.027.438.437-.029.41-.438.438h-1.75q-.41-.028-.437-.438.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='4aff3fee66abbfa45e70c4b43c172243__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletSmBoldIcon);
export default ForwardRef;
