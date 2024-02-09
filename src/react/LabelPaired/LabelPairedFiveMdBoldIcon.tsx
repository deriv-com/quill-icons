import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.625q.156-.594.75-.625h6.5q.687.063.75.75-.063.687-.75.75H2.375l-.719 4.25h4.219q1.75.03 2.906 1.219Q9.97 13.125 10 14.875q-.03 1.75-1.219 2.906Q7.625 18.97 5.875 19H2.906a3 3 0 0 1-1.594-.437 2.82 2.82 0 0 1-1.093-1.22l-.156-.25q-.22-.655.343-1.03.657-.22 1 .343l.157.25q.438.813 1.343.844h2.969q1.125-.03 1.844-.781.75-.72.781-1.844-.03-1.125-.781-1.844-.72-.75-1.844-.781H.75a.68.68 0 0 1-.562-.281.76.76 0 0 1-.188-.594z' />
    </g>
    <defs>
      <clipPath id='bc2c615c8954c67e74339030e38d9d8c__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdBoldIcon);
export default ForwardRef;
