import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.938q-.41.027-.437.437v8.75q.027.41.437.438h12.25q.41-.028.438-.438v-8.75q-.028-.41-.438-.437zm-1.75.437q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm3.281.875q.602.054.656.656v5.688q-.054.601-.656.656-.601-.055-.656-.656V7.906q.054-.601.656-.656m1.969 0q.41.027.438.438v6.125q-.029.41-.438.437-.41-.027-.437-.437V7.687q.027-.41.437-.437m1.313.656q.054-.601.656-.656.601.054.656.656v5.688q-.054.601-.656.656-.601-.055-.657-.656zm3.718-.656q.602.054.656.656v5.688q-.054.601-.656.656-.601-.055-.656-.656V7.906q.054-.601.656-.656m1.969.438q.027-.411.438-.438.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437z' />
    </g>
    <defs>
      <clipPath id='62fc1e5015b3c9671a2c6c76d7806956__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeSmBoldIcon);
export default ForwardRef;
