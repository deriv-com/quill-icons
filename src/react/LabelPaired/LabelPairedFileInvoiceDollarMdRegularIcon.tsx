import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11 18v-8H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 6v12q0 .438.281.719A.97.97 0 0 0 2 19h8a.97.97 0 0 0 .719-.281A.97.97 0 0 0 11 18m0-9a.8.8 0 0 0-.156-.219L7.219 5.156A.46.46 0 0 0 7 5.031V8.5q.031.47.5.5zM0 6q.03-.843.594-1.406Q1.157 4.032 2 4h4.875q.624 0 1.063.438l3.625 3.625Q12 8.499 12 9.125V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18zm2 .5q.031-.469.5-.5h2q.47.031.5.5-.03.47-.5.5h-2q-.469-.03-.5-.5m0 2q.031-.469.5-.5h2q.47.031.5.5-.03.47-.5.5h-2q-.469-.03-.5-.5m4.5 3.125v.406q.405.063.75.156.438.126.375.594-.156.438-.625.375A6 6 0 0 0 6 13a1.9 1.9 0 0 0-.781.156q-.25.156-.219.313-.03.062.219.219.312.156.906.28l.031.032q.563.125 1.125.375.626.312.719 1.125-.063.906-.75 1.219-.345.187-.75.25v.437q-.03.438-.5.5-.469-.062-.5-.5v-.468a10 10 0 0 1-.937-.22 1 1 0 0 1-.157-.062h-.031q-.437-.187-.344-.625.157-.437.625-.343.095.03.219.062.625.22 1.156.25.438 0 .75-.156.25-.126.219-.313.03-.125-.219-.281-.312-.156-.906-.312h-.094a4.7 4.7 0 0 1-1.031-.376q-.655-.281-.75-1.093.094-.906.781-1.188.345-.187.719-.25v-.406q.063-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='59a2e31c45b7e697__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarMdRegularIcon);
export default ForwardRef;
