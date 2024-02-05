import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenSmBoldIcon = (
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
      <path d='M1.688 16q.027.41.437.438h8.75q.41-.028.438-.438v-2.187H1.688zm0-3.5h9.625v-7q-.028-.41-.438-.437h-8.75q-.41.027-.437.437zm-1.313-7q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zm5.25 9.188h1.75q.41.027.438.437-.029.41-.438.438h-1.75q-.41-.028-.437-.438.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='6fc9f0b1240597825c798c42b09a9b32__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenSmBoldIcon);
export default ForwardRef;
