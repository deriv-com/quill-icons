import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeSmRegularIcon = (
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
      <path d='M1.875 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h12.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-8.75a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zM2.75 7.688q.027-.411.438-.438.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437zm7.875 0q.027-.411.438-.438.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437zm2.188-.438q.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437V7.687q.027-.41.438-.437M4.5 7.688q.027-.411.438-.438.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437zm2.188-.438q.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437V7.687q.027-.41.438-.437m1.75.438q.027-.411.437-.438.41.027.438.438v6.125q-.028.41-.438.437-.41-.027-.437-.437z' />
    </g>
    <defs>
      <clipPath id='1dd572e57eb209fd6405c6e29cca810d__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeSmRegularIcon);
export default ForwardRef;
