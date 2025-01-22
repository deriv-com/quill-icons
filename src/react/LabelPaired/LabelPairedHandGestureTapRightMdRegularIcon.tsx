import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.688 5a.336.336 0 0 0-.313.313v13.406c0 .156.156.281.313.281.156 0 .312-.125.312-.281V5.312A.336.336 0 0 0 16.688 5M16 10.5a2.01 2.01 0 0 1-1.844 2L13 14.969c.031.062.094.125.125.219l.25.468c.219.438.219.938.031 1.375l-.187.375c-.438.938-1.375 1.563-2.375 1.594h-.188c-.5.031-.937-.062-1.344-.25l-2.406-1.156a2.157 2.157 0 0 1-1.031-2.907L6.656 13c.313-.625 1.063-.906 1.688-.594 0 0 .031.031.062.031.031.032.063.032.063.063.375-.25.844-.312 1.25-.125.125.031.187.094.281.156.344-.25.844-.312 1.281-.125.156.063.281.188.375.281l.563-1.218a1.94 1.94 0 0 1-.25-.969c0-1.094.906-2 2-2 1.125 0 2 .906 2 2zm-1.312.938-.188.374c.531-.187.875-.718.875-1.312 0-.75-.625-1.375-1.375-1.375-.781 0-1.406.625-1.406 1.375v.219l.094-.219c.25-.531.937-.781 1.468-.531s.781.937.531 1.469m-3 4.812 2.437-5.094c.094-.219 0-.5-.25-.625a.51.51 0 0 0-.625.219l-1.312 2.813c-.063.124-.188.187-.313.156-.156-.031-.25-.125-.281-.25a.65.65 0 0 0-.344-.5.6.6 0 0 0-.75.219.4.4 0 0 1-.281.124c-.094 0-.188-.062-.25-.156-.063-.094-.156-.156-.25-.219a.626.626 0 0 0-.75.157c-.063.062-.125.125-.219.125s-.187-.063-.25-.094c-.062-.062-.125-.125-.187-.156a.67.67 0 0 0-.844.312l-.782 1.688a1.563 1.563 0 0 0 .72 2.094l2.406 1.125c.343.156.687.218 1.062.187l.188.031a2.23 2.23 0 0 0 1.843-1.281l.188-.344c.125-.281.094-.562-.031-.843l-.157-.282-.406.844c-.062.188-.25.25-.406.156-.125-.062-.219-.25-.156-.406' />
    </g>
    <defs>
      <clipPath id='0bca28569a4145580a8bbc830697cc32__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightMdRegularIcon);
export default ForwardRef;
