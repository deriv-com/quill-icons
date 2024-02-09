import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteSmBoldIcon = (
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
      <path d='M2.188 6.375H1.75q-.41.027-.437.438v7.437q.027.41.437.438h2.625V16H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V6.813q.027-.74.52-1.231.492-.492 1.23-.52h1.121q.083-.573.492-.93.41-.381 1.012-.382.601 0 1.012.383.41.356.492.93H7q.63 0 1.094.382.437.356.601.93H7q-.738 0-1.34.355a2.75 2.75 0 0 0-.93.957H3.062a.85.85 0 0 1-.628-.246.85.85 0 0 1-.247-.628zm1.75-1.094q.027.411.437.438.41-.027.438-.438-.029-.41-.438-.437-.41.027-.437.437M7 16.438h5.25q.41-.028.438-.438v-5.25h-1.313a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V8.563H7q-.41.027-.437.437v7q.027.41.437.438m5.25 1.312H7q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l1.421 1.422q.383.383.383.93V16q-.027.738-.52 1.23-.492.493-1.23.52' />
    </g>
    <defs>
      <clipPath id='31b0e4ff752518093a5446eaad0a3417__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteSmBoldIcon);
export default ForwardRef;
