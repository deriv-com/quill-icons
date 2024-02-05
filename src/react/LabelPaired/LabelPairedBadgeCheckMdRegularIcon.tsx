import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.969 6.219v.031q-.219.312-.594.219-1.281-.345-2.312.593-.938 1.032-.594 2.313.093.375-.25.594Q1.063 10.594 1 12q.063 1.406 1.25 2.063.312.187.219.562-.344 1.281.594 2.313 1.03.937 2.312.593.375-.093.594.25Q6.593 18.937 8 19q1.406-.062 2.063-1.25.187-.312.562-.219 1.281.345 2.313-.593.936-1.032.593-2.313-.093-.375.25-.594Q14.937 13.406 15 12q-.062-1.406-1.25-2.031-.312-.219-.219-.594.344-1.281-.594-2.312-1.03-.937-2.312-.594-.375.093-.594-.25Q9.406 5.063 8 5q-1.406.063-2.031 1.219M8 4q1.75.062 2.719 1.438 1.656-.282 2.937.906 1.188 1.281.906 2.937Q15.938 10.25 16 12q-.062 1.75-1.437 2.719.28 1.656-.907 2.937-1.281 1.188-2.937.907Q9.75 19.937 8 20q-1.75-.062-2.719-1.437-1.656.28-2.937-.907-1.188-1.281-.906-2.937Q.063 13.75 0 12q.062-1.75 1.438-2.719-.282-1.656.906-2.937 1.281-1.188 2.937-.907Q6.25 4.063 8 4m3.344 6.344-4 4q-.345.312-.688 0l-2-2q-.312-.345 0-.688.345-.312.688 0L7 13.281l3.656-3.625q.345-.312.688 0 .312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='e2f10913fc37a3c645c5231a890ba137__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdRegularIcon);
export default ForwardRef;
