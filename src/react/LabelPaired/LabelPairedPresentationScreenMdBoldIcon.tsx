import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 4h16.5q.687.063.75.75-.063.687-.75.75H.75Q.063 5.437 0 4.75.063 4.063.75 4M1 6.5h1.5v6.75q.03.22.25.25h12.5q.22-.03.25-.25V6.5H17v6.75q-.03.75-.5 1.25-.5.47-1.25.5h-5.5v1.438l2.281 2.28q.438.533 0 1.063-.531.438-1.062 0L9 17.813 7.031 19.78q-.531.438-1.062 0-.438-.531 0-1.062l2.281-2.282V15h-5.5q-.75-.03-1.25-.5-.469-.5-.5-1.25z' />
    </g>
    <defs>
      <clipPath id='15d9fc510103182c7199c29930bd52eb__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdBoldIcon);
export default ForwardRef;
